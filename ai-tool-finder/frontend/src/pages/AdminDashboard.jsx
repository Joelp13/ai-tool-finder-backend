import Navbar from "../components/Navbar";
import AddToolForm from "../components/AddToolForm";
import ReviewModeration from "../components/ReviewModeration";

function AdminDashboard() {
  return (
    <>
      <Navbar />

      <div className="page">
        <h1>Admin Dashboard</h1>

        <div className="admin-section">
          <AddToolForm />
        </div>

        <div className="admin-section">
          <ReviewModeration />
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
