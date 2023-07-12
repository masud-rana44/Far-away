function Form() {
  return (
    <div className="form-container">
      <p className="question">
        <strong>What do you need for your 😍 trip?</strong>
      </p>
      <form className="form">
        <select name="item" id="item">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>

        <input type="text" placeholder="Item..." />
        <button type="submit">ADD</button>
      </form>
    </div>
  );
}

export default Form;
