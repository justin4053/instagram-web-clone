import { initializeApp, getApp, getApps } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyAGvijrBv9SatQlTl3DYj9z_jvVNR1Bo_E",
  authDomain: "ig-web-clone.firebaseapp.com",
  projectId: "ig-web-clone",
  storageBucket: "ig-web-clone.appspot.com",
  messagingSenderId: "118746833492",
  appId: "1:118746833492:web:c00fe0659d883faf4403c1",
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }
