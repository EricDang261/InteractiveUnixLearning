import firebase from "firebase/app"
import "firebase/auth"


const Firebase = firebase.initializeApp({
    apiKey: REACT_APP_API_KEY,
    authDomain: REACT_APP_AUTH_DOMAIN,
    projectId: REACT_APP_PROJECT_ID,
    storageBucket: REACT_APP_STORAGE_BUCKET,
    messagingSenderId: REACT_APP_MESSAGING_SENDER_ID,
    appId: REACT_APP_FIREBASE_ID
})

export const auth = firebase.auth()
export default Firebase