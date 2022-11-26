// routes
import React, { createContext, useReducer } from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import useUser from './hooks/useUser';
import { userReducer } from './Reducer/userReducer';
// import './styles/scss/global.scss'
// theme
// components
import { store } from './store';

import ScrollToTop from './components/ScrollToTop';
import MainRoutes from './Routes/MainRoutes';

export const UserContext = createContext({});

function App() {
  const [user, userdispatch] = useReducer(userReducer, {
    isLoggedIn: false,
    isUpdateCart: false,
    isUpdateOrg: false,
    data: {},
    transectionFee: 0,
    platformFee: 0
  });
  const UserProviderContext = useUser(user, userdispatch);
  return (
    <>
      {/* <UserContext.Provider value={UserProviderContext}> */}
      <Provider store={store}>
        <ToastContainer />
        <ScrollToTop />
        <MainRoutes />
      </Provider>
      {/* </UserContext.Provider> */}
    </>
  );
}

export default App;
