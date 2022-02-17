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
}) => {
  return todoItem.map((item, i) => {
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
  });
};

export default TodoItem;
