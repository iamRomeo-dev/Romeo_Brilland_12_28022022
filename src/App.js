/** @jsxImportSource @emotion/react */
import "twin.macro";

import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import { Layout } from "./Layout";
import { Home } from "./Home";

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </div>
  );
};
