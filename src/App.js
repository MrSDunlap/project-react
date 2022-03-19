import React, {useState} from "react";
import Tweet from "./Tweet";

function App() {

  const [users, setUsers] = useState([
    {name: 'Stephen', message: 'Hello There'},
    {name: 'Domonic', message: 'How are you doing'},
    {name: 'Ethan', message: 'What is going on'}
  ]);

  return(
    <div className="app">
      {users.map(user => (
        <Tweet name={user.name} message={user.message}/>
      ))}
    </div>
  )
}


export default App;