import { useState } from "react";
//Hooks
import { useFetch } from "../../utils/hooks/useFetch";
//Components
import { SearchBar } from "../../components/SearchBar";
//Link
import { Link } from "react-router-dom";
//Icons
import { MdMoreTime } from "react-icons/md";
import { MdPersonAdd } from "react-icons/md";
import { MdOutlinePersonSearch } from "react-icons/md";
import { MdPerson } from "react-icons/md";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { MdOutlineAutoDelete } from "react-icons/md";
//css
import "../../styles/cards.css";
import "../../styles/options.css";
//
import {DeleteUser} from "./DeleteUser";

export function User() {
  const { data, isLoading } = useFetch("http://localhost:3000/users");
  const [searchTerm, setSearchTerm] = useState("");

  //To lower case para busquedas
  const getNames = () => {
    return data.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };
  return (
    <div>
      <div className="options">
        <h1>
          <MdOutlinePersonSearch />
          Users
        </h1>
        <div className="options-users">
          <p className="addPerson">
            <Link to={"AddPerson"}>
              {" "}
              <MdPersonAdd /> Agregar usuarios
            </Link>
          </p>
        </div>
      </div>
      {/*SearchBar */}
      <SearchBar onSearch={(value) => setSearchTerm(value)} />
      {/*Logica de cartas y nombres */}
      {!isLoading ? (
        <ul>
          {getNames().map((user) => {
            return (
              <div className="card">
                {/**Lista de usuarios */}
                <p key={user.id}>
                  <span className="title">
                    <Link to={`${user.id}`}>
                      <MdPerson /> {user.name}
                    </Link>
                  </span>
                  {/**Editar usuario */}
                  <p className="editPerson">
                    <Link to={`${user.id}/EditUser`}>
                      {" "}
                      <BsFillPersonCheckFill /> Editar usuarios
                    </Link>
                  </p>
                  {/**Borrar usuario */}
                  <DeleteUser id={user.id} />
                </p>
              </div>
            );
          })}
        </ul>
      ) : (
        <h3>
          <MdMoreTime />
          Cargando...
        </h3>
      )}
    </div>
  );
}

export default User;
