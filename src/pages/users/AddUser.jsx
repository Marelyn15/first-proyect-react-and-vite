//Icons
import { MdPersonAdd } from "react-icons/md";
//Hooks
import { useSWRConfig } from "swr";
//Formulario
import { UserForm } from "../../components/Form/UserForm";
import { mutate } from "swr";
import { useNavigate } from "react-router-dom";

function AddUser() {
  const navigate = useNavigate();

  //uso de fetch
  const postUser = async (data) => {
    await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(() => {
      mutate("http://localhost:3000/users");
      alert("User Created ✔️");
      navigate(-1);
    });
  };

  return (
    <div>
      <h1>
        <MdPersonAdd />
        Agregar usuarios
      </h1>
      <UserForm onSubmit={(data) => postUser(data)} />
    </div>
  );
}
export default AddUser;
