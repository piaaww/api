import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [list, setList] = useState([]);
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users').then(result=>setList(result.data))
   },[])
  return (
    <div className="App">
     {list.map((el)=><>
     <h1>{el.name}</h1>
     </>)}
    </div>
  );
}

export default App;
