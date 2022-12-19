import { useState, useEffect } from "react";
//Hooks
import { useFetch } from "../utils/hooks/useFetch";
//Components
import { SearchBar } from "../components/SearchBar";
//Link
import { Link } from "react-router-dom";
//Icons
import { MdMoreTime } from "react-icons/md";
import { MdPersonAdd } from "react-icons/md";
import { MdOutlinePersonSearch } from "react-icons/md";
import { MdPerson } from "react-icons/md";
import { BsFillPersonCheckFill } from "react-icons/bs";
//css
import "../styles/cards.css";
import "../styles/options.css";

function App() {
  const { data, isLoading } = useFetch("http://localhost:3000/users");
  const [searchTerm, setSearchTerm] = useState("")

  //To lower case para busquedas
  const getNames = () =>{
    return data
    .filter((user) => user.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }
  return (
    <div>
      <div className="options">
        <h1>
          <MdOutlinePersonSearch />
          Users
        </h1>
        <div className="options-users">
          <p className="editPerson">
            <Link to={"EditUser"}>
              {" "}
              <BsFillPersonCheckFill /> Editar usuarios
            </Link>
          </p>
          <p className="addPerson">
            <Link to={"AddPerson"}>
              {" "}
              <MdPersonAdd /> Agregar usuarios
            </Link>
          </p>
        </div>
      </div>
      {/*SearchBar */}
      <SearchBar onSearch={(value) => setSearchTerm(value)}/>
      {/*Logica de cartas y nombres */}
      {!isLoading ? (
        <ul>
          { getNames().map((user) => {
            return (
              <div className="card">
                <p key={user.id}>
                  <span className="title">
                    <Link to={`/${user.id}`}>
                      <MdPerson /> {user.name}
                    </Link>
                  </span>
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

export default App;
