#!/usr/bin/env python3
"""Validate that DMCS release metadata, taxonomy data, and SDK copies agree."""

from __future__ import annotations

import csv
import json
import re
import sys
from datetime import date
from pathlib import Path
from typing import Any, Dict, Iterable, List, Tuple

ROOT = Path(__file__).resolve().parents[1]
DATA_DIR = ROOT / "data"

ID_PATTERNS = {
    "industry": re.compile(r"^\d{2}$"),
    "sector": re.compile(r"^\d{2}\.\d{2}$"),
    "subsector": re.compile(r"^\d{2}\.\d{2}\.\d{3}$"),
    "segment": re.compile(r"^\d{2}\.\d{2}\.\d{3}\.\d{2}$"),
}
VALID_CLASSIFICATIONS = {"GIC", "DIC"}
VALID_STATUSES = {"active", "deprecated", "sunset"}


def load_json(path: Path) -> Dict[str, Any]:
    with path.open("r", encoding="utf-8") as fh:
        return json.load(fh)


def walk_nodes(data: Dict[str, Any]) -> Iterable[Tuple[str, Dict[str, Any], Dict[str, str]]]:
    for industry in data["industries"]:
        yield "industry", industry, {
            "parent_id": "",
            "industry_id": industry["id"],
            "sector_id": "",
            "subsector_id": "",
            "classification": industry["classification"],
        }
        for sector in industry["sectors"]:
            yield "sector", sector, {
                "parent_id": industry["id"],
                "industry_id": industry["id"],
                "sector_id": sector["id"],
                "subsector_id": "",
                "classification": industry["classification"],
            }
            for subsector in sector["subsectors"]:
                yield "subsector", subsector, {
                    "parent_id": sector["id"],
                    "industry_id": industry["id"],
                    "sector_id": sector["id"],
                    "subsector_id": subsector["id"],
                    "classification": industry["classification"],
                }
                for segment in subsector.get("segments", []):
                    yield "segment", segment, {
                        "parent_id": subsector["id"],
                        "industry_id": industry["id"],
                        "sector_id": sector["id"],
                        "subsector_id": subsector["id"],
                        "classification": industry["classification"],
                    }


def taxonomy_counts(data: Dict[str, Any]) -> Dict[str, int]:
    industries = len(data["industries"])
    sectors = sum(len(industry["sectors"]) for industry in data["industries"])
    subsectors = sum(
        len(sector["subsectors"])
        for industry in data["industries"]
        for sector in industry["sectors"]
    )
    segments = sum(
        len(subsector.get("segments", []))
        for industry in data["industries"]
        for sector in industry["sectors"]
        for subsector in sector["subsectors"]
    )
    return {
        "industries": industries,
        "sectors": sectors,
        "subsectors": subsectors,
        "segments": segments,
    }


def validate_taxonomy(data: Dict[str, Any], errors: List[str]) -> None:
    seen_ids = set()

    for expected_level, node, context in walk_nodes(data):
        node_id = node.get("id", "")
        prefix = f"{expected_level} {node_id or '<missing id>'}"

        if node_id in seen_ids:
            errors.append(f"duplicate ID: {node_id}")
        seen_ids.add(node_id)

        if not ID_PATTERNS[expected_level].fullmatch(node_id):
            errors.append(f"{prefix}: invalid ID format")

        if node.get("level") != expected_level:
            errors.append(f"{prefix}: level={node.get('level')!r}, expected {expected_level!r}")

        expected_parent = context["parent_id"] or None
        if node.get("parent_id") != expected_parent:
            errors.append(
                f"{prefix}: parent_id={node.get('parent_id')!r}, expected {expected_parent!r}"
            )

        classification = node.get("classification")
        if classification not in VALID_CLASSIFICATIONS:
            errors.append(f"{prefix}: invalid classification {classification!r}")
        if classification != context["classification"]:
            errors.append(
                f"{prefix}: classification {classification!r} differs from industry "
                f"{context['classification']!r}"
            )

        status = node.get("status")
        if status not in VALID_STATUSES:
            errors.append(f"{prefix}: invalid or missing status {status!r}")

        since = node.get("since")
        if not since:
            errors.append(f"{prefix}: missing since date")
        else:
            try:
                date.fromisoformat(since)
            except ValueError:
                errors.append(f"{prefix}: invalid since date {since!r}")

        if expected_level != "industry" and node.get("industry_id") != context["industry_id"]:
            errors.append(
                f"{prefix}: industry_id={node.get('industry_id')!r}, "
                f"expected {context['industry_id']!r}"
            )

        if expected_level in {"subsector", "segment"} and node.get("sector_id") != context["sector_id"]:
            errors.append(
                f"{prefix}: sector_id={node.get('sector_id')!r}, expected {context['sector_id']!r}"
            )

        if expected_level == "segment" and node.get("subsector_id") != context["subsector_id"]:
            errors.append(
                f"{prefix}: subsector_id={node.get('subsector_id')!r}, "
                f"expected {context['subsector_id']!r}"
            )


def validate_csv(data: Dict[str, Any], errors: List[str]) -> None:
    csv_path = DATA_DIR / "classification.csv"
    with csv_path.open("r", encoding="utf-8-sig", newline="") as fh:
        rows = list(csv.DictReader(fh))

    json_nodes = {node["id"]: (level, node) for level, node, _ in walk_nodes(data)}
    csv_nodes = {row["id"]: row for row in rows}

    if len(rows) != len(json_nodes):
        errors.append(
            f"classification.csv has {len(rows)} rows; classification.json has {len(json_nodes)} nodes"
        )

    missing = sorted(set(json_nodes) - set(csv_nodes))
    extra = sorted(set(csv_nodes) - set(json_nodes))
    if missing:
        errors.append(f"classification.csv missing IDs: {', '.join(missing[:10])}")
    if extra:
        errors.append(f"classification.csv contains unknown IDs: {', '.join(extra[:10])}")

    for node_id in sorted(set(json_nodes) & set(csv_nodes)):
        level, node = json_nodes[node_id]
        row = csv_nodes[node_id]
        for key in ("level", "label", "classification", "since", "status"):
            expected = str(node.get(key, ""))
            if row.get(key, "") != expected:
                errors.append(
                    f"classification.csv {node_id}: {key}={row.get(key)!r}, expected {expected!r}"
                )
        expected_parent = node.get("parent_id") or ""
        if row.get("parent_id", "") != expected_parent:
            errors.append(
                f"classification.csv {node_id}: parent_id={row.get('parent_id')!r}, "
                f"expected {expected_parent!r}"
            )
        if row.get("level") != level:
            errors.append(f"classification.csv {node_id}: level does not match hierarchy")


def validate_sdk_copies(data: Dict[str, Any], errors: List[str]) -> None:
    canonical_json = data
    json_copies = [
        ROOT / "python-sdk" / "dmcs_sdk" / "data" / "classification.json",
        ROOT / "typescript-sdk" / "src" / "data" / "classification.json",
    ]
    for path in json_copies:
        if load_json(path) != canonical_json:
            errors.append(f"{path.relative_to(ROOT)} is not synchronized with data/classification.json")

    canonical_csv = (DATA_DIR / "classification.csv").read_bytes()
    python_csv = ROOT / "python-sdk" / "dmcs_sdk" / "data" / "classification.csv"
    if python_csv.read_bytes() != canonical_csv:
        errors.append(
            "python-sdk/dmcs_sdk/data/classification.csv is not synchronized with data/classification.csv"
        )


def validate_package_versions(version: str, errors: List[str]) -> None:
    package_json = load_json(ROOT / "typescript-sdk" / "package.json")
    package_lock = load_json(ROOT / "typescript-sdk" / "package-lock.json")

    if package_json.get("version") != version:
        errors.append(
            f"typescript-sdk/package.json version={package_json.get('version')!r}, expected {version!r}"
        )

    if package_lock.get("version") != version:
        errors.append(
            f"typescript-sdk/package-lock.json version={package_lock.get('version')!r}, expected {version!r}"
        )

    lock_root_version = package_lock.get("packages", {}).get("", {}).get("version")
    if lock_root_version != version:
        errors.append(
            f"typescript-sdk/package-lock.json root package version={lock_root_version!r}, "
            f"expected {version!r}"
        )


def validate_document_headers(release: Dict[str, Any], errors: List[str]) -> None:
    version = release["version"]
    release_date = release["release_date"]
    counts = release["counts"]

    readme = (ROOT / "README.md").read_text(encoding="utf-8")
    if f"**Version {version}**" not in readme:
        errors.append("README.md version header does not match release.json")
    if f"**Release Date:** {release_date}" not in readme:
        errors.append("README.md release date does not match release.json")

    classification_doc = (ROOT / "CLASSIFICATION.md").read_text(encoding="utf-8")
    if f"**Version:** {version}" not in classification_doc:
        errors.append("CLASSIFICATION.md version does not match release.json")
    if f"**Effective Date:** {release_date}" not in classification_doc:
        errors.append("CLASSIFICATION.md effective date does not match release.json")
    expected_total = (
        f"**Total:** {counts['industries']} Industries · {counts['sectors']} Sectors · "
        f"{counts['subsectors']} Subsectors · {counts['segments']} Segments"
    )
    if expected_total not in classification_doc:
        errors.append("CLASSIFICATION.md counts do not match release.json")


def main() -> int:
    errors: List[str] = []
    release = load_json(DATA_DIR / "release.json")
    taxonomy = load_json(DATA_DIR / "classification.json")

    if taxonomy.get("dmcs_version") != release.get("version"):
        errors.append(
            f"classification.json version={taxonomy.get('dmcs_version')!r}, "
            f"release.json version={release.get('version')!r}"
        )
    if taxonomy.get("release_date") != release.get("release_date"):
        errors.append(
            f"classification.json release_date={taxonomy.get('release_date')!r}, "
            f"release.json release_date={release.get('release_date')!r}"
        )

    counts = taxonomy_counts(taxonomy)
    if counts != release.get("counts"):
        errors.append(f"release counts={release.get('counts')!r}, actual counts={counts!r}")

    total_nodes = sum(counts.values())
    if release.get("total_nodes") != total_nodes:
        errors.append(
            f"release total_nodes={release.get('total_nodes')!r}, actual total_nodes={total_nodes}"
        )

    validate_taxonomy(taxonomy, errors)
    validate_csv(taxonomy, errors)
    validate_sdk_copies(taxonomy, errors)
    validate_package_versions(release["version"], errors)
    validate_document_headers(release, errors)

    if errors:
        print(f"DMCS release validation FAILED with {len(errors)} error(s):")
        for error in errors:
            print(f"  - {error}")
        return 1

    print(
        "DMCS release validation passed: "
        f"v{release['version']} ({total_nodes} nodes; "
        f"{counts['industries']} industries, {counts['sectors']} sectors, "
        f"{counts['subsectors']} subsectors, {counts['segments']} segments)."
    )
    return 0


if __name__ == "__main__":
    sys.exit(main())
