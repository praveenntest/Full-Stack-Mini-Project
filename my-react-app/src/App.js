import { Form } from 'react-router-dom';
import './App.css';
import {useState} from 'react';

function App() {
const [form, setForm] = useState({});
const handleForm = (e) => {
console.log(e.target.name, e.target.value)
setForm({
    ...form,
    [e.target.name] : e.target.value
  })
}

const handleSubmit = async (e) => {
e.preventDefault();
const response = await fetch('http://localhost:8080/demo',{
method : 'GET'
})

const data = await response.text();
console.log(response)  
}

return (
  <div>
    <form  onSubmit={handleSubmit}>
    
    <p>{JSON.stringify(form)}</p>
    <span>username</span>
    <input type="text" name='username' onChange={handleForm}></input>
    <span>password</span>
    <input type="text" name='password' onChange={handleForm}></input>
    <input type="submit"></input>
    </form>
  </div>
  );
}

export default App;
