import styled from "styled-components";
import { COLORS, BREAKPOINTS } from "../../Themes/Themes";

export const Wrapper = styled.section`
  padding: 4rem 0;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  ${BREAKPOINTS.MOBILE} {
    height: 90vh;
  }
`;

export const TextBackground = styled.h1`
  font-size: 20rem;
  margin: 0;
  color: #f2f2f2;
`;

export const Teams = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  width: 100%;

  ${BREAKPOINTS.MOBILE} {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const Center = styled.div`
  display: grid;
  align-items: center;
  text-align: center;
  gap: 1.4rem;

  h1 {
    font-size: 5rem;
    margin: 0;
  }
`;

export const Banner = styled.div`
  background-color: ${COLORS.primary};
  padding: 0.6rem 1rem;

  p {
    text-transform: uppercase;
    color: white;
    margin: 0;
    font-weight: 700;
  }
`;

export const Logo = styled.div`
  img {
    display: flex;
    width: 100%;
    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: scale(1.1);
    }
  }
`;
