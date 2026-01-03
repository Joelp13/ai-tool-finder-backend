import { useEffect, useState } from "react";
import { getAllTools } from "../api/tools";
import StarRating from "./StarRating";
import ReviewForm from "./ReviewForm";

function ToolList() {
  const [tools, setTools] = useState([]);

  // 🔹 Filter states
  const [category, setCategory] = useState("");
  const [pricing, setPricing] = useState("");
  const [rating, setRating] = useState("");

  // 🔹 Fetch tools (with filters)
  const fetchTools = () => {
    getAllTools({ category, pricing, rating })
      .then((res) => setTools(res.data))
      .catch((err) => console.error(err));
  };

  // Initial load
  useEffect(() => {
    fetchTools();
  }, []);

  return (
    <div>
      <h2>AI Tools</h2>

      {/* 🔽 FILTER SECTION */}
      <div
        style={{
          border: "1px solid #ccc",
          padding: "12px",
          marginBottom: "20px",
          borderRadius: "6px",
        }}
      >
        <h3>Filter Tools</h3>

        <label>Category: </label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">All</option>
          <option value="NLP">NLP</option>
          <option value="NLC">NLC</option>
        </select>

        <label style={{ marginLeft: "10px" }}>Pricing: </label>
        <select value={pricing} onChange={(e) => setPricing(e.target.value)}>
          <option value="">All</option>
          <option value="FREE">FREE</option>
          <option value="PAID">PAID</option>
          <option value="SUBSCRIPTION">SUBSCRIPTION</option>
        </select>

        <label style={{ marginLeft: "10px" }}>Min Rating: </label>
        <select value={rating} onChange={(e) => setRating(e.target.value)}>
          <option value="">All</option>
          <option value="1">1+</option>
          <option value="2">2+</option>
          <option value="3">3+</option>
          <option value="4">4+</option>
          <option value="5">5</option>
        </select>

        <button
          onClick={fetchTools}
          style={{ marginLeft: "10px" }}
        >
          Apply Filters
        </button>
      </div>

      {/* 🔽 TOOL LIST */}
      {tools.length === 0 ? (
        <p>No tools found</p>
      ) : (
        tools.map((tool) => (
          <div
            key={tool.id}
            style={{
              border: "1px solid #ddd",
              padding: "12px",
              marginBottom: "15px",
              borderRadius: "6px",
            }}
          >
            <h3>{tool.name}</h3>
            <p>Category: {tool.category}</p>
            <p>Pricing: {tool.pricingType}</p>
            <p>Use Case: {tool.useCase}</p>

            {/* ⭐ Star Rating */}
            <StarRating rating={tool.averageRating || 0} />

            {/* 📝 Review Form */}
            <ReviewForm toolId={tool.id} username="user" />
          </div>
        ))
      )}
    </div>
  );
}

export default ToolList;
