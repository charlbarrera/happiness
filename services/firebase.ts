/**
 *
 * initialize firebase and create a method to save in a collection called mood a state
 */

import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB-5X6X6Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3",
    authDomain: "mood-1a2b3.firebaseapp.com",
    projectId: "mood-1a2b3",
    storageBucket: "mood-1a2b3.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:123456789:web:123456789"
}


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const db = firebase.firestore();

export const saveMood = async (mood: string) => {
    try {
        await db.collection('mood').add({
            mood,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
    } catch (err) {
        console.log(err)
    }
}
