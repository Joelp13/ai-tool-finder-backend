import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  const logout = () => {
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <div className="navbar">
      <h2>AI Tool Finder</h2>

      <div>
        {role === "USER" && <Link to="/">Tools</Link>}
        {role === "ADMIN" && <Link to="/admin">Admin Dashboard</Link>}
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}

export default Navbar;
