import $ from "jquery";
import React from "react";
import darkLogo from "./dark.svg";
import lightLogo from "./light.svg";

export default function DarkModeToggle() {
	const [checked, setChecked] = React.useState(localStorage.getItem("bgmode") === "dark" ? true : false);

	const [logo, setLogo] = React.useState(checked ? darkLogo : lightLogo);

	const setDarkMode = () => {
		setChecked(true);
		setLogo(darkLogo);
		document.querySelectorAll(".bg-light").forEach((element) => {
			element.className = element.className.replace(/-light/g, "-dark");
		});

		document.body.classList.add("bg-dark");
		if (document.body.classList.contains("text-dark")) {
			document.body.classList.replace("text-dark", "text-light");
		} else {
			document.body.classList.add("text-light");
		}

		document.body.classList.remove("light-scroll");
		document.body.classList.add("dark-scroll");
	};

	const setLightMode = () => {
		setChecked(false);
		setLogo(lightLogo);
		document.querySelectorAll(".bg-dark").forEach((element) => {
			element.className = element.className.replace(/-dark/g, "-light");
		});
		document.body.classList.remove("bg-dark");
		if (document.body.classList.contains("text-light")) {
			document.body.classList.replace("text-light", "text-dark");
		} else {
			document.body.classList.add("text-dark");
		}

		document.body.classList.remove("dark-scroll");
		document.body.classList.add("light-scroll");
	};

	const toggleBgMode = () => {
		const currentMode = localStorage.getItem("bgmode");
		const newMode = currentMode === "dark" ? "light" : "dark";
		localStorage.setItem("bgmode", newMode);

		if (newMode === "dark") {
			setDarkMode();
		} else {
			setLightMode();
		}
	};

	const getSystemDefaultTheme = () => {
		return window.matchMedia("(prefers-color-scheme: dark)").matches;
	};

	React.useEffect(() => {
		var currentMode = localStorage.getItem("bgmode");
		if (currentMode == null) {
			currentMode = getSystemDefaultTheme();
			currentMode = currentMode ? "dark" : "light";
			localStorage.setItem("bgmode", currentMode);
		}

		if (currentMode === "dark") {
			setChecked(true);
			setLogo(darkLogo);
			var checkExist = setInterval(function () {
				if ($(".bg-light").length) {
					clearInterval(checkExist);
					setDarkMode();
				}
			}, 100); // check every 100ms (check until element is found)
		} else {
			setLightMode();
		}
	}, []);

	return (
		<div className='form-check form-switch ms-auto mt-3 me-3'>
			<label className='form-check-label ms-3' htmlFor='lightSwitch' style={{ marginLeft: "3px" }}>
				<img src={logo} className='bi bi-brightness-high' width={"25"} height={"25"} fill='white' alt='light/dark toggler' viewBox='0 0 16 16' style={{ marginBottom: "7px" }} />
			</label>
			<input className='form-check-input' type={"checkbox"} id='lightSwitch' onChange={toggleBgMode} checked={checked} style={{ marginLeft: "0px", cursor: "pointer" }} />
		</div>
	);
}
