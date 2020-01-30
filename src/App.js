import React, { useContext } from 'react';

function App() {
  const newContext = React.createContext({ color : 'black' });
  const value = useContext(newContext);
  console.log('{ color : ', value.color+' }');
  
  return (
    <div className="App">
        <h1>~</h1>
    </div>
  );
}

export default App;
