import React, { useState } from "react";

import TodoCard from "./components/TodoCard";
import AddTodoCard from "./components/AddTodoCard";
import { getRandomColor } from "./utils/random-color";
import { ITodo } from "./models";

import styles from "./App.module.css";

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const message = "Список задач пуст";
  const title = "Что по плану на сегодня";

  function changeTodoCardHandler(todoId: number) {
    const result = [...todos].map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, isChecked: !todo.isChecked };
      }
      return todo;
    });
    setTodos(result);
  }
  function removeTodoCardHandler(removeId: number) {
    setTodos(todos.filter((todo) => todo.id !== removeId));
  }
  function addNewTodoCardHandler(newValue: string) {
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        description: newValue,
        isChecked: false,
        color: getRandomColor(),
      },
    ]);
  }
  return (
    <div className={styles.page}>
      <div className={styles.pageMain}>
        <div className={styles.pageMainTitle}>
          <h1>{title}</h1>
        </div>
        <div className={styles.pageMainAddTodo}>
          <AddTodoCard addNewTodoCard={addNewTodoCardHandler} />
        </div>
        <ul className={styles.pageMainCardsList}>
          {todos.map((todo) => (
            <li className={styles.pageMainCardsListItem} key={todo.id}>
              <TodoCard
                todo={todo}
                isChange={() => changeTodoCardHandler(todo.id)}
                removeTodoCard={removeTodoCardHandler}
              />
            </li>
          ))}
        </ul>
        {!todos.length && (
          <div className={styles.pageMainMessage}>
            <h2>{message}</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
