import React from 'react';
import styled, { css } from 'react-emotion';
import * as core from 'heck-core';

console.log(core);

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
  text: '',
  translated: '',
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

  textChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    this.state.text = e.currentTarget.value;
    // this.state.translated = doStuff(this.state.text);
    this.setState(this.state);
  }

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
          <textarea value={this.state.text} onChange={this.textChange} />
          <textarea value={this.state.translated} />

          <BoardContainer size="200px">
            {board.map((rune, i) => (
              <GameCell key={i} onClick={() => this.changeCell(i)}>
                {rune}
              </GameCell>
            ))}
          </BoardContainer>
        </div>
        <span>
          Current player: {player}
          {/* {doStuff(player.charCodeAt(0))} */}
        </span>
      </article>
    );
  }
}
