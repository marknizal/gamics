import BackgroundImg from "../../Assets/bg.png";
import styled from "styled-components";
import { BREAKPOINTS } from "../../Themes/Themes";

export const Wrapper = styled.section`
  padding: 6rem 0;
  background: url(${BackgroundImg}) no-repeat center top / contain;

  iframe {
    display: flex;
    width: 70%;
    height: 70vh;
    margin: 4rem auto 0;
    border-radius: 0.8rem;
    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: translateY(-10px);
    }
  }

  ${BREAKPOINTS.TABLET} {
    background: url(${BackgroundImg}) no-repeat center top / cover;

    iframe {
      width: 100%;
      height: 40vh;
    }
  }

  ${BREAKPOINTS.MOBILE} {
    background: url(${BackgroundImg}) no-repeat center top / cover;

    iframe {
      width: 100%;
      height: 40vh;
    }
  }
`;
