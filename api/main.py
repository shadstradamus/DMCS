"""DMCS REST API - FastAPI server for classification lookups"""

from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from typing import Optional, Dict, Any
from pathlib import Path
import sys

# Add parent directory to path to import dmcs_sdk
sys.path.insert(0, str(Path(__file__).parent.parent / "python-sdk"))
from dmcs_sdk import Taxonomy

app = FastAPI(
    title="DMCS API",
    description="Dynamic Multi-Dimensional Classification Standard REST API",
    version="1.0.3",
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

# Load taxonomy on startup
taxonomy = Taxonomy()


@app.get("/api/v1/stats")
def get_stats() -> Dict[str, Any]:
    """Get DMCS taxonomy statistics"""
    return taxonomy.stats()


@app.get("/api/v1/industries")
def get_industries(taxonomy_filter: Optional[str] = Query(None, description="Filter by P-TAX or D-TAX")):
    """Get all industries, optionally filtered by taxonomy"""
    if taxonomy_filter:
        if taxonomy_filter not in ["P-TAX", "D-TAX"]:
            raise HTTPException(status_code=400, detail="taxonomy_filter must be P-TAX or D-TAX")
        industries = taxonomy.filter_by_taxonomy(taxonomy_filter)
    else:
        industries = taxonomy.industries
    
    return [
        {
            "id": ind.id,
            "label": ind.label,
            "taxonomy": ind.taxonomy,
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
    result = taxonomy.get_by_id(classification_id)
    
    if result is None:
        raise HTTPException(status_code=404, detail=f"Classification {classification_id} not found")
    
    # Determine type and return appropriate structure
    if hasattr(result, 'sectors'):  # Industry
        return {
            "type": "industry",
            "id": result.id,
            "label": result.label,
            "taxonomy": result.taxonomy,
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
            "taxonomy": result.taxonomy,
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
            "taxonomy": result.taxonomy
        }


@app.get("/api/v1/search")
def search_classifications(
    q: str = Query(..., description="Search query"),
    case_sensitive: bool = Query(False, description="Case-sensitive search")
):
    """Search classifications by label text"""
    results = taxonomy.search(q, case_sensitive=case_sensitive)
    
    return [
        {
            "type": "industry" if hasattr(r, 'sectors') else "sector" if hasattr(r, 'subsectors') else "subsector",
            "id": r.id,
            "label": r.label,
            "taxonomy": r.taxonomy
        }
        for r in results
    ]


@app.get("/api/v1/taxonomy/full")
def get_full_taxonomy():
    """Get complete taxonomy hierarchy"""
    return {
        "version": taxonomy.version,
        "release_date": taxonomy.release_date,
        "description": taxonomy.description,
        "industries": [
            {
                "id": ind.id,
                "label": ind.label,
                "taxonomy": ind.taxonomy,
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
            for ind in taxonomy.industries
        ]
    }


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
