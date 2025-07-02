import React from 'react';
import { useState } from 'react';

function Greeting(){
  return <h1>Hello World</h1>
}
// props 
function Greeting2(props){
  return <h1>Hello {props.name}</h1>
}

// props task
function WelcomeMessage(props){
  return <h1>Welcome {props.name}</h1>
}
function Counter(){
  const [count, setCount] = useState(0);
  return(
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}


function App() {
  return (

    <div>
      <Counter/>
      <Greeting/>   
      <Greeting2 name="John"/>
      <WelcomeMessage name="Jane"/>
      <WelcomeMessage name="John"/>
      <WelcomeMessage name="React"/>
    </div>
  );
}

export default App;