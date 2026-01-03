import { useEffect, useState } from "react";
import { fetchTools } from "./api/toolApi";
import StarRating from "./components/StarRating";

function App() {
  const [tools, setTools] = useState([]);

  // filter states
  const [category, setCategory] = useState("");
  const [pricing, setPricing] = useState("");
  const [rating, setRating] = useState("");

  // load tools
  const loadTools = () => {
    fetchTools({ category, pricing, rating })
      .then((data) => setTools(data))
      .catch((err) => console.error(err));
  };

  // load all tools on page load
  useEffect(() => {
    loadTools();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>AI Tool Finder</h1>

      {/* FILTER UI */}
      <div style={{ marginBottom: "20px" }}>
        <h3>Filter Tools</h3>

        <input
          type="text"
          placeholder="Category (e.g. NLP)"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <select value={pricing} onChange={(e) => setPricing(e.target.value)}>
          <option value="">All Pricing</option>
          <option value="FREE">FREE</option>
          <option value="PAID">PAID</option>
          <option value="SUBSCRIPTION">SUBSCRIPTION</option>
        </select>

        <select value={rating} onChange={(e) => setRating(e.target.value)}>
          <option value="">Any Rating</option>
          <option value="1">1+</option>
          <option value="2">2+</option>
          <option value="3">3+</option>
          <option value="4">4+</option>
          <option value="5">5</option>
        </select>

        <button onClick={loadTools} style={{ marginLeft: "10px" }}>
          Apply Filters
        </button>
      </div>

      {/* TOOL LIST */}
      {tools.length === 0 ? (
        <p>No tools found</p>
      ) : (
        <ul>
          {tools.map((tool) => (
            <li key={tool.id} style={{ marginBottom: "15px" }}>
              <strong>{tool.name}</strong> <br />
              Category: {tool.category} <br />
              Pricing: {tool.pricingType} <br />
              Use Case: {tool.useCase} <br />
              Rating: <StarRating rating={tool.averageRating} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
