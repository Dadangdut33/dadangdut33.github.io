import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

export default function Navbar() {
	const [showState, setShow] = useState(false);
	const [before, setBefore] = useState("/#");
	const [after, setAfter] = useState("/#about-me");

	const fadeFromTop = {
		hidden: {
			y: -100,
			transition: {
				duration: 0.01,
			},
		},
		visible: {
			y: 0,
			transition: {
				duration: 0.01,
			},
		},
	};

	useEffect(() => {
		const btnGotoTop = document.getElementById("btn-goto-top");
		const btnGotoBottom = document.getElementById("btn-goto-bottom");
		const darkModeToggler = document.querySelector(".darkmode-toggler");

		const checkBgColor = () => {
			// show/hide back to top btn and check the bg mode
			if (document.body.classList.contains("bg-dark")) {
				btnGotoTop.classList.replace("btn-outline-dark", "btn-outline-light");
				btnGotoBottom.classList.replace("btn-outline-dark", "btn-outline-light");
			} else {
				btnGotoTop.classList.replace("btn-outline-light", "btn-outline-dark");
				btnGotoBottom.classList.replace("btn-outline-light", "btn-outline-dark");
			}
		};

		const darkModeTogglerPosition = () => {
			// darkmode toggler
			if (window.innerWidth < 575 && window.scrollY > 400) {
				darkModeToggler.classList.remove("moveRight-animation");
				darkModeToggler.classList.add("moveLeft-animation");
			} else {
				if (darkModeToggler.classList.contains("moveLeft-animation")) {
					darkModeToggler.classList.remove("moveLeft-animation");
					darkModeToggler.classList.add("moveRight-animation");
				}
			}
		};

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

		const winScrollCheck = () => {
			setShow(true); // show navbar

			if (window.scrollY > componentHeight - 300 && window.scrollY < componentHeight + 800) {
				clearActiveHeader();
				aboutNav.classList.add("active");
				setBefore("/#");
				setAfter("/#portals");
				btnGotoTop.classList.remove("slide-in-top-disappear-animation");
				btnGotoBottom.classList.remove("slide-in-bottom-disappear-animation");
				btnGotoTop.classList.add("slide-in-top-animation");
				btnGotoBottom.classList.add("slide-in-bottom-animation");
			}

			if (window.scrollY > componentHeight * 2 - 200 && window.scrollY < componentHeight * 2 + 600) {
				clearActiveHeader();
				portalsNav.classList.add("active");
				setBefore("/#about-me");
				setAfter("/#contact-me");
				btnGotoBottom.classList.remove("slide-in-bottom-disappear-animation");
				btnGotoBottom.classList.add("slide-in-bottom-animation");
			}

			if (window.scrollY > componentHeight * 3 - 200 && window.scrollY < componentHeight * 3 + 200) {
				clearActiveHeader();
				contactNav.classList.add("active");
				setBefore("/#portals");
				btnGotoBottom.classList.remove("slide-in-bottom-animation");
				btnGotoBottom.classList.add("slide-in-bottom-disappear-animation");
			}
		};

		// navbar
		// all section components have the same height so only need 1
		var aboutComp = document.getElementById("about-me-section");
		var componentHeight = aboutComp.offsetHeight;

		var aboutNav = document.getElementById("about-nav");
		var portalsNav = document.getElementById("portals-nav");
		var contactNav = document.getElementById("contact-nav");

		const clearActiveHeader = () => {
			aboutNav.classList.remove("active");
			portalsNav.classList.remove("active");
			contactNav.classList.remove("active");
		};

		const resizeListener = () => {
			componentHeight = aboutComp.offsetHeight;
			darkModeTogglerPosition();
		};

		const onscrollListener = () => {
			if (window.scrollY > 400) {
				winScrollCheck();
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

		// listeners
		btnGotoTop.addEventListener("animationend", displayBtnBackToTop, false);
		btnGotoBottom.addEventListener("animationend", displayBtnGotoBottom, false);
		window.addEventListener("resize", resizeListener);
		window.addEventListener("scroll", onscrollListener);

		// check on startup
		if (window.scrollY > 400) {
			winScrollCheck();
			checkBgColor();
			darkModeTogglerPosition();
		} else {
			btnGotoTop.style.display = "none";
			btnGotoBottom.style.display = "none";
		}

		return () => {
			// cleanup
			btnGotoTop.removeEventListener("animationend", displayBtnBackToTop, false);
			btnGotoBottom.removeEventListener("animationend", displayBtnGotoBottom, false);
			window.removeEventListener("resize", resizeListener);
			window.removeEventListener("scroll", onscrollListener);
		};
	}, []);

	return (
		<>
			<DarkModeToggle />
			<motion.nav
				className='navbar navbar-expand-sm navbar-light bg-light border-bottom fixed-top'
				id='navbar_top'
				variants={fadeFromTop}
				initial={"hidden"}
				animate={showState ? "visible" : "hidden"}
			>
				<div className='container-fluid'>
					<a className='navbar-brand' href='/#' style={{ cursor: showState ? "pointer" : "default" }}>
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
								<a className='nav-link' aria-current='page' href='#about-me' style={{ cursor: showState ? "pointer" : "default" }} id='about-nav'>
									About
								</a>
							</li>
							<li className='nav-item'>
								<a className='nav-link' href='#portals' style={{ cursor: showState ? "pointer" : "default" }} id='portals-nav'>
									Portals
								</a>
							</li>
							<li className='nav-item'>
								<a className='nav-link' href='#contact-me' style={{ cursor: showState ? "pointer" : "default" }} id='contact-nav'>
									Contact
								</a>
							</li>
						</ul>
					</div>
				</div>
			</motion.nav>
			<div>
				<a href={before} className='btn btn-outline-light btn-rounded slide-in-top-disappear-animation' id='btn-goto-top'>
					<i className='bi bi-arrow-up'></i>
				</a>
				<a href={after} className='btn btn-outline-light btn-rounded slide-in-bottom-disappear-animation' id='btn-goto-bottom'>
					<i className='bi bi-arrow-down'></i>
				</a>
			</div>
		</>
	);
}
