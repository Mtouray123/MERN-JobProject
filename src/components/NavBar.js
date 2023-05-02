import { Link } from "react-router-dom";
import { logOut } from "../utilities/users-service";

function NavBar({ user, setUser }) {
  const handleLogOut = () => {
    logOut();
    setUser(null);
  };
  
  const navBarStyle = {
    display: "flex",
    justifyContent: "flex-end",
    marginRight: "20px"
  };
  
  return (
    <nav style={navBarStyle}>
      <Link to="/orders">Job History</Link>
      &nbsp; | &nbsp;
      <Link to="/orders/new">Job Search</Link> <span>Welcome, {user.name}</span>{" "}
      <Link to="" onClick={handleLogOut}>
        Logout
      </Link>
    </nav>
  );
}

export default NavBar;
