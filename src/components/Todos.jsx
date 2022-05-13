import { useState, useEffect } from "react";
import Footer from "./Footer";
import Form from "./Form";
import List from "./List";

function Todos() {
  const localStrgData = JSON.parse(localStorage.getItem("todoapp"));
  const defaultData = localStrgData ? localStrgData : [];

  const [todo, setTodo] = useState(defaultData);
  const [filterCategory, setFilterCategory] = useState(0);
  const [filterTodo, setFilterTodo] = useState(todo);

  // Verileri Local Storage Ekleme
  useEffect(() => {
    localStorage.setItem("todoapp", JSON.stringify(todo));
  }, [todo]);

  // Tarih Bilgisi Ekleme
  let date = new Date();
  let nowDate = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;

  return (
    <>
      <section className="todoapp">
        <header className="header">
          <h1>Todo App</h1>
          <h2>{nowDate}</h2>
          <Form todo={todo} setTodo={setTodo} />
        </header>
        <List todo={todo} setTodo={setTodo} filterTodo={filterTodo} />
        <Footer
          todo={todo}
          setTodo={setTodo}
          filterCategory={filterCategory}
          setFilterCategory={setFilterCategory}
          filterTodo={filterTodo}
          setFilterTodo={setFilterTodo}
        />
      </section>
    </>
  );
}

export default Todos;
