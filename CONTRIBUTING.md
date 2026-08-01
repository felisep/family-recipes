# Development workflow

How to develop, test, and ship this project.

## Setup

```bash
bun install
```

## Branches

Three roles. Only the first is for writing code.

| Branch | Role | Deploys to |
| --- | --- | --- |
| `feature/*` | where you actually work | its own throwaway preview URL |
| `dev` | integration / testing | `cookfam.vercel.app` |
| `main` | production | `cookfam.lol` |

`dev` is always a superset of `main`: work lands on `dev`, gets tested, then `main` catches up.

**Never commit directly to `dev` or `main`.** Both are merge targets only. Committing to `dev` makes it diverge from your feature branch and you lose clean fast-forward merges.

**Never force-push or delete `dev`.** It has a Vercel domain pinned to it — rewriting it breaks `cookfam.vercel.app`.

## The loop

### 1. Start a feature

Cut from `dev`, since `dev` holds everything already integrated:

```bash
git switch dev
git pull
git switch -c my-feature
```

### 2. Develop

```bash
bun run dev          # Vite dev server, hot reload
```

Before committing:

```bash
bun run check        # TypeScript, no emit
bun run lint         # Biome
bun run lint:fix     # Biome, autofix what it can
bun run format       # Biome formatter
```

### 3. Test in preview

Merge into `dev` and push. The push is what triggers the Vercel build:

```bash
git switch dev
git merge my-feature
git push
```

Then open **https://cookfam.vercel.app**.

Two gotchas:

- **You must be signed in to Vercel.** Deployment Protection is on, so anyone not logged in gets bounced to `vercel.com/login`. Turn it off in *Project Settings → Deployment Protection → Vercel Authentication* when you want family to test.
- **Vercel only builds commits it hasn't seen.** If `dev` points at a commit already deployed elsewhere, no build happens and the URL 404s with `DEPLOYMENT_NOT_FOUND`. Each merge needs to bring in new commits.

### 4. Ship to production

Once preview looks right, `dev` is the branch you merge into `main`:

```bash
git switch main
git merge dev
git push
```

That deploys to **https://cookfam.lol**.

### 5. Clean up

```bash
git branch -d my-feature
git push origin --delete my-feature
```

Delete feature branches freely — just never `dev`.

## CI

`.github/workflows/react-ci.yml` runs on every push and pull request. It delegates to a shared reusable workflow in [`felisep/common_workflow`](https://github.com/felisep/common_workflow), so the actual steps are defined there rather than in this repo.

## Known gaps

- **No test runner.** `bun run test` maps to `vite test`, which isn't a real Vite command — the script hangs. It's leftover from the Create React App template. Wiring up Vitest would mean adding the dep, a `test` script, and a config block in `vite.config.ts`.
- **`README.md` is stale.** It still describes the CRA setup: it mentions `bun start` (no such script) and a `build/` output folder (the real one is `dist/`, per `vercel.json`).

## Deploy config

Vercel builds with `bun run build` and serves `dist/`, set in `vercel.json`. DNS for `cookfam.lol` stays at Porkbun with a single `A` record pointing at Vercel. `www.cookfam.lol` is deliberately not configured.
