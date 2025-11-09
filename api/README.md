# DMCS API (Local Reference)

Lightweight FastAPI app for exploring the DMCS taxonomy over HTTP on your own machine.

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
- `http://127.0.0.1:8000/api/v1/stats` — taxonomy statistics
- `http://127.0.0.1:8000/api/v1/taxonomy/full` — complete hierarchy

Stop the server with `Ctrl+C`. Because this project targets local installs, deployment beyond your own environment is optional and left to you.
