import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDG6fVp6hHhy7okNrvBOriULfSgMS8MSOM',
  authDomain: 'digital-tianguis.firebaseapp.com',
  projectId: 'digital-tianguis',
  storageBucket: 'digital-tianguis.appspot.com',
  messagingSenderId: '164382377477',
  appId: '1:164382377477:web:71d05245613642dd993e6c',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
