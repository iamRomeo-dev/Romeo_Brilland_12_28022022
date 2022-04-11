/** @jsxImportSource @emotion/react */
import "twin.macro";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "./Layout";
import { UserProviderByMe } from "./MyContext";
import tw, { GlobalStyles } from "twin.macro";
import { Global } from "@emotion/react";

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <GlobalStyles />
        <Global styles={{ body: tw`antialiased font-sans` }} />
        <UserProviderByMe>
          <Layout />
        </UserProviderByMe>
      </BrowserRouter>
    </div>
  );
};
