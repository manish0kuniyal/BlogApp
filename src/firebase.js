
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyCOFM4xALdrOQ6t0E6Q1oVr_eEhHlHv2nc",
  authDomain: "spotify-70524.firebaseapp.com",
  projectId: "spotify-70524",
  storageBucket: "spotify-70524.appspot.com",
  messagingSenderId: "401996833702",
  appId: "1:401996833702:web:a01e3225157fe6af04a567",
  measurementId: "G-ZBNFYZQBJK"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const provider=new GoogleAuthProvider()

const analytics = getAnalytics(app);
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