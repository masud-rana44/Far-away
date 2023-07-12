import { useState } from "react";

function Item({ name, quantity }) {
  const [isPacked, setIsPacked] = useState(false);

  const handleChange = (e) => {
    setIsPacked(() => !e.target.value);
  };

  return (
    <li className="item">
      <label htmlFor="check">
        <input
          value={isPacked}
          checked={isPacked}
          type="checkbox"
          id="check"
          onChange={handleChange}
        />
        {"  "}
        {`${quantity} of ${name}`}
      </label>
    </li>
  );
}

export default Item;
