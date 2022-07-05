#!/usr/bin/env node
import React from "react";
import { render } from "ink";
import meow from "meow";
import App from "./ui";

meow(
	`
	Usage
	  $ ink-typer

	Options
		--name  Your name
web
	Examples
	  $ ink-typer --name=Jane
	  Hello, Jane
`,
	{
		flags: {
			name: {
				type: "string",
			},
		},
	}
);

render(<App />);
