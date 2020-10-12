import React from "react";

export const UserContext = React.createContext({ 
  email: "default",
  setEmail: email => { }
})