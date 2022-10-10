import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouters from "./routes/AppRouters";

const BasePattern = () => {
  return (
    <BrowserRouter>
      <AppRouters />
    </BrowserRouter>
  );
};

export default BasePattern;
