import React from "react";
import { Link } from "react-router-dom";
import { Result, Button } from "antd";

const NotFound = () => {
  return (
    <Result
      status='404'
      title='404'
      subTitle='Sorry, the page you visited does not exist.'
      extra={
        <Button>
          {" "}
          <Link to='/'>Back Home</Link>{" "}
        </Button>
      }
    />
  );
};

export default NotFound;
