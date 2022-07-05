"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const ink_1 = require("ink");
const App = () => {
    const [currentSentance, setCurrentSentance] = (0, react_1.useState)("Hello World");
    const [currentInput, setCurrentInput] = (0, react_1.useState)("");
    (0, ink_1.useInput)((input, key) => {
        if (!key.return) {
            setCurrentInput(currentInput + input);
        }
        if (key.delete) {
            setCurrentInput(currentInput.slice(0, -1));
        }
        if (key.return) {
            if (currentSentance === currentInput) {
                setCurrentInput("");
                setCurrentSentance("How are you doing");
            }
        }
    });
    return (react_1.default.createElement(ink_1.Box, { flexDirection: "column" },
        react_1.default.createElement(ink_1.Text, { bold: true }, currentSentance),
        react_1.default.createElement(ink_1.Text, null,
            currentInput.split("").map((char, i) => {
                const correct = currentSentance[i] === char;
                return (react_1.default.createElement(ink_1.Text, { key: i, color: correct ? "gray" : "red", bold: !correct }, char));
            }),
            "_")));
};
module.exports = App;
exports.default = App;
