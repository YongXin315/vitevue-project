import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDSFUoWNmdlw4OyCK89i5DCX1MvSkZyo6E",
  authDomain: "blood-bank-vue.firebaseapp.com",
  databaseURL: "https://blood-bank-vue-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "blood-bank-vue",
  storageBucket: "blood-bank-vue.appspot.com",
  messagingSenderId: "1005473572226",
  appId: "1:1005473572226:web:2c6519c0684db8307e1b9b"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

export function createUser(name, phone, email, street, city, state, postalcode, message, campname, info, startDate, endDate, time1, time2, venue) {
  const userDocument = {
    Name: name,
    Phone: phone,
    Email: email,
    Street: street,
    City: city,
    State: state,
    PostalCode: postalcode,
    Message: message,
    CampName: campname,
    Information: info,
    StartDate: startDate,
    EndDate: endDate,
    StartTime: time1,
    EndTime: time2,
    Venue: venue,
  };

  addDoc(collection(db,"Apply2"),userDocument)
    .then(() => {
      console.log("Document successfully written!");
    })
    .catch((error) => {
      console.error("Error writing document:",error);
    });
}