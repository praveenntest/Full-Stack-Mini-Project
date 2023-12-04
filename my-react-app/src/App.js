import { Form } from 'react-router-dom';
import './App.css';
import {useState,useEffect} from 'react';

function App() {
const [form, setForm] = useState({});
const [users, setUsers] = useState([]);

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
method : 'POST',
body:JSON.stringify(form),
headers:{
  'Content-Type':'application/json'
}
})
const data = await response.json();
console.log(data)  
}

const getUsers = async () => {
  const response = await fetch('http://localhost:8080/demo',{
  method : 'GET'
})
const data = await response.json();
setUsers(data);
}

useEffect(() => {
  getUsers()
})

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
      <div>
        <ul>
          {users.map(user=><li key={user._id}>{user.username},{user.password}</li>)}
        </ul>
      </div>
  </div>
  );
}

export default App;
