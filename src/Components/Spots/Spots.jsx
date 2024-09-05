import React from "react";
import { Route, Routes } from "react-router-dom";

const Spots = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Vheroes />} />
      </Routes>
    </div>
  );
};

export default Spots;
