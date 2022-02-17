import React, { useState } from "react";

import { Container } from "react-bootstrap";

import Toaster from "./component/Toaster/Toaster";
import TodoInput from "./component/TodoInput/TodoInput";
import TodoItem from "./component/TodoItem/TodoItem";

const App = () => {
  const [todoName, setTodoName] = useState("");
  const [todoItem, setTodoItem] = useState([]);
  const [openNotificationSave, setOpenNotificationSave] = useState(false);
  const [openNotificationDelete, setOpenNotificationDelete] = useState(false);
  const [openNotificationEdit, setOpenNotificationEdit] = useState(false);
  const [selectedTodoItem, setSelectedTodoItem] = useState({});

  const handleChangeTodoName = (e) => {
    setTodoName(e.target.value);
  };

  const handleSubmitTodo = () => {
    if (todoName.length === 0) return;
    setOpenNotificationSave(true);
    const data = { todoName, status: false };
    setTodoItem((prevArray) => [...prevArray, data]);
    setTodoName("");
  };

  const handleRemoveTodo = (idx) => {
    setOpenNotificationDelete(true);
    setTodoItem(todoItem.filter((item, index) => index !== idx));
  };

  const handleEditTodo = (item, index) => {
    const todoItemData = { item, index };
    setSelectedTodoItem(todoItemData);
  };

  const handleEditSelectedTodo = (e) => {
    const item = e.target.value;
    setSelectedTodoItem({ ...selectedTodoItem, item });
  };

  const handleSubmitEditTodo = () => {
    setOpenNotificationEdit(true);
    let newArr = [...todoItem];
    newArr[selectedTodoItem.index].todoName = selectedTodoItem.item;
    setTodoItem(newArr);
    setSelectedTodoItem({});
  };

  const handleChangeStatus = (idx) => {
    let newArr = [...todoItem];
    newArr[idx].status = !newArr[idx].status;
    setTodoItem(newArr);
  };

  return (
    <Container>
      <h1 className="mt-5 text-center">Todo List Web App</h1>
      <div className="fixed-top mt-3 ms-3">
        <Toaster
          onClose={setOpenNotificationSave}
          isShow={openNotificationSave}
          background="success"
          text="Data berhasil disimpan"
        />
        <Toaster
          onClose={setOpenNotificationDelete}
          isShow={openNotificationDelete}
          background="success"
          text="Data berhasil dihapus"
        />
        <Toaster
          onClose={setOpenNotificationEdit}
          isShow={openNotificationEdit}
          background="success"
          text="Data berhasil diedit"
        />
      </div>
      <TodoInput
        handleChangeTodoName={handleChangeTodoName}
        todoName={todoName}
        handleSubmitTodo={handleSubmitTodo}
      />
      <div className="mt-5">
        <TodoItem
          todoItem={todoItem}
          selectedTodoItem={selectedTodoItem}
          handleEditSelectedTodo={handleEditSelectedTodo}
          handleSubmitEditTodo={handleSubmitEditTodo}
          handleEditTodo={handleEditTodo}
          handleRemoveTodo={handleRemoveTodo}
          handleChangeStatus={handleChangeStatus}
        />
      </div>
    </Container>
  );
};

export default App;
