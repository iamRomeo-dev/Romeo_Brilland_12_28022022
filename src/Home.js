/** @jsxImportSource @emotion/react */
import "twin.macro";
import { FormCreation } from "./FormCreation";
import { Modal } from "./Modal";
import { useSetShowResults, useShowResult } from "./MyContext";

export const Home = () => {
  const showResults = useShowResult();
  const setShowResults = useSetShowResults();
  return (
    <>
      {showResults === true ? (
        <>
          <FormCreation />
          <Modal showResults={showResults} setShowResults={setShowResults} />
        </>
      ) : (
        <FormCreation />
      )}
    </>
  );
};
