import styled from "styled-components";
import * as theme from "../../style/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 720px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const Logo = styled.img`
  width: 120px;
  height: 80px;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;

  @media (min-width: 720px) {
    display: flex;
  }
`;

export const Item = styled.li`
  font-size: ${theme.fonts.size14};
  color: white;
  text-align: center;

  margin: ${theme.gaps.gap8} 0;

  &:hover {
    color: orange;
  }

  @media (min-width: 720px) {
    margin: 0;
    margin-left: ${theme.gaps.gap16};
  }
`;
