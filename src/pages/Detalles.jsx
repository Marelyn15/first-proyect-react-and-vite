//Peticiones
import { Link, useParams } from "react-router-dom";
//fetch
import { useFetch } from "../utils/hooks/useFetch";
import { useFetchPost } from "../utils/hooks/useFetchPost";
//Emojis
import { MdMoreTime } from "react-icons/md";
import { MdOutlineReply } from "react-icons/md";
import { MdPeopleAlt } from "react-icons/md";
import { MdOutlinePostAdd } from "react-icons/md";
import { MdOutlineKeyboardTab } from "react-icons/md";
//css
import "../styles/cards.css";

function Detalles() {
  const params = useParams();
  //Data de los user by id
  const { data, isLoading } = useFetch(
    `http://localhost:3000/users/${params.id}`
  );

  //Data de los posts de acuerdo a los users
  const { dataPost } = useFetchPost(`http://localhost:3000/posts/${params.id}`);

  if (isLoading)
    return (
      <h1>
        <MdMoreTime /> Cargando...
      </h1>
    );
  return (
    <div>
      <br />
      <Link to={".."}>
        <MdOutlineReply />
        Atras
      </Link>
      {/*Datos de los usuarios */}
      <h1>
        <MdPeopleAlt /> {data.name}
      </h1>
      <p>Edad: {data.age}</p>

      <h2>
        <MdOutlinePostAdd />
        Posts
      </h2>
      <h3>
        <em>{dataPost.title}</em>
      </h3>
      <p>{dataPost.content}</p>
      <p>
        <strong>Creado:</strong> {dataPost.created_at}
      </p>
    </div>
  );
}

export default Detalles;
