import { useNavigate } from "react-router-dom";

function LogoutButton() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <button
      onClick={logout}
      style={{
        position: "absolute",
        top: "15px",
        right: "15px",
        padding: "6px 12px",
      }}
    >
      Logout
    </button>
  );
}

export default LogoutButton;
