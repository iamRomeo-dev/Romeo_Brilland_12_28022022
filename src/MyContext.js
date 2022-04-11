import { createContext, useContext, useState } from "react";

const UserContext = createContext(null);

export const UserProviderByMe = ({ children }) => {
  const [dataUser, setDataUser] = useState({});
  const [showResults, setShowResults] = useState(false);
  console.log("dataUser", dataUser);
  return (
    <UserContext.Provider
      value={{ dataUser, setDataUser, showResults, setShowResults }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};

export const useUser = () => {
  return useUserContext().dataUser;
};

export const useSetUser = () => {
  return useUserContext().setDataUser;
};

export const useShowResult = () => {
  return useUserContext().showResults;
};

export const useSetShowResults = () => {
  return useUserContext().setShowResults;
};
