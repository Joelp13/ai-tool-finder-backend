import { useEffect, useState } from "react";
import { getAllTools } from "../api/tools";
import StarRating from "./StarRating";

function ToolList() {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    getAllTools()
      .then(res => setTools(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>AI Tools</h2>

      {tools.map(tool => (
        <div
          key={tool.id}
          style={{
            border: "1px solid #ddd",
            padding: "12px",
            marginBottom: "10px",
            borderRadius: "6px"
          }}
        >
          <h3>{tool.name}</h3>
          <p>Category: {tool.category}</p>
          <p>Pricing: {tool.pricingType}</p>
          <p>Use Case: {tool.useCase}</p>

          <StarRating rating={tool.averageRating || 0} />
        </div>
      ))}
    </div>
  );
}

export default ToolList;
