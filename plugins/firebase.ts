import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

export default defineNuxtPlugin(nuxtApp => {

    const firebaseConfig = {
        apiKey: "AIzaSyAa3jbweY6Hy3wQrwf6MUJPJgYLwMDz_Cw",
        authDomain: "memory-511f5.firebaseapp.com",
        projectId: "memory-511f5",
        storageBucket: "memory-511f5.appspot.com",
        messagingSenderId: "1038910491743",
        appId: "1:1038910491743:web:3af0be63d547d39f669fea",
        measurementId: "G-QCYL2GE25M"
    };

    const app = initializeApp(firebaseConfig)

    nuxtApp.$db = getFirestore(app)
});
