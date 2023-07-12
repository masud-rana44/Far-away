import Item from "./Item";

function PackingList({ items }) {
  return (
    <div className="packing-container">
      <ul className="item-lists">
        {items.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </ul>
    </div>
  );
}

export default PackingList;
