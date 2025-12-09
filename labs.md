# Labs & Challenges

## Challenge 1 — SQL Injection (Beginner)
**Goal:** Extract the admin password using `/sqli`.
**Hint:** Try `' OR '1'='1` or `UNION SELECT`.
**Deliverable:** `solutions/sqli_admin_password.txt` with the password.

## Challenge 2 — Stored XSS
**Goal:** Post a comment that executes JS when other users view `/xss`.
**Hint:** Use `<script>alert('XSS')</script>`.
**Defensive follow-up:** Create `mitigations/xss.md`.

## Challenge 3 — Unrestricted Upload
**Goal:** Upload a webshell to `/uploads` and execute it (local only).
**Defensive follow-up:** Add `mitigations/upload.md`.

## Challenge 4 — Fix & Harden
**Goal:** Create a PR that fixes one vulnerability (e.g., parameterized queries).
**Deliverable:** PR + tests.

## Scoring
- Each challenge: 10 points
- Bonus: 5 points for detection rules (KQL/grep/Elastic)
