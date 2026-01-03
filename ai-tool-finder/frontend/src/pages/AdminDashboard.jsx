import { useEffect, useState } from "react";
import api from "../api/api";

function AdminDashboard() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    api.get("/admin/reviews/pending")
      .then(res => setReviews(res.data));
  }, []);

  const approve = (id) => {
    api.post(`/admin/reviews/${id}/approve`)
      .then(() => setReviews(reviews.filter(r => r.id !== id)));
  };

  const reject = (id) => {
    api.post(`/admin/reviews/${id}/reject`)
      .then(() => setReviews(reviews.filter(r => r.id !== id)));
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>

      {reviews.map(r => (
        <div key={r.id}>
          <p>{r.comment} (Rating: {r.rating})</p>
          <button onClick={() => approve(r.id)}>Approve</button>
          <button onClick={() => reject(r.id)}>Reject</button>
        </div>
      ))}
    </div>
  );
}

export default AdminDashboard;
