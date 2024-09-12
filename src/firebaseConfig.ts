// src/firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAlWT6so2yjaet3hNjXZ_zEiB_cMsmp46c",
    authDomain: "crossfit-wod-tracker.firebaseapp.com",
    projectId: "crossfit-wod-tracker",
    storageBucket: "crossfit-wod-tracker.appspot.com",
    messagingSenderId: "514643521285",
    appId: "1:514643521285:web:6077a0c90311c5f840d16c",
    measurementId: "G-D1PD4M3E83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
export const auth = getAuth(app);
