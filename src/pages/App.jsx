import { useState, useEffect } from 'react'
//getData
import { useFetch } from '../utils/hooks/useFetch'
//Link
import { Link } from 'react-router-dom';

 

function App() {
  const {data, isLoading} = useFetch("http://localhost:3000/users");

 
  return(
    <div>
      <h1>Users & posts</h1>
      {!isLoading ? (
        <ul>
          {data.map((user)=>{
            return(
              <li key={user.id}>
                <a href='#'>{user.name}</a>
              </li>
            );
          })}
        </ul>
      ):(
        <h3>Cargando...</h3>
      )}
    </div>
  )
}

export default App
