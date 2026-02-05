import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
import { getFirestore, type Firestore } from "firebase/firestore";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

function getFirebaseApp(): FirebaseApp | null {
  if (typeof window === "undefined") return null;
  if (!firebaseConfig.apiKey || !firebaseConfig.projectId) return null;
  if (getApps().length > 0) return getApps()[0] as FirebaseApp;
  return initializeApp(firebaseConfig);
}

function getDb(): Firestore | null {
  const app = getFirebaseApp();
  if (!app) return null;
  return getFirestore(app);
}

const COLLECTION = "contact_inquiries";

export interface ContactSubmission {
  name: string;
  email: string;
  phone: string | null;
  message: string | null;
}

export async function submitContactInquiry(data: ContactSubmission): Promise<void> {
  const db = getDb();
  if (!db) {
    throw new Error("Firebase is not configured. Please set Firebase env variables.");
  }
  await addDoc(collection(db, COLLECTION), {
    name: data.name.trim(),
    email: data.email.trim(),
    phone: data.phone?.trim() || null,
    message: data.message?.trim() || null,
    createdAt: serverTimestamp(),
  });
}
