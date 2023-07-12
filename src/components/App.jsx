import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Status from "./Status";
import "../App.css";
import { useState } from "react";

function App() {
  const [lists, setLists] = useState([]);
  console.log(lists);

  return (
    <div className="container">
      <Logo />
      <Form setLists={setLists} />
      <PackingList items={lists} />
      <Status />
    </div>
  );
}

export default App;
