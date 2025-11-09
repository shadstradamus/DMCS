"""DMCS REST API - FastAPI server for classification lookups"""

from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from typing import Optional, Dict, Any
from pathlib import Path
import sys

# Add parent directory to path to import dmcs_sdk
sys.path.insert(0, str(Path(__file__).parent.parent / "python-sdk"))
from dmcs_sdk import Classification

app = FastAPI(
    title="DMCS API",
    description="Dynamic Multi-Dimensional Classification Standard REST API",
    version="1.0.4",
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
Classification = Classification()


@app.get("/api/v1/stats")
def get_stats() -> Dict[str, Any]:
    """Get DMCS Classification statistics"""
    return Classification.stats()


@app.get("/api/v1/industries")
def get_industries(classification_filter: Optional[str] = Query(None, description="Filter by GIC or DIC")):
    """Get all industries, optionally filtered by Classification"""
    if classification_filter:
        if classification_filter not in ["GIC", "DIC"]:
            raise HTTPException(status_code=400, detail="classification_filter must be GIC or DIC")
        industries = Classification.filter_by_Classification(classification_filter)
    else:
        industries = Classification.industries
    
    return [
        {
            "id": ind.id,
            "label": ind.label,
            "Classification": ind.Classification,
            "sector_count": len(ind.sectors),
            "subsector_count": ind.subsector_count
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
    result = Classification.get_by_id(classification_id)
    
    if result is None:
        raise HTTPException(status_code=404, detail=f"Classification {classification_id} not found")
    
    # Determine type and return appropriate structure
    if hasattr(result, 'sectors'):  # Industry
        return {
            "type": "industry",
            "id": result.id,
            "label": result.label,
            "Classification": result.Classification,
            "sectors": [
                {
                    "id": sec.id,
                    "label": sec.label,
                    "subsector_count": len(sec.subsectors)
                }
                for sec in result.sectors
            ]
        }
    elif hasattr(result, 'subsectors'):  # Sector
        return {
            "type": "sector",
            "id": result.id,
            "label": result.label,
            "industry_id": result.industry_id,
            "Classification": result.Classification,
            "subsectors": [
                {
                    "id": sub.id,
                    "label": sub.label
                }
                for sub in result.subsectors
            ]
        }
    else:  # Subsector
        return {
            "type": "subsector",
            "id": result.id,
            "label": result.label,
            "sector_id": result.sector_id,
            "industry_id": result.industry_id,
            "Classification": result.Classification
        }


@app.get("/api/v1/search")
def search_classifications(
    q: str = Query(..., description="Search query"),
    case_sensitive: bool = Query(False, description="Case-sensitive search")
):
    """Search classifications by label text"""
    results = Classification.search(q, case_sensitive=case_sensitive)
    
    return [
        {
            "type": "industry" if hasattr(r, 'sectors') else "sector" if hasattr(r, 'subsectors') else "subsector",
            "id": r.id,
            "label": r.label,
            "Classification": r.Classification
        }
        for r in results
    ]


@app.get("/api/v1/Classification/full")
def get_full_Classification():
    """Get complete Classification hierarchy"""
    return {
        "version": Classification.version,
        "release_date": Classification.release_date,
        "description": Classification.description,
        "industries": [
            {
                "id": ind.id,
                "label": ind.label,
                "Classification": ind.Classification,
                "sectors": [
                    {
                        "id": sec.id,
                        "label": sec.label,
                        "subsectors": [
                            {
                                "id": sub.id,
                                "label": sub.label
                            }
                            for sub in sec.subsectors
                        ]
                    }
                    for sec in ind.sectors
                ]
            }
            for ind in Classification.industries
        ]
    }


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
