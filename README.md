# davidsandoz.ch

Personal website - https://davidsandoz.ch

Made with [Nuxt 3](https://nuxt.com).

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

## Deployment

The website is hosted on [statichost.eu](https://statichost.eu).

When pushing to the main branch, a webhook is called to tell `statichost.eu` to fetch the latest state, build and deploy.

Deployment config is in the file `statichost.yml`.
