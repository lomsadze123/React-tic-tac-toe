import styled from "styled-components";
import X from "../assets/icon-x.svg";
import O from "../assets/icon-o.svg";

export interface Types {
  item: string;
  setWinner: (item: string | null) => void;
  setButton: (buttons: string[]) => void;
  initialButtons: string[];
  setWinningLine?: (line: number[]) => void;
  setX_or_O: (x: boolean) => void;
}

const Winner = ({
  item,
  setWinner,
  setButton,
  initialButtons,
  setWinningLine,
  setX_or_O,
}: Types) => {
  const handleNext = () => {
    setWinner(null);
    setButton(initialButtons);
    setWinningLine && setWinningLine([]);
    item === X ? setX_or_O(true) : setX_or_O(false);
  };

  return (
    <Div>
      <div className="background">
        <div>
          {/* <img src={item === X ? X : O} alt="icons" /> */}
          {(item === X || item === O) && (
            <img src={item === X ? X : O} alt="icons" />
          )}
          <H2 color={item === O}>TAKES THE ROUND</H2>
        </div>
        <button>QUIT</button>
        <button onClick={handleNext}>NEXT ROUND</button>
      </div>
    </Div>
  );
};

export default Winner;

export const Div = styled.div`
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

  button {
    border-radius: 1rem;
    box-shadow: 0px -4px 0px 0px #6b8997 inset;
    color: #1a2a33;
    font-size: 1.6rem;
    letter-spacing: 0.1rem;
    border: 0;
    padding: 1.5rem 1.6rem 1.7rem 1.7rem;
    background-color: #a8bfc9;
  }
  button + button {
    background-color: #f2b137;
    box-shadow: 0px -4px 0px 0px #cc8b13 inset;
    margin-left: 1.6rem;
  }
`;

const H2 = styled.h2<{ color: boolean }>`
  font-size: 2.4rem;
  letter-spacing: 0.15rem;
  color: ${(props) => (props.color ? "#F2B137" : "#31C3BD")};
`;
