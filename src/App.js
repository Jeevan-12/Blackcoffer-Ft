import { useContext, useState } from 'react';
import './App.css';
import HomePage from './Components/HomePage';

import { blackColor } from './Components/UseContext';

function App() {
  const [color, setColor] = useState(false);
  return (
    <blackColor.Provider value={{ color, setColor }}>
      <div
        style={{
          backgroundColor: color ? '#101010' : '#f5f5f5',
          color: color ? '#f5f5f5' : '#101010',
        }}
      >
        <HomePage />
      </div>
    </blackColor.Provider>
  );
}

export default App;
