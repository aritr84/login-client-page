import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyBISCcA9aRmNtoOAWwQ8zajT2_w7MQE6VE",
    authDomain: "login-auth-74f34.firebaseapp.com",
    projectId: "login-auth-74f34",
    storageBucket: "login-auth-74f34.appspot.com",
    messagingSenderId: "750129610269",
    appId: "1:750129610269:web:6289056ef5e85657f890f4"
})

export const auth = app.auth()
export default app