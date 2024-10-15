import styled from "styled-components";
import { COLORS, BREAKPOINTS } from "../../Themes/Themes";
import Background from "../../Assets/heroBackground.png";

const H1 = {
  DEFAULT: "4.6rem",
  TABLET: "3.4rem",
  MOBILE: "2.5rem",
};

const H2 = {
  TABLET: "2rem",
  MOBILE: "1.4rem",
};

const P = {
  DEFAULT: "1.1rem",
  TABLET: "1.4rem",
  MOBILE: "1rem",
};

export const Wrapper = styled.nav`
  position: relative;
  height: 100vh;
  background: url(${Background}) no-repeat center center / cover;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  padding-top: 4rem;
  overflow: hidden;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: -1;
  }

  ${BREAKPOINTS.TABLET} {
    padding-top: 10rem;
  }

  ${BREAKPOINTS.MOBILE} {
    padding-top: 6rem;
  }
`;

export const HeroContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;

  ${BREAKPOINTS.TABLET} {
    grid-template-columns: repeat(1, 1fr);
    gap: 2rem;
  }

  ${BREAKPOINTS.MOBILE} {
    grid-template-columns: repeat(1, 1fr);
    gap: 2rem;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  h2,
  h1,
  p {
    margin: 0;
  }

  h2 {
    text-transform: uppercase;
    color: ${COLORS.primary};

    ${BREAKPOINTS.TABLET} {
      font-size: ${H2.TABLET};
    }

    ${BREAKPOINTS.MOBILE} {
      font-size: ${H2.MOBILE};
    }
  }

  h1 {
    font-family: "Oxanium", sans-serif;
    font-size: ${H1.DEFAULT};
    line-height: 4.5rem;
    font-weight: 800;

    span {
      color: ${COLORS.primary};
    }

    ${BREAKPOINTS.TABLET} {
      font-size: ${H1.TABLET};
      line-height: 3.2rem;
    }

    ${BREAKPOINTS.MOBILE} {
      font-size: ${H1.MOBILE};
      line-height: 2.6rem;
    }
  }

  p {
    font-size: ${P.DEFAULT};
    line-height: 1.6rem;
    color: lightgray;

    ${BREAKPOINTS.TABLET} {
      font-size: ${P.TABLET};
      line-height: 1.8rem;
    }

    ${BREAKPOINTS.MOBILE} {
      font-size: ${P.MOBILE};
      line-height: 1.5rem;
    }
  }
`;

export const HeroImg = styled.div`
  img {
    display: flex;
    width: 100%;
  }
`;

export const Button = styled.button`
  border: none;
  background-color: ${COLORS.primary};
  color: ${COLORS.white};
  align-self: start;
  padding: 0.8rem 2rem;
  text-transform: uppercase;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 1rem;
  margin-top: 2rem;
  cursor: pointer;
  border-radius: 0.4rem;

  ${BREAKPOINTS.TABLET} {
    font-size: 0.8rem;
    margin-top: 1rem;
  }

  ${BREAKPOINTS.MOBILE} {
    font-size: 0.8rem;
    margin-top: 1rem;
  }
`;
