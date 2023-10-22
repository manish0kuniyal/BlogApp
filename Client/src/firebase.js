
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import {getAuth,GoogleAuthProvider} from 'firebase/auth'


// const firebaseConfig = {
//   apiKey: "AIzaSyCOFM4xALdrOQ6t0E6Q1oVr_eEhHlHv2nc",
//   authDomain: "spotify-70524.firebaseapp.com",
//   projectId: "spotify-70524",
//   storageBucket: "spotify-70524.appspot.com",
//   messagingSenderId: "401996833702",
//   appId: "1:401996833702:web:a01e3225157fe6af04a567",
//   measurementId: "G-ZBNFYZQBJK"
// };

// const app = initializeApp(firebaseConfig);
// export const auth=getAuth(app)
// export const provider=new GoogleAuthProvider()

// const analytics = getAnalytics(app);
// export const signInWithGoogle=()=>{
//  signInWithPopup(auth,provider)
//    .then((results)=>{
//  const name=results._tokenResponse.displayName
//     console.log(name)
//     localStorage.setItem('name',name)
//   }).catch((error)=>{
//     console.log(error)
//    })
// }


export default App
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBc_P78NU0EdSvGHFkZm9VmoMquNaoUkOM",
  authDomain: "gdrive-a27c4.firebaseapp.com",
  projectId: "gdrive-a27c4",
  storageBucket: "gdrive-a27c4.appspot.com",
  messagingSenderId: "227444595789",
  appId: "1:227444595789:web:679c19bf17f7c606a39004",
  measurementId: "G-TQXSGTCMBF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);