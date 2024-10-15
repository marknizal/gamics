import styled from "styled-components";
import { COLORS, BREAKPOINTS } from "../../Themes/Themes";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  z-index: 900;
  display: ${(props) => (props.$visible ? "block" : "none")};
  backdrop-filter: blur(20px);
`;

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;

  .glow-anim {
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export const Button = styled.button`
  font-size: 6rem;
  font-weight: 800;
  cursor: pointer;
  background-color: ${COLORS.transparent};
  color: ${COLORS.primary};
  font-family: "Oxanium", sans-serif;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${COLORS.white};
  }

  ${BREAKPOINTS.MOBILE} {
    font-size: 3rem;
  }
`;
