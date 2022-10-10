import React from "react";
import mangologo from "../assets/mango.png";
import BasicLayout from "../layouts/BasicLayout";

const Landing = () => {
  return (
    <BasicLayout>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <img src={mangologo} />
          </div>
        </div>
      </div>
    </BasicLayout>
  );
};

export default Landing;
