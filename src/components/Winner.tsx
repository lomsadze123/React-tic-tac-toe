import styled, { keyframes } from "styled-components";
import X from "../assets/icon-x.svg";
import O from "../assets/icon-o.svg";
import { Link } from "react-router-dom";

export interface Types {
  item: string | null;
  setWinner: (item: string | null) => void;
  setButton: (buttons: string[]) => void;
  initialButtons: string[];
  setWinningLine?: (line: number[]) => void;
  setX_or_O: (x: boolean) => void;
  round: string;
  setIsTied?: (tied: boolean) => void;
}

const Winner = ({
  item,
  setWinner,
  setButton,
  initialButtons,
  setWinningLine,
  setX_or_O,
  setIsTied,
  round,
}: Types) => {
  const handleNext = () => {
    setWinner(null);
    setButton(initialButtons);
    setWinningLine && setWinningLine([]);
    item === X ? setX_or_O(true) : setX_or_O(false);
    setIsTied && setIsTied(false);
  };

  return (
    <Div>
      <div className="background">
        <div>
          {(item === X || item === O) && (
            <img src={item === X ? X : O} alt="icons" />
          )}
          <H2 color={item === O}>{round}</H2>
        </div>
        <Link to="/">
          <button>QUIT</button>
        </Link>
        <button onClick={handleNext}>NEXT ROUND</button>
      </div>
    </Div>
  );
};

export default Winner;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Div = styled.div`
  opacity: 0;
  animation: ${fadeIn} 0.5s linear 0.5s forwards;

  background-color: rgba(0, 0, 0, 0.5);
  &,
  .background div {
    display: flex;
    align-items: center;
  }
  .background div {
    justify-content: center;
    gap: 0.8rem;
    margin-bottom: 2.4rem;
  }
  img {
    max-width: 2.9rem;
    width: 100%;
    height: auto;
  }

  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  top: 0;

  .background {
    padding: 4rem 0 4.8rem;
    text-align: center;
    background-color: #1f3641;
    width: 100%;
  }

  button,
  a button {
    border-radius: 1rem;
    box-shadow: 0px -4px 0px 0px #6b8997 inset;
    color: #1a2a33;
    font-size: 1.6rem;
    letter-spacing: 0.1rem;
    border: 0;
    padding: 1.5rem 1.6rem 1.7rem 1.7rem;
    background-color: #a8bfc9;
  }
  a + button,
  button + button {
    background-color: #f2b137;
    box-shadow: 0px -4px 0px 0px #cc8b13 inset;
    margin-left: 1.6rem;
  }

  @media (min-width: 768px) {
    img {
      max-width: 6.4rem;
    }
    .background div {
      gap: 2.4rem;
    }
    .background {
      padding: 4.5rem 0 4.5rem;
    }
    button,
    a button {
      cursor: pointer;
    }
    button:hover {
      background-color: #dbe8ed;
      box-shadow: 0px -4px 0px 0px #6b8997 inset;
    }
    a + button:hover,
    button + button:hover {
      background-color: #ffc860;
      box-shadow: 0px -4px 0px 0px #cc8b13 inset;
    }
  }
`;

const H2 = styled.h2<{ color: boolean }>`
  font-size: 2.4rem;
  letter-spacing: 0.15rem;
  color: ${(props) => (props.color ? "#F2B137" : "#31C3BD")};

  @media (min-width: 768px) {
    font-size: 4rem;
    letter-spacing: 0.25rem;
  }
`;
