# Security Policy 🔐

## Supported Versions

| Version | Supported           |
|:--------|:--------------------|
| main    | ✅ Security Updates |

This project is a static React application. Security updates are primarily
focused on keeping packages current and addressing any reported
vulnerabilities in frontend assets.

## Reporting a Vulnerability

We take security seriously. If you discover a vulnerability, please report it
privately to prevent public disclosure prior to a fix:

- **GitHub Security Advisory:** (Preferred) Create a private advisory in the
  "Security" tab of this repository.
- **GitHub Issue:** Use this only for non-sensitive security suggestions or
  minor package updates.

We aim to acknowledge and respond to all reports within **48 hours**.

## Security Posture

Noosphere Nexus is compiled to a static client site with:

- No backend servers or databases
- No user accounts or authentication flows
- No sensitive personally identifiable information (PII) processing

This minimal attack surface significantly reduces runtime risk, but we remain
vigilant with regards to dependency safety.

## Hardening Checklist

- [x] **No Unsafe innerHTML:** Avoid `dangerouslySetInnerHTML` to prevent XSS.
- [x] **Secure Links:** External links use `rel="noopener noreferrer"`.
- [ ] **Content Security Policy (CSP):** Strict policy headers evaluated.
- [x] **Dependency Audits:** Run `npm audit` checks regularly in development.
- [x] **Subresource Integrity:** Evaluate for static assets and scripts.

## Sensitive Data

- **No Secrets in Repo:** All configuration is completely public.
- **Console Logs:** No private state or sensitive logs are written to the
  browser console in production.

## Contact

Security lead: [@acidgreenservers](https://github.com/acidgreenservers)
