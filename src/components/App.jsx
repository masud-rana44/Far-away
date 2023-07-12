import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Status from "./Status";
import "../App.css";

function App() {
  return (
    <div className="container">
      <Logo />
      <Form />
      <PackingList />
      <Status />
    </div>
  );
}

export default App;
