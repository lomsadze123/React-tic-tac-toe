import styled from "styled-components";
import X from "../assets/icon-x.svg";
import O from "../assets/icon-o.svg";
import XBlack from "../assets/icon-x-black.svg";
import OBlack from "../assets/icon-o-black.svg";
import { useEffect, useState } from "react";
import Winner from "./Winner";
import Header from "./Header";
import Tied from "./Tied";

const Buttons = () => {
  const [X_or_O, setX_or_O] = useState(true);
  const initialButtons = Array(9).fill(null);
  const [buttons, setButton] = useState<string[]>(initialButtons);
  const [winner, setWinner] = useState<string | null>(null);
  const [winningLine, setWinningLine] = useState<number[]>([]);

  useEffect(() => {
    checkWinner();
  }, [buttons]);

  const checkWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        buttons[a] &&
        buttons[a] === buttons[b] &&
        buttons[a] === buttons[c]
      ) {
        setWinner(buttons[a]);
        setWinningLine(lines[i]);
        return;
      } else {
        setWinner("");
      }
    }
  };

  const handleButton = (index: number) => {
    if (buttons[index] === null && !(winner === X || winner === O)) {
      const newButtons = [...buttons];
      newButtons[index] = X_or_O ? X : O;
      setButton(newButtons);
      setX_or_O(!X_or_O);
    }
  };

  const handleX_or_O = (button: string, index: number) => {
    if (button === X) {
      return (
        <img src={winningLine.includes(index) ? XBlack : X} alt="X icon" />
      );
    } else if (button === O) {
      return (
        <img src={winningLine.includes(index) ? OBlack : O} alt="O icon" />
      );
    }
    return null;
  };

  return (
    <Div>
      <Header
        X_or_O={X_or_O}
        item={winner ? winner : ""}
        setWinner={setWinner}
        setButton={setButton}
        initialButtons={initialButtons}
        setX_or_O={setX_or_O}
      />
      <main>
        {buttons.map((button, index) => (
          <Button
            color={
              winner === X
                ? winningLine.includes(index)
                  ? "#31C3BD"
                  : "#1f3641"
                : winningLine.includes(index)
                ? "#F2B137"
                : "#1f3641"
            }
            key={index}
            onClick={() => handleButton(index)}
          >
            {handleX_or_O(button, index)}
          </Button>
        ))}
      </main>
      {winner && (
        <Winner
          item={winner ? winner : ""}
          setWinner={setWinner}
          setButton={setButton}
          initialButtons={initialButtons}
          setWinningLine={setWinningLine}
          setX_or_O={setX_or_O}
        />
      )}
      {/* {winner === "" && (
        <Tied
          item={winner ? winner : ""}
          setWinner={setWinner}
          setButton={setButton}
          initialButtons={initialButtons}
          setWinningLine={setWinningLine}
          setX_or_O={setX_or_O}
        />
      )} */}
    </Div>
  );
};

export default Buttons;

const Div = styled.div`
  max-width: 32.8rem;
  width: 100%;
  main {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
  }
`;

export const Button = styled.button<{ color: string }>`
  border: 0;
  border-radius: 1rem;
  max-width: 9.6rem;
  width: 100%;
  height: 9.6rem;
  box-shadow: inset 0px -8px 0px #10212a;
  background-color: ${(props) => props.color};
`;
