# Steadfast Tactical

Modern marketing site for Steadfast Tactical — firearm competency training in Lenasia, South Africa.

## Stack

- **Next.js 16** (App Router), TypeScript, Tailwind CSS v4
- **Framer Motion** — section and CTA animations
- **Lucide React** — icons
- **Firebase (Firestore)** — contact form / lead storage

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Firebase setup

1. Create a project at [Firebase Console](https://console.firebase.google.com).
2. Enable **Firestore Database** (Create database → start in test mode, or production with rules below).
3. Copy `.env.local.example` to `.env.local` and set your web app config (Project settings → Your apps → Add app → Web). You need:
   - `NEXT_PUBLIC_FIREBASE_API_KEY`
   - `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
   - `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
   - `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
   - `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
   - `NEXT_PUBLIC_FIREBASE_APP_ID`
4. In Firestore **Rules**, allow only writes to the contact collection (no public reads):

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /contact_inquiries/{docId} {
      allow read: if false;
      allow create: if true;
      allow update, delete: if false;
    }
  }
}
```

5. Restart the dev server. Form submissions are stored in the `contact_inquiries` collection with fields: `name`, `email`, `phone`, `message`, `createdAt`.

## Images and video

- **Images:** The site uses free images from [Unsplash](https://unsplash.com) (see `lib/images.ts`). All are loaded from Unsplash’s CDN; no attribution required.
- **Hero video:** To show a background video in the hero, add an MP4 file at `public/video/hero.mp4`. You can use a free clip from [Pexels](https://www.pexels.com/search/videos/firearm%20training/) (e.g. “Woman firing a rifle” or “Man shooting in firing range”). See `public/video/README.md` for links. If the file is missing, the hero uses a static image.

## Environment

Do not commit `.env.local`. Use `.env.local.example` as a template. No secrets are required for static build; Firebase config is only needed for the contact form at runtime.

## Build

```bash
npm run build
npm run start
```

## Deploy

Works on Vercel, Netlify, or any static/Node host. Set the Firebase env vars in the deployment dashboard.
