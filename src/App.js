import React, { useState } from "react";
import "./style/App.css";
import Routes from "./routes";
import "tachyons";
import { UserContext } from "./contexts/user-autenticate"

function App() {
  const [email, setEmail] = useState("email aqui");
  const value = { email, setEmail };

  return(
    <UserContext.Provider value={value}>
      <UserContext.Consumer>
        {() => <Routes />}
      </UserContext.Consumer>
    </UserContext.Provider>
  );
}

export default App;
