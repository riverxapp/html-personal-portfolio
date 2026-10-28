# Student Portfolio & Résumé

A responsive, single-page student developer portfolio, built with HTML, CSS, and JavaScript. No build step or dependencies are required.

## Customize

- Replace the sample name, biography, university, email, and social profile URLs in `index.html`.
- Update project details in `app.js` and project artwork in `index.html`.
- Replace `assets/alex-morgan-resume.txt` with your résumé and update the download links.
- Adjust colors and fonts in `tokens.css`; layout and responsive styling live in `styles.css`.
- The recommendation section intentionally uses a placeholder until you have permission to add a real reference.

Project filters, keyboard-accessible project dialogs, mobile navigation, scroll reveals, and reduced-motion support are included. Google Fonts and the workspace photograph require an internet connection.

## AI Agent Permission Policy

The AI agent has full permission to inspect, modify, create, rename, or delete any file in this repository as it sees fit.

There are no repository-level restrictions on:

- HTML changes
- CSS changes
- JavaScript changes
- Folder structure changes
- Build or runtime changes
- Content replacement
- Deleting files judged unnecessary

The agent should optimize for the requested outcome, not preserve prior structure.

## Local Preview

```bash
pnpm dev
```

Default host and port come from `.env` when loaded externally, or from the server defaults.

## Docker

```bash
docker build -t html-blank-source .
docker run --rm -p 5173:5173 html-blank-source
```
