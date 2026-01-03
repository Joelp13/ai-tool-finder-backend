import { useState } from "react";

function ToolFilter({ onFilter }) {
  const [category, setCategory] = useState("");
  const [pricing, setPricing] = useState("");
  const [rating, setRating] = useState("");

  const applyFilters = () => {
    onFilter({
      category: category || undefined,
      pricing: pricing || undefined,
      rating: rating || undefined
    });
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>Filter Tools</h3>

      <label>
        Category:
        <select value={category} onChange={e => setCategory(e.target.value)}>
          <option value="">All</option>
          <option value="NLP">NLP</option>
          <option value="NLC">NLC</option>
        </select>
      </label>

      <br />

      <label>
        Pricing:
        <select value={pricing} onChange={e => setPricing(e.target.value)}>
          <option value="">All</option>
          <option value="FREE">FREE</option>
          <option value="PAID">PAID</option>
          <option value="SUBSCRIPTION">SUBSCRIPTION</option>
        </select>
      </label>

      <br />

      <label>
        Min Rating:
        <select value={rating} onChange={e => setRating(e.target.value)}>
          <option value="">All</option>
          <option value="1">1+</option>
          <option value="2">2+</option>
          <option value="3">3+</option>
          <option value="4">4+</option>
          <option value="5">5</option>
        </select>
      </label>

      <br /><br />

      <button onClick={applyFilters}>Apply Filters</button>
    </div>
  );
}

export default ToolFilter;
