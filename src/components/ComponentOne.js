import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import BasicLayout from "../layouts/BasicLayout";
import CustomRange from "./CustomRange";

const ComponentOne = () => {
  const navigate = useNavigate();

  return (
    <BasicLayout>
      <div className="container" data-testid="componentone">
        <div className="row mt-2">
          <div className="col-12">
            <Button onClick={() => navigate("/")}> &lt; Back </Button>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12 minim__alcada">
            <CustomRange editable={true} />
          </div>
        </div>
      </div>
    </BasicLayout>
  );
};

export default ComponentOne;
