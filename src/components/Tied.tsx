import Winner from "./Winner";

export interface Types {
  item: string;
  setWinner: (item: string | null) => void;
  setButton: (buttons: string[]) => void;
  initialButtons: string[];
  setWinningLine?: (line: number[]) => void;
  setX_or_O: (x: boolean) => void;
  round?: string;
}

const Tied = ({
  item,
  setWinner,
  setButton,
  initialButtons,
  setWinningLine,
  setX_or_O,
}: // round,
Types) => {
  return (
    <Winner
      item={item}
      setWinner={setWinner}
      setButton={setButton}
      initialButtons={initialButtons}
      setWinningLine={setWinningLine}
      setX_or_O={setX_or_O}
    />
  );
};

export default Tied;
