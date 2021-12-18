import React, { useState } from "react";
import TodoList from "../../components/TodoList";
ListPage.propTypes = {};

function ListPage(props) {
  const inittodoList = [
    {
      id: 1,
      title: "Eat",
      status: "new",
    },
    {
      id: 2,
      title: "Sleep",
      status: "complete",
    },
    {
      id: 3,
      title: "Code",
      status: "new",
    },
  ];
  const [todoList, setTodoList] = useState(inittodoList);
  const [fillterStatus, setFillterStatus] = useState("all");
  const handleClick = (todo, index) => {
    const newTodoList = [...todoList];

    newTodoList[index] = {
      ...newTodoList[index],
      status: newTodoList[index].status === "new" ? "complete" : "new",
    };
    setTodoList(newTodoList);
  };
  const handleshowAll = () => {
    setFillterStatus("all");
  };
  const handleshowComplete = () => {
    setFillterStatus("complete");
  };
  const handleshowNew = () => {
    setFillterStatus("new");
  };
  const rendedTodoList = todoList.filter(
    (todo) => fillterStatus === "all" || fillterStatus === todo.status
  );

  return (
    <div>
      <h3>Todo list</h3>
      <TodoList todoList={rendedTodoList} onTodoClick={handleClick} />
      <div>
        <button onClick={handleshowAll}>ShowAll</button>
        <button onClick={handleshowComplete}>ShowComplete</button>
        <button onClick={handleshowNew}>ShowNew</button>
      </div>
    </div>
  );
}

export default ListPage;
