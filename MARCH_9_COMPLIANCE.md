# March 9th, 2026 Compliance Settings

To ensure OpenClaw continues functioning after the Gemini 3.0 shutdown on March 9th, 2026, the following configuration has been applied:

- **Model Engine**: Set strictly to `google/gemini-3.1-pro`. This avoids the deprecation window of the older 3.0 endpoints.
- **Node.js**: Upgraded to Node.js 22 LTS to comply with the new OpenClaw SDK runtime requirements.
- **Pairing Mode**: Enabled terminal-based 8-digit code pairing to bypass legacy web socket methods that might be sunset alongside older models.