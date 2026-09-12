#!/usr/bin/env python3
"""Synchronize canonical DMCS data and package versions into both SDKs."""

from __future__ import annotations

import json
import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA_DIR = ROOT / "data"


def load_json(path: Path):
    with path.open("r", encoding="utf-8") as fh:
        return json.load(fh)


def write_json(path: Path, data) -> None:
    path.write_text(json.dumps(data, indent=2) + "\n", encoding="utf-8")


def main() -> None:
    release = load_json(DATA_DIR / "release.json")
    version = release["version"]

    copies = [
        (DATA_DIR / "classification.json", ROOT / "python-sdk" / "dmcs_sdk" / "data" / "classification.json"),
        (DATA_DIR / "classification.json", ROOT / "typescript-sdk" / "src" / "data" / "classification.json"),
        (DATA_DIR / "classification.csv", ROOT / "python-sdk" / "dmcs_sdk" / "data" / "classification.csv"),
    ]
    for source, destination in copies:
        destination.parent.mkdir(parents=True, exist_ok=True)
        shutil.copyfile(source, destination)
        print(f"synced {source.relative_to(ROOT)} -> {destination.relative_to(ROOT)}")

    package_json_path = ROOT / "typescript-sdk" / "package.json"
    package_json = load_json(package_json_path)
    package_json["version"] = version
    write_json(package_json_path, package_json)

    package_lock_path = ROOT / "typescript-sdk" / "package-lock.json"
    package_lock = load_json(package_lock_path)
    package_lock["version"] = version
    package_lock.setdefault("packages", {}).setdefault("", {})["version"] = version
    write_json(package_lock_path, package_lock)

    print(f"aligned TypeScript package metadata to DMCS v{version}")
    print("Run: python scripts/validate_release.py")


if __name__ == "__main__":
    main()
