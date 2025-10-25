// src/App.js
import React from "react";
import app from "./firebase"; // Import Firebase

function App() {
  console.log("Firebase initialized:", app.name);
  return (
    <div className="App">
      <h1>🔥 Toy Topia Connected to Firebase!</h1>
    </div>
  );
}

export default App;
