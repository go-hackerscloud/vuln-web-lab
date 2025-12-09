# GoHackersCloud — Vulnerable Web App Lab

**Purpose:** Learning-focused, intentionally vulnerable web app for teaching OWASP Top 10 and beginner penetration testing techniques.

> ⚠️ **Warning:** This application is deliberately insecure. Run only in isolated/lab environments (local VM or container). Do **not** expose it to the public internet.

## Learning objectives
- Understand and practice exploitation and mitigation of common web vulnerabilities:
  - SQL Injection (SQLi)
  - Cross-Site Scripting (XSS)
  - Unrestricted File Upload
  - Weak authentication & session handling
  - Insecure error handling and information disclosure
- Learn how to detect, log, and mitigate these vulnerabilities.
- Build safe remediation checklists and detection rules.

## Features (deliberately insecure)
- `/sqli` — search form vulnerable to SQL injection (uses SQLite with unsafe query string concatenation).
- `/xss` — reflected and stored XSS demo.
- `/upload` — file upload handler that allows unsafe file types and insecure file names.
- `/auth` — weak login with plaintext password check and predictable session cookie.
- `/info` — page that exposes debug / stack traces when `NODE_ENV=development`.

## Quick start — Docker (recommended)
1. Clone the repo:
   ```bash
   git clone https://github.com/GoHackersCloud/vuln-web-lab.git
   cd vuln-web-lab
