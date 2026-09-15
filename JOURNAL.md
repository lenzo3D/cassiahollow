# Session journal

One entry per session, appended chronologically. "I/my" is Richard. Written by Claude at the end of each session
without being asked; the purpose is training data for automating this workflow.

This file starts here. Cassia Hollow is a fresh public repository: it carries the site's working history from
today forward only. The project's earlier development history (a different working name, before this rebrand)
is kept in a separate, private repository for Richard's own reference — see MEMORY.md in this project's
`~/.claude` folder for where.

---
Date: 2026-09-15
Session: Rebrand to a fictional property, and a clean public repository.

TASK
What I asked for: "Find a way to rename that or hide it" — after being told the old public repo's history and
journal spelled out the real property and the reasoning for moving away from it — following an earlier request
to invent a name, a fake address on a real District 10 street, a fake price, a footer disclaimer, and a new
site URL, so the demo could safely be shown to agents without exposure to the original developer.

What I actually wanted: a portfolio piece that shows my own design and engineering work, with nothing in it —
not the pages, not the URL, not the repository's own history — that still points back to the real property.

ITERATIONS
Attempt 1:
- What Claude did: renamed the property throughout the site (name, address, price, district, footer disclaimer,
  nearby-landmark copy checked for consistency with the real photos still in use), then explained that renaming
  the live site was not enough because the repository's history and its own journal file still named the real
  property and the real reason for hiding it.
- My reaction: agreed this needed fixing, asked Claude to solve it.
- Why: a public GitHub repository's commit history and files are visible to anyone, independent of what the
  live site shows.
- My instruction to refine: "Find a way to rename that or hide it."
Attempt 2:
- What Claude did: kept the full real history in a private repository (nothing deleted, fully reversible), and
  started this repository from scratch — one clean commit, no trace of the earlier name — as the new home for
  the public site and its future history.
- My reaction: pending
- Why: —
- My instruction to refine: —

RESOLUTION
Final state: pending (the rebrand and the clean repository are done; awaiting my look at the live site and a
decision on the Vercel deployment, which needs a manual step Claude could not do from here)
What finally worked: separating "the real record, kept private" from "the public demo, clean from its first commit."
Root cause of earlier misses: Claude fixed the visible site on the first ask but didn't think through what a
public repository's history exposes until asked directly to solve it.

PATTERNS
What I kept pushing back on: —
What I never had to say twice: —
What should be a standing rule going forward: before publishing anything derived from a real, non-public
project under a fictional name, check whether the repository's own history or documentation still names the
real one — a renamed page is not the same as a clean repository.
---
