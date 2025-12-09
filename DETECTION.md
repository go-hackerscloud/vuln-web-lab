# Detection ideas & example rules

## SQLi indicators
- Requests containing `UNION SELECT`, `' OR '1'='1'`, `--`.
- Unexpected 500 errors from `/sqli`.

## XSS indicators
- Submissions containing `<script>` or `onerror=` in form data to `/xss`.

## Upload abuse
- Uploads with `.php`, `.jsp`, `.aspx` extensions in uploads directory.
- Mismatch between MIME type and file signature.

Create simple Kibana dashboard or grep queries to monitor these.
