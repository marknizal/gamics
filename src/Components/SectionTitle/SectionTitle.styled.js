import styled from "styled-components";
import { COLORS, BREAKPOINTS } from "../../Themes/Themes";

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const MainTitle = styled.h1`
  font-family: "Oxanium", sans-serif;
  color: ${({ isDark }) => (isDark ? COLORS.white : COLORS.black)};
  display: inline;
  text-transform: uppercase;
  font-weight: 800;
  font-size: 2.4rem;
  line-height: 2.4rem;
  margin: 0;

  ${BREAKPOINTS.MOBILE} {
    font-size: 2.2rem;
    line-height: 2.2rem;
  }
`;

export const LastWord = styled.span`
  color: ${COLORS.primary};
`;

export const Underline = styled.img`
  display: block;
  width: 130px;
  margin-top: 16px;
`;
