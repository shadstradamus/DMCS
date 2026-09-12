from dmcs_sdk import __version__, classification


def test_release_metadata_and_counts():
    dmcs = classification()
    stats = dmcs.stats()

    assert __version__ == "1.3.3"
    assert dmcs.version == "1.3.3"
    assert dmcs.release_date == "2025-11-13"
    assert stats == {
        "version": "1.3.3",
        "release_date": "2025-11-13",
        "industries": 14,
        "sectors": 60,
        "subsectors": 241,
        "segments": 143,
        "gic_industries": 13,
        "dic_industries": 1,
    }


def test_segment_lookup_preserves_lifecycle_metadata():
    dmcs = classification()
    segment = dmcs.get_by_id("01.01.004.01")

    assert segment is not None
    assert segment.label == "Oilfield Services"
    assert segment.since == "2025-11-13"
    assert segment.status == "active"
    assert segment.parent_id == "01.01.004"
    assert segment.subsector_id == "01.01.004"
    assert segment.sector_id == "01.01"
    assert segment.industry_id == "01"


def test_gic_includes_industry_14():
    dmcs = classification()
    gic_ids = {industry.id for industry in dmcs.get_GIC()}

    assert "14" in gic_ids
    assert "13" not in gic_ids
    assert len(gic_ids) == 13


def test_search_includes_segments():
    dmcs = classification()
    result_ids = {item.id for item in dmcs.search("oilfield")}

    assert "01.01.004" in result_ids
    assert "01.01.004.01" in result_ids
    assert "01.01.004.02" in result_ids
