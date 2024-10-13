import styled from "styled-components";
import { COLORS, BREAKPOINTS } from "../../Themes/Themes";

export const Wrapper = styled.nav`
  background-image: linear-gradient(
    120deg,
    ${COLORS.primary},
    ${COLORS.secondary} 240px
  );
  color: ${COLORS.white};
  padding: 1.4rem;

  * {
    font-family: "Oxanium", sans-serif;
  }

  ${BREAKPOINTS.MOBILE} {
    background-image: linear-gradient(
      120deg,
      ${COLORS.primary},
      ${COLORS.secondary} 60px
    );
  }
`;

export const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.h1`
  margin: 0;
  font-size: 2.2rem;
  cursor: pointer;
`;

export const NavLinks = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;

  li {
    list-style-type: none;
    font-weight: 600;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 0.6rem 1.1rem;

    &:hover {
      background-color: ${COLORS.primary};
    }
  }

  ${BREAKPOINTS.MOBILE} {
    display: ${(props) => (props.isMobileMenuOpen ? "block" : "none")};
    position: absolute;
    top: 80px;
    right: 0;
    background-color: ${COLORS.secondary};
    width: 100%;
    padding: 1rem;

    li {
      padding: 1rem;
      width: 100%;
      text-align: center;
    }
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  svg {
    cursor: pointer;
    font-size: 1.2rem;
    display: flex;
  }

  ${BREAKPOINTS.MOBILE} {
    flex-direction: row-reverse;
    gap: 1.2rem;

    svg {
      font-size: 1.3rem;
    }
  }
`;

export const HamburgerMenu = styled.div`
  display: none;
  cursor: pointer;

  ${BREAKPOINTS.MOBILE} {
    display: block;
  }
`;
