# Codex Agents

This folder contains project-specific agent briefs for working on this frontend.

Current project context:

- Stack: Vite, React 19, TypeScript 6
- Styling: plain CSS today, Tailwind available in dependencies
- Frontend state: still close to the Vite starter template
- Backend contract already present in `src/requests.ts`
- Main backend env var: `VITE_BACKEND`
- Active data flow: CSV upload and CSV data fetch

Use these files as role prompts when you want Codex to focus on one concern without losing project context.

Recommended agent set for this repo:

1. `project-context.md`
2. `ui-agent.md`
3. `frontend-architect-agent.md`
4. `api-integration-agent.md`
5. `accessibility-agent.md`
6. `qa-review-agent.md`
7. `delivery-agent.md`

Suggested usage:

- Use `ui-agent.md` for page structure, visual polish, component ergonomics, and responsive work.
- Use `frontend-architect-agent.md` for folder structure, state boundaries, component design, and refactors.
- Use `api-integration-agent.md` for request helpers, backend wiring, error states, and data flow.
- Use `accessibility-agent.md` before shipping UI changes.
- Use `qa-review-agent.md` when reviewing risks, regressions, and missing tests.
- Use `delivery-agent.md` to close work with validation, cleanup, and release readiness.

The briefs are intentionally concise. They are meant to be copied into agent prompts or used as lightweight working agreements.
