//Link
import { Link } from "react-router-dom";
//icons
import { BsServer } from "react-icons/bs";
import { MdPostAdd } from "react-icons/md";
import { MdOutlinePersonSearch } from "react-icons/md";

function App() {
  return (
    <div>
      <h1 style={{ fontSize: "50px" }}>
        <BsServer /> Json Server API
      </h1>
      <ol style={{ fontSize: "2em" }}>
        <li>
          <Link to="/posts">
            {" "}
            <MdPostAdd /> Posts
          </Link>
        </li>
        <li>
          <Link to="/users">
            {" "}
            <MdOutlinePersonSearch /> Users
          </Link>
        </li>
      </ol>
    </div>
  );
}

export default App;
