import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const notify = () => toast.success("Hello! This is a success toast!");

  return (
    <div>
      <h1>React-Toastify Demo</h1>
      <button onClick={notify}>Show Toast</button>
      <ToastContainer /> {/* <-- renders the toasts */}
    </div>
  );
}

export default App;
