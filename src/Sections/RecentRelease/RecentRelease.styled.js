import styled from "styled-components";
import { COLORS, BREAKPOINTS } from "../../Themes/Themes";

export const Wrapper = styled.section`
  background-color: ${COLORS.dark10};
  padding: 8rem 0;

  p {
    color: lightgray;
    font-size: 0.9rem;
    margin: 0 0 1.2rem;
    text-align: center;
    text-transform: uppercase;
  }
`;

export const ListItem = styled.ul`
  padding: 0;
  margin: 4rem 0 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  ${BREAKPOINTS.MOBILE} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Item = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  border-radius: 0.6rem;
  overflow: hidden;
  cursor: pointer;

  &:hover img {
    transform: scale(1.1);
  }
`;

export const Thumbnail = styled.div`
  height: 42vh;
  overflow: hidden;

  img {
    display: flex;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform ease-in-out 0.2s;
  }

  ${BREAKPOINTS.TABLET} {
    height: 20vh;
  }
`;

export const Title = styled.div`
  padding: 2rem;
  background-color: ${COLORS.secondary};
  color: white;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  h1 {
    font-family: "Oxanium", sans-serif;
    text-transform: uppercase;
    font-size: 1.4rem;
  }

  h4 {
    font-family: "Poppins", sans-serif;
    font-size: 0.8rem;
    font-weight: 500;
  }

  h1,
  h4 {
    margin: 0;
  }

  span {
    color: ${COLORS.primary};
  }
`;
