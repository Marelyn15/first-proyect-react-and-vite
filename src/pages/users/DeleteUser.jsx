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

export function DeleteUser() {
  //Obtener el id:
  const params = useParams();

  const { mutate } = useSWRConfig();
  const navigate = useNavigate();

  //uso de fetch
  const deleteUser = async (data) => {
    await fetch(`http://localhost:3000/users/${params.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": "token-value",
      },
      body: JSON.stringify(data),
    }).then(() => {
      mutate(`http://localhost:3000/users/${params.id}`);
      alert("User deleted ❌");
      navigate(-1);
    });
  };
  return (
    <div>
      <h1>
        <MdOutlineAutoDelete />
        Borrar Registro
      </h1>
      <h2>Detalles de usuario:</h2>
      <DetallesUsuarios />
      <h2>¿Estás seguro de borrar este registro?</h2>
      <Button onSubmit={(data) => deleteUser(data)} />
    </div>
  );
}
