import React from "react";
import { Row, Col, Form, Button, Card } from "react-bootstrap";
import "../../App.css";

const TodoItem = ({
  todoItem,
  selectedTodoItem,
  handleEditSelectedTodo,
  handleSubmitEditTodo,
  handleEditTodo,
  handleRemoveTodo,
  handleChangeStatus,
}) => {
  return todoItem.map((value, i) => {
    return (
      <Card
        className="mt-3"
        key={i.toString()}
        border={value.status && "primary"}
      >
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
                <p className="m-0">{value.todoName}</p>
              )}
            </Col>
            <Col xl="2" className="d-flex align-items-center">
              <Button
                className="w-100"
                onClick={() => handleChangeStatus(i)}
                variant={value.status ? "secondary" : "primary"}
              >
                {value.status ? "Undone" : "Done"}
              </Button>
            </Col>
          </Row>
          <div className="mt-4">
            {i === selectedTodoItem.index ? (
              <Button
                onClick={handleSubmitEditTodo}
                disabled={selectedTodoItem.item.length === 0}
              >
                Submit
              </Button>
            ) : (
              <>
                <Button
                  variant="warning"
                  className="button-custom me-2"
                  onClick={() => handleEditTodo(value.todoName, i)}
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
          </div>
        </Card.Body>
      </Card>
    );
  });
};

export default TodoItem;
