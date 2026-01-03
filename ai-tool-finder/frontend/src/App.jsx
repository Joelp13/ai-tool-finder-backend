import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Login from "./components/Login";
import AdminDashboard from "./pages/AdminDashboard";
import UserHome from "./pages/UserHome";

function App() {
  const { user } = useContext(AuthContext);

  if (!user) return <Login />;

  return user.role === "ADMIN" ? <AdminDashboard /> : <UserHome />;
}

export default App;
