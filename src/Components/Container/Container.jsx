import styled from "styled-components";

export const ContainerWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: auto;
  overflow: hidden;
`;

const Container = ({ children }) => {
  return <ContainerWrapper>{children}</ContainerWrapper>;
};

export default Container;
