import React from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import { Button } from "react-bootstrap";

export default function BasicLayout(props) {
  const { children, className } = props;
  const navigate = useNavigate();
  return (
    <div data-testid="basiclayout" className="container-fluid">
      <div className="row">
        <div className="col-12 m-0 p-0">
          <div className={classNames("col-12", { [className]: className })}>
            {children}
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-12 text-center">
          <Button onClick={() => navigate("/exercise1")}> Exercise One</Button>
          <Button className="ms-2" onClick={() => navigate("/exercise2")}>
            Exercise Two
          </Button>
        </div>
      </div>
    </div>
  );
}
