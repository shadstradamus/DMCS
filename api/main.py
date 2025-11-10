"""DMCS REST API - FastAPI server for classification lookups"""

from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from typing import Optional, Dict, Any
from pathlib import Path
import sys

# Add parent directory to path to import dmcs_sdk
sys.path.insert(0, str(Path(__file__).parent.parent / "python-sdk"))
from dmcs_sdk import classification, Industry, Sector, Subsector, Segment

app = FastAPI(
    title="DMCS API",
    description="Dynamic Multi-Dimensional Classification Standard REST API",
    version="1.1.1",
    docs_url="/",
    redoc_url="/docs"
)

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load Classification on startup
dmcs = classification()


@app.get("/api/v1/stats")
def get_stats() -> Dict[str, Any]:
    """Get DMCS Classification statistics"""
    return dmcs.stats()


@app.get("/api/v1/industries")
def get_industries(classification_filter: Optional[str] = Query(None, description="Filter by GIC or DIC")):
    """Get all industries, optionally filtered by Classification"""
    if classification_filter:
        if classification_filter not in ["GIC", "DIC"]:
            raise HTTPException(status_code=400, detail="classification_filter must be GIC or DIC")
        industries = dmcs.filter_by_classification(classification_filter)
    else:
        industries = dmcs.industries
    
    return [
        {
            "id": ind.id,
            "label": ind.label,
            "classification": ind.classification,
            "sector_count": len(ind.sectors),
            "subsector_count": ind.subsector_count,
            "segment_count": sum(len(sub.segments) for sec in ind.sectors for sub in sec.subsectors)
        }
        for ind in industries
    ]


@app.get("/api/v1/classify/{classification_id}")
def get_classification(classification_id: str):
    """
    Lookup a classification by ID
    
    Supports:
    - Industry: II (e.g., "09")
    - Sector: II.SS (e.g., "09.01")
    - Subsector: II.SS.SSS (e.g., "09.01.002")
    """
    result = dmcs.get_by_id(classification_id)
    
    if result is None:
        raise HTTPException(status_code=404, detail=f"Classification {classification_id} not found")
    
    if isinstance(result, Industry):
        return {
            "type": "industry",
            "id": result.id,
            "label": result.label,
            "classification": result.classification,
            "sectors": [
                {
                    "id": sec.id,
                    "label": sec.label,
                    "subsector_count": len(sec.subsectors),
                    "segment_count": sum(len(sub.segments) for sub in sec.subsectors)
                }
                for sec in result.sectors
            ],
            "segment_count": sum(len(sub.segments) for sec in result.sectors for sub in sec.subsectors)
        }
    elif isinstance(result, Sector):
        return {
            "type": "sector",
            "id": result.id,
            "label": result.label,
            "industry_id": result.industry_id,
            "classification": result.classification,
            "subsectors": [
                {
                    "id": sub.id,
                    "label": sub.label,
                    "segment_count": len(sub.segments)
                }
                for sub in result.subsectors
            ],
            "segment_count": sum(len(sub.segments) for sub in result.subsectors)
        }
    elif isinstance(result, Subsector):
        return {
            "type": "subsector",
            "id": result.id,
            "label": result.label,
            "sector_id": result.sector_id,
            "industry_id": result.industry_id,
            "classification": result.classification,
            "segments": [
                {
                    "id": seg.id,
                    "label": seg.label
                }
                for seg in result.segments
            ]
        }
    elif isinstance(result, Segment):
        return {
            "type": "segment",
            "id": result.id,
            "label": result.label,
            "subsector_id": result.subsector_id,
            "sector_id": result.sector_id,
            "industry_id": result.industry_id,
            "classification": result.classification
        }


@app.get("/api/v1/search")
def search_classifications(
    q: str = Query(..., description="Search query"),
    case_sensitive: bool = Query(False, description="Case-sensitive search")
):
    """Search classifications by label text"""
    results = dmcs.search(q, case_sensitive=case_sensitive)
    
    return [
        {
            "type": (
                "industry" if isinstance(r, Industry)
                else "sector" if isinstance(r, Sector)
                else "subsector" if isinstance(r, Subsector)
                else "segment"
            ),
            "id": r.id,
            "label": r.label,
            "classification": getattr(r, "classification", None)
        }
        for r in results
    ]


@app.get("/api/v1/Classification/full")
def get_full_Classification():
    """Get complete Classification hierarchy"""
    return {
        "version": dmcs.version,
        "release_date": dmcs.release_date,
        "description": dmcs.description,
        "industries": [
            {
                "id": ind.id,
                "label": ind.label,
                "classification": ind.classification,
                "sectors": [
                    {
                        "id": sec.id,
                        "label": sec.label,
                        "subsectors": [
                            {
                                "id": sub.id,
                                "label": sub.label,
                                "segments": [
                                    {
                                        "id": seg.id,
                                        "label": seg.label
                                    }
                                    for seg in sub.segments
                                ]
                            }
                            for sub in sec.subsectors
                        ]
                    }
                    for sec in ind.sectors
                ]
            }
            for ind in dmcs.industries
        ]
    }


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
