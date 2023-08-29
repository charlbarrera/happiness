/**
 *
 * initialize firebase and create a method to save in a collection called mood a state
 */

import { firebase } from "@react-native-firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDCdp0LA76_uIuHLl7RgXYUPNeX2Gux0ww",
  authDomain: "centralmark-71e35.firebaseapp.com",
  projectId: "centralmark-71e35",
  storageBucket: "centralmark-71e35.appspot.com",
  messagingSenderId: "666990596841",
  appId: "1:666990596841:web:471b79aa76161c7b5f9678",
  measurementId: "G-2N3YDXTC68",
};


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
