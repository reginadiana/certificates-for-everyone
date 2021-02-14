import styled from "styled-components";
import * as theme from "../../style/theme";

export const Container = styled.div`
  display: block;
  background-color: white;
  box-shadow: 0px 0px 4px gray;
`;

export const Logo = styled.img`
  width: 110px;
  height: 70px;
  margin-left: 10%;
`;

export const List = styled.ul`
  display: inline-flex;
  margin-left: 45%;
`;

export const Item = styled.li`
  font-size: 1rem;
  color: gray;
  padding: 2px 10px;

  &:hover {
    color: orange;
  }
`;
