import styles from "../styles/todos.module.css";

import { ITodo } from "../models";
import IconTrash from "./IconTrash";

interface TodoProps {
  todo: ITodo;
  isChange: (id: number) => void;
  removeTodoCard: (id: number) => void;
}
export default function TodoCard({
  todo,
  isChange,
  removeTodoCard,
}: TodoProps) {
  function changeTodoHandler() {
    isChange(todo.id);
  }
  function removeTodoHandler() {
    removeTodoCard(todo.id);
  }
  return (
    <div className={`${styles.todoCard} ${styles["todoCardBg" + todo.color]}`}>
      <input
        type="checkbox"
        checked={todo.isChecked}
        onChange={changeTodoHandler}
      />
      <span className={todo.isChecked ? styles.todoCardInputChecked : ""}>
        {todo.description}
      </span>
      <button className={styles.todoCardButton} onClick={removeTodoHandler}>
        <IconTrash height="24px" width="24px" />
      </button>
    </div>
  );
}
