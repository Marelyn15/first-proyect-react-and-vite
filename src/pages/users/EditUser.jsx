//hooks
import { useFetch } from "../../utils/hooks/useFetch";
import { useRef, useState } from "react";

function EditUser() {
  //User`s data Fetch
  const { data } = useFetch(
    `http://localhost:3000/users`,
    "PUT",
    JSON.stringify(userData)
  );

  return (
    <div>
      {" "}
      <h1>Hola</h1>
    </div>
  );
}

export default EditUser;
