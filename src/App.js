import React, { useContext } from 'react'
import { store } from './store'

function App() {  
  const globalState = useContext(store)
  console.log('globalState :',globalState)
  console.log('globalState.state :',globalState.state)
  console.log('globalState.state.color :',globalState.state.color)
  return (
    <div>
      <h3>
      hello motherfucker
      </h3>
    </div>
  );
}

export default App;
