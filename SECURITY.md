# Security Policy

## Supported Versions

This project is in active development, so only the latest version is supported.

| Version | Supported          |
| ------- | ------------------ |
| 1.x.x   | :white_check_mark: |

## Reporting a Vulnerability

We take all security bugs in this project seriously. Thank you for improving the security of our project. We appreciate your efforts and responsible disclosure and will make every effort to acknowledge your contributions.

To report a security vulnerability, please open an issue on our GitHub repository.

Please include the following information in your report:

- A description of the vulnerability and its impact.
- Steps to reproduce the vulnerability.
- Any proof-of-concept code.
- Any other relevant information.

We will respond to your report within 48 hours and will do our best to fix the vulnerability as soon as possible.

## Security Posture

The project is a static React-based website with no backend, database, or user authentication. This significantly reduces its attack surface. The code follows security best practices, such as avoiding `dangerouslySetInnerHTML` and using `rel="noopener noreferrer"` on external links.

## Potential Vulnerabilities

The primary security concerns for this project are:

- **NPM Dependencies:** Vulnerabilities within its NPM dependencies (e.g., React, Vite, or other libraries) could be exploited.
- **Third-Party Scripts:** The inclusion of malicious third-party scripts could compromise the application.
- **Cross-Site Scripting (XSS):** Although the application does not use `dangerouslySetInnerHTML`, there is a potential risk of XSS if untrusted data is ever rendered. The `mathjax` library could be a vector for XSS if it processes untrusted input.

## Recommendations

- **Dependency Scanning:** Regularly scan NPM dependencies for known vulnerabilities using `npm audit`.
- **Third-Party Script Review:** Carefully review any third-party scripts before including them in the application.
- **Content Security Policy (CSP):** Implement a strict Content Security Policy (CSP) to mitigate the risk of XSS attacks.
- **Subresource Integrity (SRI):** Use Subresource Integrity (SRI) to ensure that third-party scripts have not been tampered with.
