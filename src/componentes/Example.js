import React from "react";
import Alert from "react-bootstrap/Alert";

const Example = () => {
  return (
    <div>
      <Alert dismissible variant="danger">
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>Change this and that and try again.</p>
      </Alert>
    </div>
  );
};

export default Example;
