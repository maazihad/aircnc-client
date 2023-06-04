import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

export const app = initializeApp(firebaseConfig);


  // apiKey: "AIzaSyBri1lak_CfHdr_jhbxrH-L28p0xbzfCcg",
  // authDomain: "aircnc-client-e40b2.firebaseapp.com",
  // projectId: "aircnc-client-e40b2",
  // storageBucket: "aircnc-client-e40b2.appspot.com",
  // messagingSenderId: "402292299431",
  // appId: "1:402292299431:web:6d6e47c36948c0d9666d82"