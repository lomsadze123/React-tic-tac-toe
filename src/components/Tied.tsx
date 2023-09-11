import styled from "styled-components";
import Winner from "./Winner";
import { Types } from "./Winner";

const Tied = ({
  item,
  setWinner,
  setButton,
  initialButtons,
  setWinningLine,
  setX_or_O,
  setIsTied,
}: Types) => {
  const handleTied = () => {
    setIsTied && setIsTied(false);
  };

  return (
    <Div>
      <Winner
        item={item}
        setWinner={setWinner}
        setButton={setButton}
        initialButtons={initialButtons}
        setWinningLine={setWinningLine}
        setX_or_O={setX_or_O}
        round="ROUND TIED"
        setIsTied={handleTied}
      />
    </Div>
  );
};

export default Tied;

const Div = styled.div`
  h2 {
    color: #a8bfc9;
  }
`;
