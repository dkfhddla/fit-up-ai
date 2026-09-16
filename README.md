<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1jlwLt0Z-aNOkoNSshqxbVvUM96Gg8pxS

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Run the app:
    `npm run dev`

## AI service temporarily paused

Direct browser access to Gemini is disabled after an API key exposure.
The UI can be built and opened, but person detection and image generation
remain unavailable until an authenticated, rate-limited server API is added.

Do not put Gemini credentials in frontend environment variables, source files,
or import maps. Vite environment-variable exposure is disabled, including
existing `VITE_*` deployment variables. Remove the exposed key from deployment
settings, revoke it in Google AI Studio, and retire affected old deployments.
Any replacement key must be stored exclusively on the server.
