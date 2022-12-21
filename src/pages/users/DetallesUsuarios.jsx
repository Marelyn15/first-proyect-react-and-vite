//Peticiones
import { Link, useParams } from "react-router-dom";
//fetch
import { useFetch } from "../../utils/hooks/useFetch";
//Emojis
import { MdMoreTime } from "react-icons/md";
import { MdPeopleAlt } from "react-icons/md";
import { MdOutlinePostAdd } from "react-icons/md";

export function DetallesUsuarios() {
  const params = useParams();

  //Data de los user by id
  const { data: dataUser, isLoading: userIsLoading } = useFetch(
    `http://localhost:3000/users/${params.id}`
  );

  //Data de los posts de acuerdo a los users
  const { data: dataPost } = useFetch(
    `http://localhost:3000/users/${params.id}/posts`
  );

  if (userIsLoading)
    return (
      <h1>
        <MdMoreTime /> Cargando...
      </h1>
    );
  return (
    <div>
      <br />
      {/*Datos de los usuarios */}
      <h1>
        <MdPeopleAlt /> {dataUser.name}
      </h1>
      <p>Edad: {dataUser.age}</p>
      <p>Direccion: {dataUser.address}</p>
      {/*Datos de los post*/}
      <h2>
        <MdOutlinePostAdd />
        Posts
      </h2>
      <ul>
        {dataPost.map((post) => {
          return (
            <div>
              <li key={post.id}>
                Titulo: {post.title} 
              </li>
              <br />
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default DetallesUsuarios;
