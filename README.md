# website-

Full-stack website starter with a modern React client and Express server.

## Stack

- Client: React + Vite
- Server: Node.js + Express
- Dev workflow: npm workspaces
- Cost: Fully free to run locally and deploy on free tiers

## Project Structure

```text
.
├── client
│   ├── index.html
│   ├── package.json
│   ├── src
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── styles.css
│   └── vite.config.js
├── server
│   ├── package.json
│   └── src
│       └── index.js
├── .gitignore
├── DEPLOYMENT.md
├── S
└── package.json
```

## Quick Start

1. Install dependencies:

```bash
npm install
```

2. Start both client and server:

```bash
npm run dev
```

3. Open the client:

- http://localhost:5173

The server runs on:

- http://localhost:4000

Health API:

- http://localhost:4000/api/health

## Environment Variables

Create `.env` inside `server` if needed:

```bash
PORT=4000
CLIENT_ORIGIN=http://localhost:5173
```

For client API URL override (optional), create `client/.env`:

```bash
VITE_API_URL=http://localhost:4000
```

## Build

Build the client:

```bash
npm run build
```

Run server in production mode:

```bash
npm run start
```

## Free Deployment

See full instructions in `DEPLOYMENT.md`.