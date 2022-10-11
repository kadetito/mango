import React from "react";
import { Routes, Route } from "react-router-dom";
import ComponentOne from "../components/ComponentOne";
import ComponentTwo from "../components/ComponentTwo";
import Landing from "../components/Landing";

const AppRouters = () => {
  return (
    <Routes>
      <Route path="/*" element={<Landing />} />
      <Route path="exercise1" element={<ComponentOne />} />
      <Route path="exercise2" element={<ComponentTwo />} />
    </Routes>
  );
};

export default AppRouters;
