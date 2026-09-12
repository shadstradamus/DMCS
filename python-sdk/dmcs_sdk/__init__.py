"""DMCS SDK - Dynamic Multi-Dimensional Classification Standard."""

import json
from pathlib import Path

from .classification import classification, Industry, Sector, Subsector, Segment


def _read_package_version() -> str:
    data_path = Path(__file__).resolve().parent / "data" / "classification.json"
    with open(data_path, "r", encoding="utf-8") as fh:
        return json.load(fh)["dmcs_version"]


__version__ = _read_package_version()

__all__ = ["classification", "Industry", "Sector", "Subsector", "Segment"]
