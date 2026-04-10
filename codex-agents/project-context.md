# Project Context

## Product Snapshot

This frontend appears to be the early UI shell for a CSV-driven workflow.

Known backend endpoints in the repo:

- `POST /api/post-upload-csv`
- `GET /api/get-csv-data`

The frontend currently has:

- a starter `App.tsx`
- shared request helpers in `src/requests.ts`
- image and icon assets
- no feature-based component structure yet

## Technical Constraints

- Keep TypeScript strict and readable.
- Prefer small, composable React components.
- Preserve compatibility with Vite and React 19.
- Do not introduce heavy dependencies without a clear reason.
- Treat backend integration as unstable until explicitly validated.
- Prefer incremental refactors over broad rewrites.

## Working Priorities

1. Replace starter UI with task-oriented screens.
2. Build a reliable CSV upload and results experience.
3. Keep request handling, loading states, and failure states explicit.
4. Make the app responsive and accessible early.
5. Keep the structure easy to extend during the hackathon.

## Definition Of Good

- Fast to iterate on
- Easy to demo
- Hard to break with malformed user input
- Clear failure states
- Minimal hidden magic
