import { useState, useEffect } from 'react'
//getData
import { useFetch } from '../utils/hooks/useFetch'
//Link
import { Link } from 'react-router-dom';
import { MdMoreTime } from "react-icons/md";
import {MdPersonAdd} from "react-icons/md";
//css
import '../styles/cards.css';

 

function App() {
  const {data, isLoading} = useFetch("http://localhost:3000/users");
 
  return(
    <div>
      <h1>Users & posts</h1>
      {!isLoading ? (
        <ul>
          {data.map((user)=>{
            return(
              <div className='card'>
              <p key={user.id}>
                <span className='title'><Link to={`/${user.id}`}><MdPersonAdd/>  {user.name}</Link></span>
              </p>
          </div>
            );
          })}
        </ul>
      ):(
        <h3><MdMoreTime/>Cargando...</h3>
      )}
    </div>
    
  )
}

export default App
