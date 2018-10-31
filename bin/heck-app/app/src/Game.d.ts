import React from 'react';
declare type Rune = 'X' | 'O' | ' ';
declare const initialState: {
    board: Rune[];
    player: Rune;
    text: string;
    translated: string;
};
declare type State = typeof initialState;
export declare class Game extends React.Component<{}, State> {
    state: {
        board: Rune[];
        player: Rune;
        text: string;
        translated: string;
    };
    private changeCell;
    textChange(e: React.ChangeEvent<HTMLTextAreaElement>): void;
    render(): JSX.Element;
}
export {};
