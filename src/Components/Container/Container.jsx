import styled from "styled-components";

export const ContainerWrapper = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: auto;
  overflow: hidden;
  padding: 0 2rem;
`;

const Container = ({ children }) => {
  return <ContainerWrapper>{children}</ContainerWrapper>;
};

export default Container;
