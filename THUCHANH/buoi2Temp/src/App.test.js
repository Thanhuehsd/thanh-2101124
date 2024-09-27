import React from 'react';
import Hello from './containers/Hello'; // Import component Hello
import Car from './containers/Car'; // Import component Car
import Login from './containers/Login'; // Import component Login

function App() {
  return (
    <div className="App">
      <Hello /> {/* Gọi component Hello */}
      <Car /> {/* Gọi component Car */}
      <Login /> {/* Gọi component Login */}
    </div>
  );
}

export default App;