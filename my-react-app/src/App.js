import React from 'react';
import { useState, useEffect, createContext, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


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
function ItemList(){
  const items = ['Apple', 'Banana', 'Cherry'];
  return(
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  )
}
function ItemListID(){
  const items = [
    {id: 1, name: 'Apple'},
    {id: 2, name: 'Banana'},
    {id: 3, name: 'Cherry'}
  ];
  return(
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  )
}

function ControlledInput(){
  const [value, setValue] = useState('');
  return(
    <div>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
      <p>Value: {value}</p>
      <button onClick={() => setValue('')}>Clear</button>
    </div>
  )
}
function SubmitForm(){
  const [name, setName] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${name}`);
  }
  return(
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
      <button type="submit">Submit</button>
    </form>
  )
}
function FormValidation(){
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes('@')){
      setError('Invalid email');
    }
    else{
      setError('');
      alert(`Email: ${email}`);
    }
  }
  return(
    <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email"/>
      {error && <p style={{color: 'red'}}>{error}</p>}
      <button type="submit">Submit</button>
    </form>
  )
}

function UserForm(){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
 if (!email.includes('@')){
  setError('Invalid email');
 }
    else{
      setError('');
      alert(`Name: ${name}, Email: ${email}`);
    }
  }
  return(
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name"/>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email"/>
      {error && <p style={{color: 'red'}}>{error}</p>}
      <button type="submit">Submit</button>
    </form>
  )

}
// useEffect
function DataFetching(){
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then((data)=>{
      setData(data);
      setLoading(false);
    })
    .catch((error)=>{
console.error('Error fetching data:', error);
setError(error);
setLoading(false);
    })
  }, []);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return <p>No data</p>;
return(
  <div>
    <h1>Posts:</h1>
    <ul>
      {data.map((post)=>(
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  </div>
)
}
// useEffect with Cleanup
function Timer(){
  const [seconds, setSeconds] = useState(0);
  useEffect(()=>{
    const interval = setInterval(()=>{
      setSeconds(seconds + 1);
    }, 1000);
    return ()=> clearInterval(interval);
  }, [seconds]);
  return(
    <div>
      <p>Seconds: {seconds}</p>
    </div>
  )
}
// Context\
const ThemeContext = createContext('');
function ThemeProvider({children}){
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }
  return(
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}
function ThemeSwitcher(){
  const {theme, toggleTheme} = useContext(ThemeContext);
  return(
    <div style={{backgroundColor: theme === 'light' ? 'white' : 'black', color: theme === 'light' ? 'black' : 'white'}}>
      <p>Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}
// Router
function Home(){
  return <h1>Home</h1>
}
function About(){
  return <h1>About</h1>
}
function Contact(){
  return <h1>Contact</h1>
}
function Navbar(){
  return(
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  )
}
function App(){
  return(
    <div>
      <ThemeProvider>
        <ThemeSwitcher/>
      </ThemeProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Router>
      <DataFetching/>
      <Timer/>
      <UserForm/>
      <FormValidation/>
      <ControlledInput/>
      <LoginControl/>
      <ItemListID/>
      <ItemList/>
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