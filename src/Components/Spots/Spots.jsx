import React from "react";
import { Route, Routes } from "react-router-dom";
import Vheroes from "./Vheroes";
import Champion from "./Champion";

const Spots = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Vheroes />} />
        <Route path="/Champion/:uuid" element={<Champion />} />
      </Routes>
    </div>
  );
};

export default Spots;
