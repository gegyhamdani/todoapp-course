import React from "react";
import { Toast } from "react-bootstrap";

const Toaster = ({ onClose, isShow, background, text }) => {
  return (
    <Toast
      onClose={() => onClose(false)}
      show={isShow}
      delay={1500}
      autohide
      bg={background}
    >
      <Toast.Body className="text-white">{text}</Toast.Body>
    </Toast>
  );
};

export default Toaster;
