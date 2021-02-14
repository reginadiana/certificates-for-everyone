import styled from "styled-components";
import * as theme from "../../style/theme";

export const Container = styled.div`
  background-color: rgb(242, 242, 242);
  padding: 3%;
`;

export const Title = styled.h1`
  text-align: center;
  font-family: "Raleway", sans-serif;
  font-weight: 400;
`;

export const Span = styled.span`
  border-color: #c6255a;
  border-top-style: solid;
  border-top-width: 7px;
  color: black;
  padding-top: 10px;
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 30px;
  margin-bottom: 3%;

  text-align: center;
  justify-content: center;

  .card {
    margin: 3%;

    &:hover {
      box-shadow: 4px 4px 8px gray;
      transition: 0.5s;
    }
  }
`;
