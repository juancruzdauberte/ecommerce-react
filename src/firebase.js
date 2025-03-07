// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
  addDoc,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGEK0h0ouzTqbnWBv0bTv0VP7FqyctfMk",
  authDomain: "tierradenudos-ecommerce.firebaseapp.com",
  projectId: "tierradenudos-ecommerce",
  storageBucket: "tierradenudos-ecommerce.firebasestorage.app",
  messagingSenderId: "16574502809",
  appId: "1:16574502809:web:f170176cb28742d888e508",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

// export const getItems = async () => {
//   //consulta a la bd proporcionada, consulta la coleccion de items donde el precio sea mayor a 3000
//   const q = query(collection(db, "items"), where("price", ">", 3000));

//   console.log(q);

//   const querySnapshot = await getDocs(q);
//   //querySnapshot es el resultado de la consulta, objeto contiene varios documentos de la colección "items"

//   console.log(querySnapshot.docs);

//   //se accede a .docs que es el array donde contiene cada documento como un QueryDocumentSnapshot. Cada uno de estos documentos tiene su propio método .data() para obtener su contenido.

//   //creo un nuevo array para guardar los documentos en formato objeto dentro de este
//   const items = querySnapshot.docs.map((doc) => ({
//     id: doc.id,
//     ...doc.data(), // extrae todas las propiedades del objeto que retorna doc.data(), y luego las agrega dentro del nuevo objeto que estamos creando.
//   }));

//   console.log(items);
//   return items;
// };

// export const addItem = async (product) => {
//   const itemDoc = collection(db, "items");

//   try {
//     const docRef = await addDoc(itemDoc, product);
//     console.log("documento creado: " + docRef.id);
//   } catch (error) {
//     console.error("Error al subir el producto", error);
//   }
// };
