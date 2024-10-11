import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, setDoc } from "firebase/firestore";
import { getStorage } from "firebase/storage";  // Importar Storage

const firebaseConfig = {
    apiKey: "AIzaSyDrMoGRlfh30USZp5NYgk-gkLPeU6S3MG8",
    authDomain: "ficspeak.firebaseapp.com",
    projectId: "ficspeak",
    storageBucket: "ficspeak.appspot.com",
    messagingSenderId: "783747955191",
    appId: "1:783747955191:web:3a317dd673d824f03716f2",
    measurementId: "G-PP39R3GXJJ"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);  // Inicializa o Firebase Storage

export { db, storage, collection, getDocs, doc, getDoc, setDoc };  // Agora exporta também o storage
