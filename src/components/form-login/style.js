import styled from "styled-components";
import { Input, Button } from "antd";
import * as theme from "../../style/theme";

export const Container = styled.div`
  text-align: center;
  padding: 20px;

  h1 {
    color: ${theme.colors.pink};
    font-size: 1.2rem;
  }
`

export const LoginInput = styled(Input)`
  width: 300px;

`

export const LoginButton = styled(Button)`
  &, &:hover, &:focus {
    background-color: ${theme.colors.pink};
    border-color: ${theme.colors.pink};
    color: ${theme.colors.white};
    width: 300px;
  }
`

export const Error = styled.div`
  color: ${theme.colors.red}
`

/* .button-form-login {
  background-color: pink;
  border-color: pink;
  margin-right: 15%;
}

.article {
  width: 40%;
  margin-right: auto;
  margin-left: auto;
}

.title-login {
  color: #c6255a;
  text-align: center;
}

.login-form {
  margin-bottom: -20%;
}

@media screen and (max-width: 900px) {
  .article {
    width: 70%;
  }

  .loginBtn.loginBtn-google {
    margin-left: 10%;
  }
}

@media screen and (max-width: 700px) {
  .article {
    width: 70%;
  }
}

@media screen and (min-width: 700px) {
  .login-form {
    margin-bottom: -30%;
  }
} */
