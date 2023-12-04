import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
// interface Props {
//   text: string;
//   updateMode: () => void;
//   deleteToDo: () => void;
// }

const TodoMain = ({ text, updateMode, deleteToDo }) => {
  return (
    <div className="todo">
      <div className="text">{text}</div>
      <div className="icons">
        <BiEdit className="icon" onClick={updateMode} />
        <AiFillDelete className="icon" onClick={deleteToDo} />
      </div>
    </div>
  );
};

export default TodoMain;
