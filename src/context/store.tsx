import { createContext, useReducer } from "react";
import { IAppContextState } from "./types/context.type";
const initialState: IAppContextState = {
  user: {
    username: "",
  },
};
//flux
const combineReducer = (state, action) => ({
    user:UserReducer();
});
export const AppContext = createContext({});
interface IAppContextProviderProps extends React.PropsWithChildren {}
export const AppContextProvider: React.FC<IAppContextProviderProps> = ({
  children,
}): JSX.Element => {
  const [state, dispatch] = useReducer(combineReducer, initialState);
  return <AppContext.Provider value={{}}></AppContext.Provider>;
};
