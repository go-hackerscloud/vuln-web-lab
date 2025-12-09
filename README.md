# GoHackersCloud — Vulnerable Web App Lab

**Purpose:** Learning-focused, intentionally vulnerable web app for teaching OWASP Top 10 and beginner penetration testing techniques.

> ⚠️ **Warning:** This application is deliberately insecure. Run only in isolated/lab environments (local VM or container). Do **not** expose it to the public internet.

## Learning objectives
- Practice exploitation and mitigation of:
  - SQL Injection (SQLi)
  - Cross-Site Scripting (XSS)
  - Unrestricted File Upload
  - Weak authentication & session handling
  - Insecure error handling and information disclosure

## Quick start — Docker (recommended)
1. Clone:
   ```bash
   git clone https://github.com/GoHackersCloud/vuln-web-lab.git
   cd vuln-web-lab
