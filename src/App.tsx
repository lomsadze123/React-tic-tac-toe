import styled from "styled-components";
import Buttons from "./components/Buttons";
import Menu from "./components/Menu";
import { useState } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

function App() {
  const [choice, setChoice] = useState(true);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route
          path="/"
          element={<Menu setChoice={setChoice} choice={choice} />}
        />
        <Route path="game" element={<Buttons choice={choice} />} />
      </Route>
    )
  );

  return (
    <Body>
      <RouterProvider router={router} />
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
