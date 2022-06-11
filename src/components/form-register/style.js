import styled from 'styled-components';
import { Field, Form } from 'formik';

export const Container = styled.div`
  //width: 70%;
  height: 100vh;
  //display: block;
  /* padding: 1em;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: -10%;
  margin-top: 5%; */
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .loginBtn.loginBtn-google {
    position: sticky;
    left: 0;
  }

  @media (min-width: 720px) {
    width: 300px;
  }
`;

export const FormRegister = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const FormField = styled(Field)`
  //display: block;
  /* margin-left: auto;
  margin-right: auto; */
  //font-size: 15px;
  /* width: 60%;
  margin-bottom: 2%;
  padding: 1%; */
  border-color: transparent;
  border-bottom-color: #d3d3d3;
  border-width: 0.5px;
`;

export const Title = styled.div`
  color: orange;
  //text-align: center;
`;

export const Span = styled.span`
  display: flex;
  justify-content: center;
  //margin-top: 3%;
`;

export const Button = styled.div`
  background-color: orange;
  border-color: transparent;
  //margin-left: 20%;
  color: #ffffff;
  //width: 60%;

  &:hover {
    border-color: rgb(255, 102, 0);
    color: rgb(255, 102, 0);
    background-color: white;
    transition: 1s;
  }
`;

export const MessageError = styled.p`
  color: red;
  display: flex;
  justify-content: center;
`;

// @media screen and (max-width: 600px) {
//   .form {
//     width: 90%;
//     height: 60vh;
//   }

//   .form-upload {
//     margin-left: 15px;
//   }

//   .button {
//     width: 100%;
//     margin-left: auto;
//     margin-right: auto;
//   }

//   .form-field {
//     width: 100%;
//     margin-bottom: 5%;
//   }
// }

// @media screen and (min-width: 600px) and (max-width: 1000px) {
//   .form {
//     width: 65%;
//     height: 60vh;
//   }

//   .form-upload {
//     margin-left: 22%;
//   }

//   .button {
//     width: 100%;
//     margin-left: auto;
//     margin-right: auto;
//   }

//   .form-field {
//     width: 100%;
//     margin-bottom: 5%;
//   }
// }
