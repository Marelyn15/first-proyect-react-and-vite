//Hooks
import { useSWRConfig } from "swr";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
//Hooks and components
import { Button } from "../../components/Button";
//Pages
import DetallesUsuarios from "./DetallesUsuarios";
//Icons
import { MdOutlineAutoDelete } from "react-icons/md";
import { useEffect } from "react";

export function DeleteUser(props) {
  
  //uso de fetch
  const deleteUser = async () => {
    await fetch(`http://localhost:3000/users/${props.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": "token-value",
      },
    }).then(() => {
      alert("User deleted ❌");
    });
  };

 
  return (
    <div>
      <button onClick={()=>deleteUser(props.id)}>Borrar</button>
    </div>
  );
}
