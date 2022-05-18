import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBsS6niBga_NqAoJgqTGrG57oGwUeX48zo",
  authDomain: "videojuegosluxury.firebaseapp.com",
  projectId: "videojuegosluxury",
  storageBucket: "videojuegosluxury.appspot.com",
  messagingSenderId: "27517043494",
  appId: "1:27517043494:web:a4d001e93032881079b7e7"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
