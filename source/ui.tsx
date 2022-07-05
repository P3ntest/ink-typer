import React, { FC, useState } from "react";
import { Box, Text, useInput } from "ink";

const sentences = [
	"The only sin is ignorance",
	"A man is his own easiest dupe, for what he wishes to be true he generally believes to be true",
	"A lie can travel halfway around the world while the truth is putting on its shoes",
	"Great minds discuss ideas; average minds discuss events; small minds discuss people",
	"If you have a garden and a library, you have everything you need",
	"Truth comes out in wine",
	"Everything in the universe is within you. Ask all from yourself",
	"When I get a little money I buy books; and if any is left I buy food and clothes",
];

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
				setCurrentSentance(
					sentences[Math.floor(Math.random() * sentences.length)]!
				);
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
						<Text
							key={i}
							color={correct ? "gray" : "white"}
							backgroundColor={correct ? "transparent" : "redBright"}
							bold={!correct}
						>
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
