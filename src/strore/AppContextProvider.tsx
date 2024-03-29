import React, { ReactNode, createContext, useReducer } from 'react';
import { Action, AppState } from '../interface/comman';

// Define the type for your state

// Define initial state
const initialState: AppState = {
  Verify:false
};

// Create context for the app state
export const AppContext = createContext<{ state: AppState; dispatch: React.Dispatch<Action> } | undefined>(undefined);

// Create reducer function
const appReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case 'CHECK_VERIFY':
      return { ...state, Verify: !state.Verify };
    default:
      return state;
  }
};



// Create the AppContextProvider component
 const AppContextProvider:  React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider
