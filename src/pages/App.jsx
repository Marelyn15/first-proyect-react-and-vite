import { useState, useEffect } from "react";
//getData
import { useFetch } from "../utils/hooks/useFetch";
//Link
import { Link } from "react-router-dom";
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
      {!isLoading ? (
        <ul>
          {data.map((user) => {
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
