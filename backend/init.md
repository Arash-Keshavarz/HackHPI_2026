# Backend Init

This backend is the API layer for the agriculture safety dashboard project.

## Purpose

Expose structured ML results to the frontend through simple FastAPI endpoints.

The backend should become the place where:

- ML outputs are collected
- data is normalized into typed Pydantic models
- frame or run data is serialized into stable JSON
- the frontend gets one predictable API contract

## Current State

Right now the backend is still minimal.

Current files:

- `main.py`
- `requirements.txt`
- `Makefile`
- `README.md`

Current endpoint:

- `GET /test`

## Intended Backend Job

The backend should sit between raw ML outputs and the dashboard.

Its job is to:

- accept or load detection and reasoning results
- store them in Pydantic models
- group results by run, frame, or timestamp
- expose clean GET endpoints for the frontend
- keep the response shape stable even if ML internals change

## Recommended Data Responsibility

Backend should own:

- validation
- response schemas
- DTO serialization
- summary generation fields if they are already computed
- consistent coordinate format for overlays

Frontend should not have to reconstruct scattered ML outputs.

## Recommended API Shape

Prefer one main GET endpoint returning a run with frame-level data.

Suggested response structure:

- `run_id`
- `source`
- `summary`
- `aggregate_metrics`
- `frames`

Each frame should ideally include:

- `frame_index`
- `timestamp_ms`
- `detections`
- `steering`
- `danger_reasoning`
- `uncertainty`
- `summary`

## Backend Rules

- Use Pydantic models for all external response shapes
- Keep endpoint payloads predictable and explicit
- Group data by `frame_index` or `timestamp_ms`
- Normalize bounding boxes before returning them
- Prefer additive schema changes over breaking changes
- Keep ML-specific internals behind API models

## Next Sensible Structure

As the backend grows, this shape would make sense:

- `main.py` for app startup
- `app/api` for routes
- `app/models` for Pydantic models
- `app/services` for loading or transforming ML data
- `app/schemas` if you want request and response models separated

For the hackathon, you do not need to overbuild this early.

## Codex Context

Project-wide and frontend-specific context lives in:

- `../init.md`
- `../frontend/init.md`
- `../frontend/codex-agents/init.yaml`
