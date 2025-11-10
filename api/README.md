# DMCS API (Local Reference)

Lightweight FastAPI app for exploring the DMCS classification over HTTP on your own machine.

- **Scope:** local development and self-hosting only. We do not operate a public endpoint.
- **Purpose:** sample REST interface around the Python SDK so you can script against DMCS data.

## Quickstart

```pwsh
# from the repo root
pip install -r api/requirements.txt
uvicorn api.main:app --reload
```

Once running you can open:

- `http://127.0.0.1:8000/` — interactive docs (Swagger UI)
- `http://127.0.0.1:8000/api/v1/stats` — classification statistics
- `http://127.0.0.1:8000/api/v1/classification/full` — complete hierarchy

Stop the server with `Ctrl+C`. Because this project targets local installs, deployment beyond your own environment is optional and left to you.

## Example Endpoints

### Get classification statistics

```bash
curl http://127.0.0.1:8000/api/v1/stats
```

**Response:**
```json
{
  "version": "1.1.0",
  "release_date": "2025-11-09",
  "industries": 13,
  "sectors": 55,
  "subsectors": 193,
  "segments": 34,
  "gic_industries": 12,
  "dic_industries": 1
}
```

### Get industry by ID

```bash
curl http://127.0.0.1:8000/api/v1/classification/09
```

**Response:**
```json
{
  "id": "09",
  "label": "Technology",
  "classification": "GIC",
  "sectors": [...]
}
```

### Get subsector by ID

```bash
curl http://127.0.0.1:8000/api/v1/classification/09.01.001
```

**Response:**
```json
{
  "id": "09.01.001",
  "label": "Enterprise SaaS",
  "sector_id": "09.01",
  "industry_id": "09",
  "classification": "GIC",
  "segments": [
    {
      "id": "09.01.001.01",
      "label": "ERP Software",
      "segment_code": "01"
    },
    {
      "id": "09.01.001.02",
      "label": "CRM Software",
      "segment_code": "02"
    }
  ]
}
```

### Get segment by ID

```bash
curl http://127.0.0.1:8000/api/v1/classification/13.02.004.01
```

**Response:**
```json
{
  "id": "13.02.004.01",
  "label": "Fiat-Backed Stablecoins",
  "segment_code": "01",
  "subsector_id": "13.02.004",
  "sector_id": "13.02",
  "industry_id": "13",
  "classification": "DIC"
}
```

### Search classifications

```bash
curl "http://127.0.0.1:8000/api/v1/search?q=blockchain"
```

**Response:**
```json
[
  {
    "id": "13",
    "label": "Digital & Onchain Economy",
    "classification": "DIC"
  },
  {
    "id": "13.01",
    "label": "DLT & Blockchain Infrastructure",
    "industry_id": "13"
  }
]
```
