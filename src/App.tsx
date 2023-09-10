import styled from "styled-components";
import Buttons from "./components/Buttons";
import Menu from "./components/Menu";

function App() {
  return (
    <Body>
      <Buttons />
      {/* <Menu /> */}
    </Body>
  );
}

export default App;

const Body = styled.div`
  position: relative;
  background-color: #1a2a33;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
