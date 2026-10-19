# Sourabh Prajapati Case Studies

A one-page React portfolio presenting three production projects whose apps sit behind a login.

## Run locally

```bash
npm install
npm run dev
```

Open the address Vite prints, usually http://localhost:5173.

## Edit content

All text, roles, tech stacks and architecture diagrams live in `src/data/projects.js`. You don't need to touch the components to change wording.

## Add screenshots and phone recordings

1. Capture screens using **demo data only**. Never show real student or school records.
2. Save files in `public/screens/`, for example `public/screens/reels.mp4`.
3. Add them to the project's `media` list in `src/data/projects.js`:

```js
media: [
  { kind: 'phone', src: '/screens/reels.mp4', alt: 'Reels feed scrolling with demo videos' },
  { kind: 'browser', src: '/screens/portal-dashboard.png', alt: 'Admin dashboard with demo schools' },
],
```

`.mp4` and `.webm` files play as looping, muted video. Phone media is shown in a phone frame, and browser media in a browser frame.

## Deploy free on Vercel

1. Push this folder to a new GitHub repository.
2. Go to vercel.com, sign in with GitHub, and click **Add New > Project**.
3. Pick the repository. Vercel detects Vite automatically. Click **Deploy**.
4. Use the URL Vercel gives you in your Upwork portfolio and proposals.
