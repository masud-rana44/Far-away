import { useState } from "react";

function Form({ setLists }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description) return;

    // added to the lists
    setLists((prevLists) => [
      ...prevLists,
      {
        id: Date.now(),
        description,
        quantity,
        packed: false,
      },
    ]);

    setDescription("");
    setQuantity(1);
  };

  return (
    <div className="form-container">
      <p className="question">
        <strong>What do you need for your 😍 trip?</strong>
      </p>
      <form className="form" onSubmit={handleSubmit}>
        <select
          value={quantity}
          name="item"
          id="item"
          onChange={(e) => setQuantity(+e.target.value)}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
        </select>

        <input
          value={description}
          type="text"
          placeholder="Item..."
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">ADD</button>
      </form>
    </div>
  );
}

export default Form;
