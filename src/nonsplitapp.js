import React, { useState } from "react";

import {
  Container,
  Row,
  Col,
  Stack,
  Form,
  Button,
  Card,
  Toast,
} from "react-bootstrap";

import "./App.css";

const App = () => {
  const [todoName, setTodoName] = useState("");
  const [todoItem, setTodoItem] = useState([]);
  const [openNotificationSave, setOpenNotificationSave] = useState(false);
  const [openNotificationDelete, setOpenNotificationDelete] = useState(false);
  const [openNotificationUpdate, setOpenNotificationUpdate] = useState(false);
  const [selectedTodoItem, setSelectedTodoItem] = useState({});

  const handleChangeTodoName = (e) => {
    setTodoName(e.target.value);
  };

  const handleSubmitTodo = () => {
    if (todoName.length === 0) return;
    setOpenNotificationSave(true);
    setTodoItem((prevArray) => [...prevArray, todoName]);
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
    let newArr = [...todoItem];
    newArr[selectedTodoItem.index] = selectedTodoItem.item;
    setTodoItem(newArr);
    setSelectedTodoItem({});
  };

  return (
    <Container>
      <h1 className="mt-5 text-center">Todo List Web App</h1>
      <div className="fixed-top mt-3 ms-3">
        <Toast
          onClose={() => setOpenNotificationSave(false)}
          show={openNotificationSave}
          delay={1500}
          autohide
          bg="success"
        >
          <Toast.Body className="text-white">Data berhasil disimpan</Toast.Body>
        </Toast>
        <Toast
          onClose={() => setOpenNotificationDelete(false)}
          show={openNotificationDelete}
          delay={1500}
          autohide
          bg="danger"
        >
          <Toast.Body className="text-white">Data berhasil dihapus</Toast.Body>
        </Toast>
        <Toast
          onClose={() => setOpenNotificationUpdate(false)}
          show={openNotificationUpdate}
          delay={1500}
          autohide
          bg="success"
        >
          <Toast.Body className="text-white">Data berhasil diedit</Toast.Body>
        </Toast>
      </div>
      <Card className="mt-5">
        <Card.Body>
          <Row>
            <Stack direction="horizontal" gap={3}>
              <Form.Control
                placeholder="Masukan item.."
                onChange={handleChangeTodoName}
                value={todoName}
              />
              <Button
                onClick={handleSubmitTodo}
                disabled={todoName.length === 0}
              >
                Submit
              </Button>
            </Stack>
          </Row>
        </Card.Body>
      </Card>
      <div className="mt-5">
        {todoItem.map((item, i) => {
          return (
            <Card className="mt-3" key={i.toString()}>
              <Card.Body>
                <Row>
                  <Col className="d-flex align-items-center">
                    {i === selectedTodoItem.index ? (
                      <Form.Control
                        placeholder="Masukan item.."
                        onChange={handleEditSelectedTodo}
                        value={selectedTodoItem.item}
                      />
                    ) : (
                      <p className="m-0">{item}</p>
                    )}
                  </Col>
                  <Col xl="2" className="d-flex">
                    {i === selectedTodoItem.index ? (
                      <Button
                        onClick={handleSubmitEditTodo}
                        className="w-100"
                        disabled={selectedTodoItem.item.length === 0}
                      >
                        Submit
                      </Button>
                    ) : (
                      <>
                        <Button
                          variant="warning"
                          className="button-custom me-2"
                          onClick={() => handleEditTodo(item, i)}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="danger"
                          className="button-custom"
                          onClick={() => handleRemoveTodo(i)}
                        >
                          Delete
                        </Button>
                      </>
                    )}
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </Container>
  );
};

export default App;
