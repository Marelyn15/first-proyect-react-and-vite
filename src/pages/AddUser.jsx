//Icons
import { MdOutlineReply } from "react-icons/md";
import { MdPersonAdd } from "react-icons/md";
//Hooks
import { Link, useParams } from "react-router-dom";
import {useRef, useState} from "react"
//fetch
import { useFetch } from "../utils/hooks/useFetch";
import { useFetchPost } from "../utils/hooks/useFetchPost";
//CSS
import "../styles/AddUser.css";
import "../styles/cards.css";


function AddUser() {
  const params = useParams();

  //Data de los user by id
  const { data, isLoading } = useFetch(
    `http://localhost:3000/users`
  );

  //Data de los posts de acuerdo a los users
  const { dataPost } = useFetchPost(
    `http://localhost:3000/posts`
  );

  //users
  const user_name = useRef(null);
  const user_id = useRef(null);
  //post
  const post_title = useRef(null);
  const posst_description = useRef(null);
  //state
  const [postResult, setPostResult] = useState(null);

  async function userData(){
    const userData = {
      nombre: user_name.current.value,
      id: user_id.current.value,
    };
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
        <input className="Add" placeholder="Nombre..." />
      </label>
      <label>
        Id:
        <input className="Add" placeholder="Id..." />
      </label>
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
export default AddUser;
