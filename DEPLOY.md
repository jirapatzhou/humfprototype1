# Deploying this site

The deployable static site lives in `public/` (plain HTML/CSS/JS, no
build step). `vercel.json` at the repo root sets `outputDirectory:
"public"` so Vercel serves it directly.

Vercel project setup:
- Import `jirapatzhou/humfprototype1`.
- Root Directory: `./` (leave as-is — do not point it at `public/`
  directly, since `vercel.json` needs to be read from the repo root).
- Production Branch: `claude/humf-web-app-prototype`.
- Framework Preset: Other.

The `design/` directory holds the Claude Design canvas sources
(`.dc.html` files) — that's the editable source of truth for future
design iterations, not what gets deployed.
