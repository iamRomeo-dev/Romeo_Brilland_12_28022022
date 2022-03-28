/** @jsxImportSource @emotion/react */
import "twin.macro";

import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import { Home, Home1 } from "./Home";

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a" element={<Home1 />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
