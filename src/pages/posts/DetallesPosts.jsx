//Icons
import { MdOutlinePostAdd } from "react-icons/md";
import { MdMoreTime } from "react-icons/md";
//Hooks
import { useFetch } from "../../utils/hooks/useFetch";
import { useParams } from "react-router-dom";
//Link
import { Link } from "react-router-dom";

export function DetallesPosts() {
  const params = useParams();

  const { data: dataPost, isLoading: postIsLoading } = useFetch(
    `http://localhost:3000/posts/${params.id}`
  );

  const { data: dataUser, isLoading: userIsLoading } = useFetch(
    `http://localhost:3000/users/${params.id}`
  );

  return (
    <div>
      {/**Logica */}
      {!postIsLoading ? (
        <div>
          <h1>
            <MdOutlinePostAdd /> {dataPost.title}
          </h1>
          <p>
            Created by: ,<Link to={`/${dataUser.id}`}>{dataUser.name}</Link>
          </p>
          <p>Content: {dataPost.content}</p>
          <p>Created at: {dataPost.created_at}</p>
        </div>
      ) : (
        <h2>
          <MdMoreTime />
          Cargando...
        </h2>
      )}
    </div>
  );
}
