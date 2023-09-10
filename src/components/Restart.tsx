import styled from "styled-components";
import { Div } from "./Winner";
import X from "../assets/icon-x.svg";
import { Types } from "./Winner";

interface AddTypes extends Types {
  setCheck: (check: boolean) => void;
}

const Restart = ({
  setCheck,
  setWinner,
  setButton,
  item,
  setX_or_O,
  initialButtons,
}: AddTypes) => {
  const handleRestart = () => {
    setWinner(null);
    setButton(initialButtons);
    item === X ? setX_or_O(false) : setX_or_O(true);
    setCheck(false);
  };

  return (
    <Div>
      <div className="background">
        <div>
          <H2>RESTART GAME?</H2>
        </div>
        <button onClick={() => setCheck(false)}>NO, CANCEL</button>
        <button onClick={handleRestart}>YES, RESTART</button>
      </div>
    </Div>
  );
};

export default Restart;

const H2 = styled.h2`
  color: #a8bfc9;
  font-size: 2.4rem;
  letter-spacing: 0.15rem;
`;
