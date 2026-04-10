# Project Context

This project is a judge-facing dashboard for an agriculture hackathon.

The product story is simple:

- a vehicle sees frames from a camera
- ML models detect objects and danger
- the control system reasons about steering or stopping
- the dashboard shows what the system saw and why it acted

The frontend is not the ML system. Its job is to visualize backend JSON clearly and credibly.

## What The Dashboard Must Communicate

- what was detected
- how certain the model is
- why something is dangerous
- why the steering decision was made
- when the system should stop instead of risk harm

## What Matters Most For Frontend Work

- one strong video-centered dashboard
- clear overlay rendering
- typed DTOs from FastAPI/Pydantic output
- good empty, loading, and error states
- demo clarity over feature sprawl

## Minimum Good Dashboard

- center video with overlays
- current-frame explanation panel
- toggles for overlay layers
- timeline or frame selector
- a few strong charts, not many weak ones

## Primary Risk

The biggest frontend risk is not styling. It is unclear backend data shape. Push for a stable JSON contract early.
