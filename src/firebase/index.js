import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB765zQ56mZElt1BAKLtXFrlc_MwnkS1KM',
  authDomain: 'native-crud-eb4c1.firebaseapp.com',
  projectId: 'native-crud-eb4c1',
  storageBucket: 'native-crud-eb4c1.appspot.com',
  messagingSenderId: '956080833931',
  appId: '1:956080833931:web:7d81a40b21e91d6a22db8e',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
