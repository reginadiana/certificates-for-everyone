import React from 'react'
import GoogleLogin from "react-google-login";

const LoginGoogle = () => {

  const responseGoogle = (response) => {
    let listEmails = [];

    user.map((itemJson) => {
      listEmails.push(itemJson.email);
    });

    if (!listEmails.includes(response.profileObj.email)) {
      addNewUser(
        response.profileObj.name,
        response.profileObj.email,
        true,
        response.profileObj.imageUrl
      );
    } else {
      message.warning("Este usuário já está cadastrado");
    }
  };
  
  return(
    <div className="button-google" style={{ marginLeft: "-22%" }}>
    <GoogleLogin
      clientId="78039332386-46h93ebkr1bb708hqv47h410pdd89mj9.apps.googleusercontent.com"
      render={(renderProps) => (
        <button
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
          className="loginBtn loginBtn-google"
          style={{ marginLeft: "0%" }}
        >
          Cadastrar com o Google{" "}
        </button>
      )}
      buttonText="Cadastrar com o Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
    />
  </div>
  )
}

export default LoginGoogle;