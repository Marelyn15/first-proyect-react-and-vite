//Hooks
import { Link, useParams } from "react-router-dom";
//Icons
import { BsFillPersonCheckFill } from "react-icons/bs";
import { MdOutlineReply } from "react-icons/md";

function EditUser() {
  return (
    <div>
      <Link to={".."}>
        <MdOutlineReply />
        Atras
      </Link>
      <h1>
        <BsFillPersonCheckFill /> Editar usuarios
      </h1>
      <label>
        Titulo:
        <input className="Add" placeholder="Title..." />
      </label>
      <label>
        Contenido:
        <input className="Add" placeholder="Content..." />
      </label>

      <button>Enviar</button>
    </div>
  );
}

export default EditUser;
