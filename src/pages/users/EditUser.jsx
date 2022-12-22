//Icons
import { BsFillPersonCheckFill } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
//Hooks
import { useSWRConfig } from "swr";
//Formulario
import { UserForm } from "../../components/Form/UserForm";
import { useNavigate } from "react-router-dom";
//Detalles usuarios
import { DetallesUsuarios } from "./DetallesUsuarios";
//Peticiones
import { useParams } from "react-router-dom";

function EditUser() {
  //Obtener el id:
  const params = useParams();

  const { mutate } = useSWRConfig();
  const navigate = useNavigate();

  //uso de fetch
  const changeUser = async (data) => {
    await fetch(`http://localhost:3000/users/${params.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": "token-value",
      },
      body: JSON.stringify(data),
    }).then(() => {
      mutate(`http://localhost:3000/users/${params.id}`);
      alert("User modified ✔️");
      navigate(-1);
    });
  };
  return (
    <div>
      <h2>
        <FaRegUser /> Datos actuales:{" "}
      </h2>
      <DetallesUsuarios />
      <h2>
        <BsFillPersonCheckFill /> Editar usuario
      </h2>
      <p>
        Si quiere dejar los datos iguales, entonces vuelva a colocarlos en el
        formulario :){" "}
      </p>
      <UserForm onSubmit={(data) => changeUser(data)} />
    </div>
  );
}

export default EditUser;
