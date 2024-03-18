import styled from "styled-components";

const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Loader = () => (
  <LoaderContainer>
    <img src="images\logo (1).png" alt="Logo" />
    <div>Loading...</div>
  </LoaderContainer>
);

export default Loader;
