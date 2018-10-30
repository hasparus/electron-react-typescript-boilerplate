import React from 'react';
import styled, { css } from 'react-emotion';
import { DoStuff } from './Core/Game';

type BoardContainerProps = {
  size: string;
};
const BoardContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  ${({ size }: BoardContainerProps) => css`
    height: ${size};
    width: ${size};
  `};
`;

type Rune = 'X' | 'O' | ' ';

function nextPlayer(currentPlayer: Rune) {
  return currentPlayer === 'X' ? 'O' : 'X';
}

const initialState = {
  board: Array.from({ length: 9 }).fill(' ') as Rune[],
  player: 'X' as Rune,
};

type State = typeof initialState;

type GameCellProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: Rune;
};
const GameCell = (props: GameCellProps) => (
  <button
    {...props}
    style={{
      fontFamily: 'inherit',
      fontSize: 'inherit',
      margin: '5px',
      lineHeight: 0,
      minHeight: '10px',
      border: '2px solid black',
    }}
  />
);

export class Game extends React.Component<{}, State> {
  state = initialState;

  private changeCell = (index: number) => {
    if (this.state.board[index] === ' ') {
      this.setState(state => {
        const board = [...state.board];
        const currentPlayer = state.player;
        board[index] = currentPlayer;
        return {
          player: nextPlayer(currentPlayer),
          board,
        };
      });
    }
  };

  render() {
    const date = new Date();

    const { board, player } = this.state;
    return (
      <article
        style={{
          fontFamily: 'monospace',
          fontSize: '20px',
        }}
      >
        <div>
          <textarea>Dupa dupa dupa</textarea>
          <BoardContainer size="200px">
            {board.map((rune, i) => (
              <GameCell key={i} onClick={() => this.changeCell(i)}>
                {rune}
              </GameCell>
            ))}
          </BoardContainer>
        </div>
        <span>Current player: {player}{DoStuff(player.charCodeAt(0))}</span>
      </article>
    );
  }
}
