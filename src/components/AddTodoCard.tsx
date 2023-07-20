import React, { useState } from "react";

import styles from "../styles/addTodoCard.module.css";

interface AddTodoCardProps {
  addNewTodoCard: (newValue: string) => void;
}

export default function AddTodoCard({ addNewTodoCard }: AddTodoCardProps) {
  const [value, setValue] = useState("");

  const inputValueHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addNewTodoCard(value);
    setValue("");
  };

  const isInputValueEmpty = () => {
    return !value.length;
  };
  return (
    <form className={styles.addTodo} onSubmit={submitHandler}>
      <input
        className={styles.addTodoInput}
        placeholder="Добавить новую задачу"
        type="text"
        value={value}
        onChange={inputValueHandler}
      />
      <button className={styles.addTodoButton} disabled={isInputValueEmpty()}>
        Добавить
      </button>
    </form>
  );
}
