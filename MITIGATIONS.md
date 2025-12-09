# Mitigations & Fixes (summary)

- Use parameterized queries / prepared statements.
- Escape output or use automatic escaping in templates.
- Whitelist file types, validate magic bytes, and rename uploaded files.
- Use bcrypt for password hashing; never store plaintext.
- Set secure cookie flags: HttpOnly, Secure, SameSite=Strict.
- Disable stack traces in production; set NODE_ENV=production.
- Add rate-limiting and account lockouts.
