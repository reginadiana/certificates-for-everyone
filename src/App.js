import React, { useState } from 'react';
import './style/App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import 'tachyons';
import { UserContext } from './contexts/user-autenticate';

const App = () => {
  /* Dados do usuário */
  const [user, setUser] = useState({
    id: '',
    name: '',
    email: '',
    password: '',
    token: false,
  });

  const value = { user, setUser };

  return (
    <UserContext.Provider value={value}>
      <UserContext.Consumer>
        {() => (
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        )}
      </UserContext.Consumer>
    </UserContext.Provider>
  );
};

export default App;
