import React, { FC, useState } from "react";
import { Box, Text, useInput } from "ink";

const App: FC = () => {
	const [currentSentance, setCurrentSentance] = useState("Hello World");
	const [currentInput, setCurrentInput] = useState("");

	useInput((input, key) => {
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

	return (
		<Box flexDirection="column">
			<Text bold>{currentSentance}</Text>
			<Text>
				{currentInput.split("").map((char, i) => {
					const correct = currentSentance[i] === char;
					return (
						<Text key={i} color={correct ? "gray" : "red"} bold={!correct}>
							{char}
						</Text>
					);
				})}
				_
			</Text>
		</Box>
	);
};

module.exports = App;
export default App;
