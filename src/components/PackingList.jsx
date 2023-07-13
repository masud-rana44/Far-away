import Item from "./Item";

function PackingList({ items }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>

      <div className="actions"></div>
    </div>
  );
}

export default PackingList;
