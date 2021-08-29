// import React from 'react';
// import logo from './logo.svg';

// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import * as React from 'react';
import { Alert, Button } from 'react-bootstrap';

// render(<AlertDismissible />);

function App() {
  return (
    <Alert dismissible variant="danger">
      <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
      <p>Change this and that and try again.</p>
      <Button variant="info" onClick={() => console.log('Info')}>
        Info
      </Button>
    </Alert>
  );
}
export default App;
