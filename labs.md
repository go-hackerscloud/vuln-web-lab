# Labs & Challenges

## Challenge 1 — SQL Injection (Beginner)
**Goal:** Extract the password for `admin` using the `/sqli` search page.
**Hint 1:** Try `' OR '1'='1` in the search box.
**Hint 2:** Use boolean-based or UNION payloads to enumerate columns.
**Deliverable:** A text file `solutions/sqli_admin_password.txt` with the admin password.

## Challenge 2 — Stored XSS
**Goal:** Post a comment that executes JavaScript in other users' browsers.
**Hint:** Use `<script>alert(document.cookie)</script>` and observe behavior.
**Defensive follow-up:** Write a short `MITIGATIONS.md` describing how you'd fix output encoding or template changes.

## Challenge 3 — Unrestricted Upload
**Goal:** Upload a webshell and request it.
**Hint:** The app writes files to `uploads/` with original filename.
**Defensive follow-up:** Propose 5 mitigation steps in `mitigations/upload.md`.

## Challenge 4 — Fix & Harden
**Goal:** In a branch, fix one vulnerability — e.g., parameterize SQL queries.
**Deliverable:** PR with code changes and tests.

## Scoring
- Each challenge: 10 points
- Bonus: 5 points for detection rules (basic grep/KQL/Elastic queries)
