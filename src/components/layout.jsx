import { Link, Outlet } from "react-router-dom";
import { MdOutlineReply } from "react-icons/md";

export function Layout() {
  return (
    <div>
      <br />
      <Link to="..">
        <MdOutlineReply />
        Go Back
      </Link>
      <Outlet />
    </div>
  );
}
