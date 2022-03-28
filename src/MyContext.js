import { createContext, useContext, useState } from "react";

const UserContext = createContext(null);

export const UserProviderByMe = ({ children }) => {
  const [dataUser, setDataUser] = useState({});

  return (
    <UserContext.Provider value={{ dataUser, setDataUser }}>
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
