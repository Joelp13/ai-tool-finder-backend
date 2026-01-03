import { useEffect, useState } from "react";
import { getAllTools } from "../api/tools";
import StarRating from "./StarRating";
import ReviewForm from "./ReviewForm";
import Navbar from "./Navbar";

function ToolList() {
  const [tools, setTools] = useState([]);
  const [category, setCategory] = useState("");
  const [pricing, setPricing] = useState("");
  const [rating, setRating] = useState("");

  const fetchTools = () => {
    getAllTools({ category, pricing, rating })
      .then((res) => setTools(res.data))
      .catch(console.error);
  };

  useEffect(() => {
    fetchTools();
  }, []);

  return (
    <>
      <Navbar />

      <div className="page">
        <h2>AI Tools</h2>

        <div className="filter-box">
          <h3>Filter Tools</h3>

          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">All Categories</option>
            <option value="NLP">NLP</option>
            <option value="NLC">NLC</option>
          </select>

          <select value={pricing} onChange={(e) => setPricing(e.target.value)}>
            <option value="">All Pricing</option>
            <option value="FREE">FREE</option>
            <option value="PAID">PAID</option>
            <option value="SUBSCRIPTION">SUBSCRIPTION</option>
          </select>

          <select value={rating} onChange={(e) => setRating(e.target.value)}>
            <option value="">All Ratings</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
            <option value="5">5</option>
          </select>

          <button onClick={fetchTools}>Apply</button>
        </div>

        {tools.map((tool) => (
          <div key={tool.id} className="tool-card">
            <h3>{tool.name}</h3>
            <p>Category: {tool.category}</p>
            <p>Pricing: {tool.pricingType}</p>
            <p>Use Case: {tool.useCase}</p>

            <StarRating rating={tool.averageRating || 0} />

            <div className="review-form">
              <ReviewForm toolId={tool.id} username="user" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ToolList;
