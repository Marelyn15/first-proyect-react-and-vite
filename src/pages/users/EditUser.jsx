//Icons
import { MdPersonAdd } from "react-icons/md";
//Hooks
import { useSWRConfig } from "swr";
//Formulario
import {UserForm} from "../../components/Form/UserForm"
import { mutate } from "swr";
import { useNavigate } from "react-router-dom";
//Detalles usuarios
import {DetallesUsuarios} from "./DetallesUsuarios"

function EditUser() {
  const navigate = useNavigate();
  
  //uso de fetch
  const changeUser = async(data) => {
    await fetch("http://localhost:3000/users/${data.id}", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": "token-value",
      },
      body: JSON.stringify(data),
    }).then(()=>{
      mutate("http://localhost:3000/users/${data.id}");
      alert("User modified ✔️");
      console.log(changeUser);
      navigate(-1);
    })
  }
  return (
    <div>
      <h1>Editar Usuario</h1>
      <h2>datos anteriores</h2>
      <DetallesUsuarios />
      <h2>Area edicion</h2>
      <UserForm onSubmit={(data)=>changeUser(data)} />
    </div>
  );
}

export default EditUser;
