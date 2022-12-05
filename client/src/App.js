import React from 'react';
import './App.css';
import EditorScreen from './screens/EditorScreen';

function App() {
  return (
    <React.Fragment>
      <div
        style={{ backgroundColor: '#d4ecff', minHeight: '100vh' }}
        // maxWidth="xl"
      >
        <h1>EditorJS With React</h1>

        <EditorScreen />
      </div>
    </React.Fragment>
  );
}

export default App;
