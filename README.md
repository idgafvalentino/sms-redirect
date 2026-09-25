# sms-redirect

A Vercel serverless function that generates a fixed SMS draft link.

## Endpoint

`GET /api/sms`

Redirects the visitor to `smsto:?body=<fixed_message>`  - opening a pre-filled SMS compose window on their device.

## Security

The redirect destination is **hardcoded** - visitors cannot supply an arbitrary URL. No open redirect vulnerability.
