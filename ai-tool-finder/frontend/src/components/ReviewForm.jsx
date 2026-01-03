import { useState } from "react";
import api from "../api/api";

function ReviewForm({ toolId, username }) {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [message, setMessage] = useState("");

  const submitReview = (e) => {
    e.preventDefault();

    api.post("/reviews", {
      toolId,
      username,
      rating,
      comment
    })
    .then(() => {
      setMessage("Review submitted for approval");
      setComment("");
    })
    .catch(err => {
      console.error(err);
      setMessage("Error submitting review");
    });
  };

  return (
    <form onSubmit={submitReview} style={{ marginTop: "10px" }}>
      <label>Rating:</label>
      <select value={rating} onChange={(e) => setRating(e.target.value)}>
        {[1,2,3,4,5].map(r => (
          <option key={r} value={r}>{r}</option>
        ))}
      </select>

      <br />

      <textarea
        placeholder="Write your review"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <br />
      <button type="submit">Submit Review</button>

      {message && <p>{message}</p>}
    </form>
  );
}

export default ReviewForm;
