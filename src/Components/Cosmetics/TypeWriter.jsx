import { useState, useCallback, useEffect } from "react";

export default function TypeWriter({ typingDelay, erasingDelay, newTextDelay, textArray, loop }) {
	const [states, setStates] = useState([]);
	const [stateIndex, setStateIndex] = useState(0);
	const [textContent, setTextContent] = useState("");
	const [typing, setTyping] = useState(false);

	// compose all text states and their delays and store them in an array
	const init = useCallback(() => {
		const allStates = [];
		textArray.forEach((word) => {
			// adding
			for (let i = 1; i <= word.length; i++)
				allStates.push({
					text: word.substr(0, i),
					delay: typingDelay,
				});
			// deleting
			for (let i = word.length - 1; i >= 0; i--)
				allStates.push({
					text: word.substr(0, i),
					delay: i === word.length - 1 ? newTextDelay : erasingDelay,
				});
			// blank
			allStates.push({ text: "", delay: typingDelay });
		});
		setStates(allStates);
	}, [erasingDelay, typingDelay, newTextDelay, textArray]);

	// call init, exactly once
	useEffect(() => {
		init();
	}, [init]);

	// in the beginning, and if stateIndex has changes, set timeout
	// to schedule next text change
	useEffect(() => {
		// array not ready yet
		if (states.length === 0) return;
		const delay = states[stateIndex].delay;

		// calculate next states index
		const nextIndex = (stateIndex + 1) % states.length;

		// if final word is fully displayed, stop if loop is false
		const lastWordLength = textArray.slice(-1)[0].length;
		if (nextIndex === states.length - lastWordLength && !loop) return;

		// schedule next state
		const timeout = setTimeout(() => {
			const nextDelay = states[nextIndex].delay;
			setTyping(nextDelay === typingDelay || nextDelay === erasingDelay);
			// update displayed text
			setTextContent(states[stateIndex].text);
			// advance to next text state
			setStateIndex(nextIndex);
		}, delay);

		// cleanup
		return () => clearTimeout(timeout);
	}, [states, stateIndex, erasingDelay, typingDelay, loop, textArray]);

	// if we're typing, don't animate cursor
	const classes = ["cursor"];
	if (typing) classes.push("typing");

	return (
		<>
			<span className='typed-text'>{textContent}</span>
			<span className={classes.join(" ")}>&nbsp;</span>
		</>
	);
}
