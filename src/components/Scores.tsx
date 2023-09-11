import styled from "styled-components";

const Scores = ({ score }: { score: number }) => {
  return (
    <MainDiv>
      <ScoresComponent color="#31c3bd" player="X (ply)" score={14} />
      <ScoresComponent color="#A8BFC9" player="TIES" score={14} />
      <ScoresComponent color="#F2B137" player="O (ply)" score={14} />
    </MainDiv>
  );
};

export default Scores;

const ScoresComponent = ({
  player,
  score,
  color,
}: {
  player: string;
  score: number;
  color: string;
}) => {
  return (
    <Div color={color}>
      <h3>{player}</h3>
      <h2>{score}</h2>
    </Div>
  );
};

const MainDiv = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const Div = styled.div<{ color: string }>`
  max-width: 9.6rem;
  width: 100%;
  text-align: center;
  padding: 1.2rem 0;
  margin-top: 2rem;
  background-color: ${(props) => props.color};
  border-radius: 1.5rem;
  h3,
  h2 {
    color: #1a2a33;
  }
  h3 {
    font-size: 1.2rem;
    letter-spacing: 0.075rem;
  }
  h2 {
    font-size: 2rem;
    letter-spacing: 0.125rem;
  }
`;
