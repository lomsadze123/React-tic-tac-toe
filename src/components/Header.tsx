import X_and_O from "../assets/logo.svg";
import XGrey from "../assets/icon-x-grey.svg";
import OGrey from "../assets/icon-o-grey.svg";
import restart from "../assets/icon-restart.svg";
import styled from "styled-components";
import Restart from "./Restart";
import { useState } from "react";
import { Types } from "./Winner";

interface AddTypes extends Types {
  X_or_O: boolean;
}

const Header = ({
  X_or_O,
  item,
  setWinner,
  setButton,
  initialButtons,
  setX_or_O,
}: AddTypes) => {
  const [check, setCheck] = useState(false);

  return (
    <Div>
      <img className="X_and_O" src={X_and_O} alt="X and O icons" />
      <div className="div">
        <img className="turn" src={X_or_O ? XGrey : OGrey} alt="icons" />
        <h2>TURN</h2>
      </div>
      <img
        onClick={() => setCheck(true)}
        className="restart"
        src={restart}
        alt="restart icon"
      />
      {check && (
        <Restart
          setCheck={setCheck}
          item={item ? item : ""}
          setWinner={setWinner}
          setButton={setButton}
          initialButtons={initialButtons}
          setX_or_O={setX_or_O}
          round=""
        />
      )}
    </Div>
  );
};

export default Header;

const Div = styled.div`
  margin-bottom: 6.4rem;
  &,
  .div {
    display: flex;
    align-items: center;
  }
  justify-content: space-between;
  .div {
    gap: 0.9rem;
    background-color: #1f3641;
    box-shadow: 0px -4px 0px 0px #10212a inset;
    border-radius: 0.5rem;
    padding: 1rem 1.5rem 1.4rem 1.5rem;
  }
  .X_and_O {
    max-width: 7.197rem;
    width: 100%;
    height: auto;
  }
  .turn {
    max-width: 1.6rem;
    width: 100%;
    height: auto;
  }
  .restart {
    padding: 1.231rem;
    background-color: #a8bfc9;
    box-shadow: inset 0px -4px 0px #6b8997;
    border-radius: 0.5rem;
    max-width: 4.459rem;
    width: 100%;
  }
  .div h2 {
    font-size: 1.4rem;
    color: #a8bfc9;
    letter-spacing: 0.0875rem;
  }
`;
