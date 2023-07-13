import { useState } from "react";

function Item({ description, quantity, packed }) {
  const [isChecked, setIsChecked] = useState(packed);

  return (
    <li className="item">
      <label htmlFor="check">
        <input
          value={isChecked}
          checked={isChecked}
          type="checkbox"
          onChange={(e) => {
            setIsChecked(e.target.checked);
          }}
        />
        {"  "}
        <span className={isChecked ? "active" : ""}>{`${quantity} ${description}`}</span>
      </label>
    </li>
  );
}

export default Item;
