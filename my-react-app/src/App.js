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
function NameForm(){
  const [name, setName] = useState('');
  const clearName = () => {
    setName('');
  }
  return(
    <div>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
      <p>Name: {name}</p>
      <button onClick={clearName}>Clear</button>
    </div>
  )
}

// conditional rendering
function Greeting3(props){
  if (props.isLoggedIn){
    return <h1>Welcome back, {props.name}!</h1>
  }
  return <h1>Please sign up.</h1>
}

// ternary
function Greeting4(props){
  return props.isLoggedIn ? <h1>Welcome back, {props.name}!</h1> : <h1>Please sign up.</h1>
}

// hiding elements &&
function Notifications(props){
  return(
    <div>
      {props.isLoggedIn && <h1>Welcome back, {props.name}!</h1>}
    </div>
  )
}
function LoginControl(){
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => { 
    setIsLoggedIn(true);
  }
  const handleLogout = () => {
    setIsLoggedIn(false);
  }
 return(
  <div>
    {isLoggedIn ? (
      <div>
        <h1>Welcome back, !</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
    ) : (
      <div>
        <h1>Please sign up.</h1>
        <button onClick={handleLogin}>Login</button>
      </div>
    )}
  </div>
 )
}


function App() {
  return (

    <div>
      <LoginControl/>
      
      <NameForm/>
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