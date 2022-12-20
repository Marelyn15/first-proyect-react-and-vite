//Icons
import { MdOutlineReply } from "react-icons/md";
import { MdPersonAdd } from "react-icons/md";
//Hooks
import { Link, useParams } from "react-router-dom";
import {useRef, useState} from "react"
//fetch
import { useFetch } from "../utils/hooks/useFetch";
//CSS
import "../styles/AddUser.css";
import "../styles/cards.css";


function AddUser() {
  const params = useParams();

  //User`s data Fetch
  const { data, isLoading } = useFetch(
    `http://localhost:3000/users`, "POST",  JSON.stringify(userData) );

  //ultimo elemnto de los id
 
 
  //Constantes
  const userId = 50;
 // console.log(userId)
  const userName = useRef(null);
  const userAge = useRef(null);
  const userAddress = useRef(null);
  //UseState
  const [userResult, setuserResult] = useState(null);
  //envio de datos
  function userData(){
    const userData = {
      id: parseInt(userId)+1,
      name: userName.current.value,
      age: userAge.current.value,
      address:  userAddress.current.value
    }
    console.log(userData);
    alert("se guardaron los datos");
    data.push(userData);
    console.log(data)
  }
  
    //Limpiar datos
  const limpiarSalida = () => {
    setuserResult(null);
  }
  
  return (
    <div>
      <Link to={".."}>
        <MdOutlineReply />
        Atras
      </Link>

      <h1>
        <MdPersonAdd /> Crear nuevos usuarios
      </h1>
      <label>
        Nombre:
        <input type="text" className="Add" ref={userName} placeholder="Nombre..." />
      </label>
      <label>
        Edad:
        <input type="number" className="Add" ref={userAge} placeholder="Edad..." />
      </label>
      <label>
        Direccion:
        <input type="text" className="Add" ref={userAddress} placeholder="Direccion..." />
      </label>
      <button className="buton" onClick={userData}>Enviar</button>
      <button className="buton" onClick={limpiarSalida}>Limpiar</button>

    </div>
  );
}
export default AddUser;
