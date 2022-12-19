import { MdOutlineReply } from "react-icons/md";
import { Link, useParams } from "react-router-dom";

function EditUser() {
  return (
    <div>
      <Link to={".."}>
        <MdOutlineReply />
        Atras
      </Link>
      <h1>Hello world</h1>
    </div>
  );
}

export default EditUser;
