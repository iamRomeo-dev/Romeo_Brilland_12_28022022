/** @jsxImportSource @emotion/react */
import { useState } from "react";
import "twin.macro";
import { FormCreation } from "./FormCreation";
import { Modal } from "./Modal";
import { useShowResult } from "./MyContext";

export const Home = () => {
  const showResults = useShowResult();

  return (
    <>
      {showResults === true ? (
        <>
          <FormCreation />
          <Modal />
        </>
      ) : (
        <FormCreation />
      )}
    </>
  );
};
