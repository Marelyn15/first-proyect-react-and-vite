import { MdOutlineReply } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
function AddUser() {
  return (
    <div>
      <Link to={".."}>
        <MdOutlineReply />
        Atras
      </Link>
      <h1>Hola mundo</h1>
    </div>
  );
}
export default AddUser;
