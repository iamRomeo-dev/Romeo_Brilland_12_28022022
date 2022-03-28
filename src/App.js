/** @jsxImportSource @emotion/react */
import "twin.macro";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "./Layout";
import { UserProviderByMe } from "./MyContext";

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <UserProviderByMe>
          <Layout />{" "}
        </UserProviderByMe>
      </BrowserRouter>
    </div>
  );
};
