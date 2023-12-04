import { useEffect, useState } from "react";
import TodoMain from "./components/TodoMain";
import { addToDo, getAllToDo } from "./utils/HandleApi";

function App() {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    getAllToDo(setToDo);
  }, []);

  return (
    <>
      <div className="container">
        <h1>ToDo</h1>
        <div className="top">
          <input
            type="text"
            placeholder="todo..."
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }} //to make it typable
          ></input>
          <div className="add" onClick={() => addToDo(text, setText, setToDo)}>
            Add
          </div>
        </div>

        <div className="list">
          {toDo.map((item) => (
            <TodoMain key={item.id} text={item.text} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
