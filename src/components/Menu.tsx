import styled from "styled-components";
import logo from "../assets/logo.svg";
import blackO from "../assets/icon-o-black.svg";
import blackX from "../assets/icon-x-black.svg";
import grayX from "../assets/icon-x-grey.svg";
import grayO from "../assets/icon-o-grey.svg";
import { useState } from "react";

const Menu = () => {
  const [choice, setChoice] = useState(false);

  return (
    <Div>
      <img src={logo} alt="logo X and O" />
      <div className="chooseDiv">
        <h2>PICK PLAYER 1'S MARK</h2>
        <div className="buttonBg">
          <Button color={choice} onClick={() => setChoice(true)}>
            <img src={choice ? blackX : grayX} alt="black X icon" />
          </Button>
          <Button color={!choice} onClick={() => setChoice(false)}>
            <img src={choice ? grayO : blackO} alt="black O icon" />
          </Button>
        </div>
        <h3>remember: x is default</h3>
      </div>
      <button>NEW GAME</button>
    </Div>
  );
};

export default Menu;

const Div = styled.div`
  text-align: center;
  .chooseDiv {
    background-color: #1f3641;
    box-shadow: 0px -8px 0px 0px #10212a inset;
    border-radius: 1.5rem;
    padding: 2.4rem 2.4rem 3rem 2.4rem;
    margin: 3.2rem 0;
  }
  div button {
    border: 0;
    border-radius: 1rem;
    padding: 1.1rem 5rem 1.13rem 5rem;
  }
  .buttonBg {
    background-color: #1a2a33;
    border-radius: 1rem;
    display: flex;
    padding: 0.9rem 0.8rem;
    margin: 2.4rem 0 1.7rem 0;
  }
  img {
    max-width: 7.197rem;
    width: 100%;
    height: auto;
  }
  button img {
    max-width: 3.2rem;
    min-width: 2.1rem;
    width: 100%;
    height: auto;
  }
  h2 {
    color: #a8bfc9;
    font-size: 1.6rem;
    letter-spacing: 0.1rem;
  }
  h3 {
    color: #a8bfc9;
    font-size: 1.4rem;
    opacity: 0.5;
    letter-spacing: 0.0875rem;
    text-transform: uppercase;
  }
  div + button {
    width: 100%;
    background-color: #f2b137;
    border: 0;
    border-radius: 1.5rem;
    box-shadow: 0px -8px 0px 0px #cc8b13 inset;
    padding: 1.4rem 7.6rem 2.2rem 7.8rem;
    color: #1a2a33;
    font-size: 1.6rem;
    letter-spacing: 0.1rem;
  }

  @media (min-width: 768px) {
    div + button {
      font-size: 2rem;
      letter-spacing: 0.125rem;
      padding: 1.7rem 12.25rem 2.5rem 12.15rem;
    }
    .chooseDiv {
      margin: 4rem 0;
    }
    div button {
      padding: 1.1rem 8.33rem 1.13rem 8.3rem;
      cursor: pointer;
    }
    div + button:hover {
      background-color: #ffc860;
      cursor: pointer;
    }
  }
`;

const Button = styled.button<{ color: boolean }>`
  background-color: ${(props) => (props.color ? "#a8bfc9" : "transparent")};
  transition: background-color 0.5s ease-in-out;
`;
