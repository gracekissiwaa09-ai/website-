# Deployment Guide (Free)

This starter is built to deploy using free tiers.

## Option 1: Netlify (Client) + Render (Server)

### 1. Deploy server on Render

1. Push repository to GitHub.
2. In Render, create a new `Web Service`.
3. Set:
   - Root directory: `server`
   - Build command: `npm install`
   - Start command: `npm start`
4. Add environment variables:
   - `PORT=4000`
   - `CLIENT_ORIGIN=https://your-netlify-site.netlify.app`
5. Deploy and copy your Render URL (example: `https://your-api.onrender.com`).

### 2. Deploy client on Netlify

1. In Netlify, import this repository.
2. Set:
   - Base directory: `client`
   - Build command: `npm run build`
   - Publish directory: `dist`
3. Add environment variable:
   - `VITE_API_URL=https://your-api.onrender.com`
4. Deploy.

## Option 2: Vercel (Client) + Render (Server)

Same server steps as above. For Vercel client:

1. Import repository in Vercel.
2. Set Root Directory to `client`.
3. Add `VITE_API_URL` in project environment variables.
4. Deploy.

## Notes

- Free tiers may sleep after inactivity.
- If CORS errors happen, ensure `CLIENT_ORIGIN` exactly matches your client domain.
