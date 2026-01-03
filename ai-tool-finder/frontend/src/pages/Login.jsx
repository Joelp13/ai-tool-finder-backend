import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const login = () => {
    if (username === "admin") {
      localStorage.setItem("role", "ADMIN");
      navigate("/admin");
    } else if (username === "user") {
      localStorage.setItem("role", "USER");
      navigate("/");
    } else {
      alert("Invalid username (use 'admin' or 'user')");
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>Login</h2>

      <input
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <br /><br />

      <button onClick={login}>Login</button>
    </div>
  );
}

export default Login;
