import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCCo5y6Ujx6UUIsgrMLQ96v_10mRlbslNA',
  authDomain: 'graphql-app-3f40f.firebaseapp.com',
  projectId: 'graphql-app-3f40f',
  storageBucket: 'graphql-app-3f40f.appspot.com',
  messagingSenderId: '398855977369',
  appId: '1:398855977369:web:283262fb1b591004c13b08',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
