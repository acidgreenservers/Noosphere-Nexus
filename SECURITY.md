# Security Policy 🔐

## Supported Versions

| Version | Supported           |
| ------- | ------------------- |
| main    | ✅ Security updates |

This project is a static React application. Security updates are primarily
focused on keeping dependencies current and addressing any reported
vulnerabilities in the frontend code.

## Reporting a Vulnerability

We take the security of this project seriously. If you find a vulnerability,
please report it via one of the following methods:

- **GitHub Security Advisory:** (Preferred) Create a private advisory in the
  "Security" tab of this repository.
- **Email:** <security@acidgreenservers.com>
- **Response target:** Acknowledge within **48 hours**.

**Please do not** publicly disclose vulnerabilities until we have had a chance
to address them.

## Security Posture

Noosphere Nexus is a static site with:

- No backend/database
- No user authentication
- No sensitive PII processing

This minimal attack surface significantly reduces risks, but we remain vigilant
regarding dependency safety.

## Hardening Checklist

- [x] **No `dangerouslySetInnerHTML`**: Avoided to prevent XSS.
- [x] **Secure Links**: All external links use `rel="noopener noreferrer"`.
- [ ] **Content Security Policy (CSP)**: (Planned) Implement strict headers via
  meta tags or hosting provider.
- [x] **Dependency Audits**: Regular `npm audit` checks in development.
- [x] **Subresource Integrity**: (Planned) Evaluate for third-party scripts.
- [x] **Input Validation**: Enforced on any client-side inputs.

## Handling Sensitive Data

- **No Secrets in Repo**: All configuration is public. If future integrations
  require API keys, they will be managed via environment variables (e.g., GitHub
  Actions Secrets) and never committed to source.
- **Logs**: No sensitive data is logged to the browser console in production.
- **Error Messages**: Generic in production to avoid information leakage.

## Contact

Security lead: [@acidgreenservers](https://github.com/acidgreenservers)
