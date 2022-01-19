import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import ClickSound from "../../assets/click.mp3";

export default function Header() {
	const [showState, setShow] = useState(false);
	const clickSfx = new Audio(ClickSound);

	const [before, setBefore] = useState("/#");
	const [after, setAfter] = useState("/#");

	useEffect(() => {
		const btnGotoTop = document.getElementById("btn-goto-top");
		const btnGotoBottom = document.getElementById("btn-goto-bottom");
		const darkModeToggler = document.querySelector(".darkmode-toggler");

		const checkScroll = () => {
			setShow(true);

			if (window.scrollY > componentHeight - 200 && window.scrollY < componentHeight + 200) {
				clearActiveHeader();
				aboutNav.classList.add("active");
				setBefore("/#");
				setAfter("/#projects");
				btnGotoTop.classList.remove("slide-in-top-disappear-animation");
				btnGotoBottom.classList.remove("slide-in-bottom-disappear-animation");
				btnGotoTop.classList.add("slide-in-top-animation");
				btnGotoBottom.classList.add("slide-in-bottom-animation");
			}

			if (window.scrollY > componentHeight * 2 - 200 && window.scrollY < componentHeight * 2 + 600) {
				clearActiveHeader();
				projectsNav.classList.add("active");
				setBefore("/#about-me");
				setAfter("/#contact-me");
				btnGotoBottom.classList.remove("slide-in-bottom-disappear-animation");
				btnGotoBottom.classList.add("slide-in-bottom-animation");
			}

			if (window.scrollY > componentHeight * 3 - 200 && window.scrollY < componentHeight * 3 + 200) {
				clearActiveHeader();
				contactNav.classList.add("active");
				setBefore("/#projects");
				btnGotoBottom.classList.remove("slide-in-bottom-animation");
				btnGotoBottom.classList.add("slide-in-bottom-disappear-animation");
			}
		};

		const checkBgColor = () => {
			// show/hide back to top btn and check the bg mode
			if (document.body.classList.contains("bg-dark")) {
				btnGotoTop.className = "btn btn-outline-light btn-rounded slide-in-top-animation";
				btnGotoBottom.className = "btn btn-outline-light btn-rounded slide-in-bottom-animation";
			} else {
				btnGotoTop.className = "btn btn-outline-dark btn-rounded slide-in-top-animation";
				btnGotoBottom.className = "btn btn-outline-dark btn-rounded slide-in-bottom-animation";
			}
		};

		const darkModeTogglerPosition = (onstart = false) => {
			// darkmode toggler
			if (window.innerWidth < 575) {
				darkModeToggler.classList.remove("moveRight-animation");
				darkModeToggler.classList.add("moveLeft-animation");
			} else {
				if (!onstart) {
					darkModeToggler.classList.remove("moveLeft-animation");
					darkModeToggler.classList.add("moveRight-animation");
				}
			}
		};

		// check on startup
		if (window.scrollY > 400) {
			checkScroll(true);
			checkBgColor();
			darkModeTogglerPosition(true);
		} else {
			btnGotoTop.style.display = "none";
			btnGotoBottom.style.display = "none";
		}

		// check every 100ms for bg change
		var intervalBgCheck = setInterval(() => {
			if (document.body.classList.contains("bg-dark")) {
				btnGotoTop.className = btnGotoTop.className.replace("btn-outline-dark", "btn-outline-light");
				btnGotoBottom.className = btnGotoBottom.className.replace("btn-outline-dark", "btn-outline-light");
			} else {
				btnGotoTop.className = btnGotoTop.className.replace("btn-outline-light", "btn-outline-dark");
				btnGotoBottom.className = btnGotoBottom.className.replace("btn-outline-light", "btn-outline-dark");
			}
		}, 100);

		const displayBtnBackToTop = (ev) => {
			if (ev.type === "animationend") {
				if (ev.animationName === "slide-in-top-disappear") {
					btnGotoTop.style.display = "none";
				} else {
					btnGotoTop.style.display = "block";
				}
			}
		};

		const displayBtnGotoBottom = (ev) => {
			if (ev.type === "animationend") {
				if (ev.animationName === "slide-in-bottom-disappear") {
					btnGotoBottom.style.display = "none";
				} else {
					btnGotoBottom.style.display = "block";
				}
			}
		};

		btnGotoTop.addEventListener("animationend", displayBtnBackToTop, false);
		btnGotoBottom.addEventListener("animationend", displayBtnGotoBottom, false);

		// navbar
		// all section components have the same height so only need 1
		var aboutComp = document.getElementById("about-me-section");
		var componentHeight = aboutComp.offsetHeight;

		var aboutNav = document.getElementById("about-nav");
		var projectsNav = document.getElementById("projects-nav");
		var contactNav = document.getElementById("contact-nav");

		const clearActiveHeader = () => {
			aboutNav.classList.remove("active");
			projectsNav.classList.remove("active");
			contactNav.classList.remove("active");
		};

		// listeners
		window.onresize = () => {
			componentHeight = aboutComp.offsetHeight;
			darkModeTogglerPosition();
		};

		window.onscroll = () => {
			if (window.scrollY > 400) {
				checkScroll();
				darkModeTogglerPosition();
			} else {
				clearActiveHeader(); // clear active header
				setShow(false); // hide navbar

				// TOP OF PAGE, remove the arrow btn
				btnGotoTop.classList.remove("slide-in-top-animation");
				btnGotoBottom.classList.remove("slide-in-bottom-animation");
				btnGotoTop.classList.add("slide-in-top-disappear-animation");
				btnGotoBottom.classList.add("slide-in-bottom-disappear-animation");

				// add moveright only if there is any (darkmode toggler)
				if (darkModeToggler.classList.contains("moveLeft-animation")) {
					darkModeToggler.classList.remove("moveLeft-animation");
					darkModeToggler.classList.add("moveRight-animation");
				}
			}
		};

		return () => {
			// cleanup
			clearInterval(intervalBgCheck);
			btnGotoTop.removeEventListener("animationend", displayBtnBackToTop, false);
			btnGotoBottom.removeEventListener("animationend", displayBtnGotoBottom, false);
			window.onresize = null;
			window.onscroll = null;
		};
	}, []);

	return (
		<>
			<DarkModeToggle />
			<Fade top when={showState}>
				<nav className='navbar navbar-expand-sm navbar-light bg-light border-bottom fixed-top' id='navbar_top'>
					<div className='container-fluid'>
						<a className='navbar-brand' href='/#' style={{ cursor: showState ? "pointer" : "default" }} onClick={() => clickSfx.play()}>
							<span style={{ fontSize: "26px" }}>Dadangdut33</span>
						</a>
						<button
							className='navbar-toggler'
							type='button'
							data-bs-toggle='collapse'
							data-bs-target='#navbarNavDropdown'
							aria-controls='navbarNavDropdown'
							aria-expanded='false'
							aria-label='Toggle navigation'
						>
							<span className='navbar-toggler-icon'></span>
						</button>
						<div className='collapse navbar-collapse' id='navbarNavDropdown'>
							<ul className='navbar-nav me-auto' style={{ fontSize: "20px" }}>
								<li className='nav-item'>
									<a className='nav-link' aria-current='page' href={"#about-me"} style={{ cursor: showState ? "pointer" : "default" }} id='about-nav' onClick={() => clickSfx.play()}>
										About
									</a>
								</li>
								<li className='nav-item'>
									<a className='nav-link' href={"#projects"} style={{ cursor: showState ? "pointer" : "default" }} id='projects-nav' onClick={() => clickSfx.play()}>
										Projects
									</a>
								</li>
								<li className='nav-item'>
									<a className='nav-link' href={"#contact-me"} style={{ cursor: showState ? "pointer" : "default" }} id='contact-nav' onClick={() => clickSfx.play()}>
										Contact
									</a>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</Fade>
			<div>
				<a href={before} className={"btn btn-outline-light btn-rounded slide-in-bottom-disappear-animation"} id='btn-goto-top' onClick={() => clickSfx.play()}>
					<i className='bi bi-arrow-up'></i>
				</a>
				<a href={after} className={"btn btn-outline-light btn-rounded slide-in-bottom-disappear-animation"} id='btn-goto-bottom' onClick={() => clickSfx.play()}>
					<i className='bi bi-arrow-down'></i>
				</a>
			</div>
		</>
	);
}
