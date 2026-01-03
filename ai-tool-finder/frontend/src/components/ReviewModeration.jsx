import { useEffect, useState } from "react";
import axios from "axios";

function ReviewModeration() {
  const [reviews, setReviews] = useState([]);

  const fetchPendingReviews = async () => {
    const res = await axios.get("http://localhost:8080/admin/reviews/pending");
    setReviews(res.data);
  };

  useEffect(() => {
    fetchPendingReviews();
  }, []);

  const approve = async (id) => {
    await axios.post(`http://localhost:8080/admin/reviews/${id}/approve`);
    fetchPendingReviews();
  };

  const reject = async (id) => {
    await axios.post(`http://localhost:8080/admin/reviews/${id}/reject`);
    fetchPendingReviews();
  };

  return (
    <div>
      <h2>Pending Reviews</h2>

      {reviews.length === 0 ? (
        <p>No pending reviews</p>
      ) : (
        reviews.map((r) => (
          <div
            key={r.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "10px",
            }}
          >
            <p><strong>User:</strong> {r.username}</p>
            <p><strong>Rating:</strong> {r.rating}</p>
            <p><strong>Comment:</strong> {r.comment}</p>

            <button onClick={() => approve(r.id)}>Approve</button>
            <button
              onClick={() => reject(r.id)}
              style={{ marginLeft: "10px" }}
            >
              Reject
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default ReviewModeration;
