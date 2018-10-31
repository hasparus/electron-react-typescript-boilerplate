var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from 'react';
import styled, { css } from 'react-emotion';
var BoardContainer = styled.section(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  ", ";\n"], ["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  ",
    ";\n"])), function (_a) {
    var size = _a.size;
    return css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    height: ", ";\n    width: ", ";\n  "], ["\n    height: ", ";\n    width: ", ";\n  "])), size, size);
});
function nextPlayer(currentPlayer) {
    return currentPlayer === 'X' ? 'O' : 'X';
}
var initialState = {
    board: Array.from({ length: 9 }).fill(' '),
    player: 'X',
    text: '',
    translated: '',
};
var GameCell = function (props) { return (React.createElement("button", __assign({}, props, { style: {
        fontFamily: 'inherit',
        fontSize: 'inherit',
        margin: '5px',
        lineHeight: 0,
        minHeight: '10px',
        border: '2px solid black',
    } }))); };
var Game = /** @class */ (function (_super) {
    __extends(Game, _super);
    function Game() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = initialState;
        _this.changeCell = function (index) {
            if (_this.state.board[index] === ' ') {
                _this.setState(function (state) {
                    var board = state.board.slice();
                    var currentPlayer = state.player;
                    board[index] = currentPlayer;
                    return {
                        player: nextPlayer(currentPlayer),
                        board: board,
                    };
                });
            }
        };
        return _this;
    }
    Game.prototype.textChange = function (e) {
        this.state.text = e.currentTarget.value;
        // this.state.translated = doStuff(this.state.text);
        this.setState(this.state);
    };
    Game.prototype.render = function () {
        var _this = this;
        var date = new Date();
        var _a = this.state, board = _a.board, player = _a.player;
        return (React.createElement("article", { style: {
                fontFamily: 'monospace',
                fontSize: '20px',
            } },
            React.createElement("div", null,
                React.createElement("textarea", { value: this.state.text, onChange: this.textChange }),
                React.createElement("textarea", { value: this.state.translated }),
                React.createElement(BoardContainer, { size: "200px" }, board.map(function (rune, i) { return (React.createElement(GameCell, { key: i, onClick: function () { return _this.changeCell(i); } }, rune)); }))),
            React.createElement("span", null,
                "Current player: ",
                player)));
    };
    return Game;
}(React.Component));
export { Game };
var templateObject_1, templateObject_2;
//# sourceMappingURL=Game.js.map