import React from "react";
import { Row, Stack, Form, Button, Card } from "react-bootstrap";

const TodoInput = ({ handleChangeTodoName, todoName, handleSubmitTodo }) => {
  return (
    <Card className="mt-5">
      <Card.Body>
        <Row>
          <Stack direction="horizontal" gap={3}>
            <Form.Control
              placeholder="Masukan item.."
              onChange={handleChangeTodoName}
              value={todoName}
            />
            <Button onClick={handleSubmitTodo} disabled={todoName.length === 0}>
              Submit
            </Button>
          </Stack>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default TodoInput;
