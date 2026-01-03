import { useState } from "react";
import axios from "axios";

function AddToolForm() {
  const [tool, setTool] = useState({
    name: "",
    category: "",
    pricingType: "FREE",
    useCase: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setTool({ ...tool, [e.target.name]: e.target.value });
  };

  const submitTool = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8080/tools", tool);
      setMessage("Tool added successfully!");
      setTool({
        name: "",
        category: "",
        pricingType: "FREE",
        useCase: "",
      });
    } catch (err) {
      console.error(err);
      setMessage("Error adding tool");
    }
  };

  return (
    <div>
      <h2>Add New Tool</h2>

      <form onSubmit={submitTool}>
        <input
          name="name"
          placeholder="Tool Name"
          value={tool.name}
          onChange={handleChange}
          required
        />
        <br />

        <input
          name="category"
          placeholder="Category (NLP, NLC...)"
          value={tool.category}
          onChange={handleChange}
          required
        />
        <br />

        <select
          name="pricingType"
          value={tool.pricingType}
          onChange={handleChange}
        >
          <option value="FREE">FREE</option>
          <option value="PAID">PAID</option>
          <option value="SUBSCRIPTION">SUBSCRIPTION</option>
        </select>
        <br />

        <input
          name="useCase"
          placeholder="Use Case"
          value={tool.useCase}
          onChange={handleChange}
          required
        />
        <br />

        <button type="submit">Add Tool</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

export default AddToolForm;
