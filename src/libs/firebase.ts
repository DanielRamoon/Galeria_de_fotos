import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_APIEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTDOMAIN,
    projectId:process.env.REACT_APP_FIREBASE_PROJECTID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
    messagingSenderId:process.env.REACT_APP_FIREBASE_MESSEAGINGSENDERID,
    appId: process.env.REACT_APP_FIREBASE_APPID
  };

  const firebaseApp = initializeApp(firebaseConfig);

  export const storage = getStorage(firebaseApp)