import { useState } from "react";
import axios from "axios";

function ReviewForm({ toolId, username }) {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [message, setMessage] = useState("");
  const [disabled, setDisabled] = useState(false);

  const submitReview = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8080/reviews", {
        username,
        toolId,
        rating,
        comment,
      });

      setMessage("Review submitted for approval!");
      setDisabled(true);
    } catch (err) {
      const backendMessage = err.response?.data?.message;

      if (backendMessage === "User already reviewed this tool") {
        setMessage("You have already reviewed this tool.");
        setDisabled(true);
      } else {
        setMessage("Error submitting review.");
      }
    }
  };

  return (
    <form onSubmit={submitReview} style={{ marginTop: "10px" }}>
      <h4>Add Review</h4>

      <label>Rating: </label>
      <select
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
        disabled={disabled}
      >
        {[1, 2, 3, 4, 5].map((r) => (
          <option key={r} value={r}>
            {r}
          </option>
        ))}
      </select>

      <br />

      <textarea
        placeholder="Write a comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        disabled={disabled}
        style={{ width: "100%", marginTop: "5px" }}
      />

      <br />

      <button type="submit" disabled={disabled}>
        Submit Review
      </button>

      {message && <p>{message}</p>}
    </form>
  );
}

export default ReviewForm;
