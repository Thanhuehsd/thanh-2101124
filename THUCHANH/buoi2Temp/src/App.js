// import logo from './logo.svg';
// import './App.css';

// function App() {

//   return (
//     <div className="App">

//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>

//           Edit <code>src/App.js</code> and save to reload.

//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>

//     </div>
//   );
// }

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
