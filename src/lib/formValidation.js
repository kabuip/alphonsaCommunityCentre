// Shared form validation helpers used by public-facing forms.

// Strict but pragmatic email pattern: local@domain.tld
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function isValidEmail(email) {
  if (!email) return false;
  return EMAIL_RE.test(String(email).trim());
}