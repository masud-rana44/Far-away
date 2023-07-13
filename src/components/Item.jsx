function Item({ item }) {
  // const handleChange = (e) => {
  //   setIsPacked(() => !e.target.value);
  // };

  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        // onChange={handleChange}
      />
      <span>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

export default Item;
