import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import ClickSound from "../../assets/click.mp3";

export default function Header() {
	const [showState, setShow] = useState(false);
	const clickSfx = new Audio(ClickSound);

	useEffect(() => {
		const btnBackToTop = document.getElementById("btn-back-to-top");
		// check on startup
		if (window.scrollY > 400) {
			setShow(true);
			// show/hide back to top btn and check the bg mode
			if (document.body.classList.contains("bg-dark")) {
				btnBackToTop.className = "btn btn-outline-light btn-rounded slide-in-bottom-animation";
			} else {
				btnBackToTop.className = "btn btn-outline-dark btn-rounded slide-in-bottom-animation";
			}
		} else {
			btnBackToTop.style.display = "none";
		}

		// check every 100ms for bg change
		var intervalBgCheck = setInterval(() => {
			if (document.body.classList.contains("bg-dark")) {
				btnBackToTop.className = btnBackToTop.className.replace("btn-outline-dark", "btn-outline-light");
			} else {
				btnBackToTop.className = btnBackToTop.className.replace("btn-outline-light", "btn-outline-dark");
			}
		}, 100);

		// all components have the same height so only need 1
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

		const displayBtnBackToTop = (ev) => {
			if (ev.type === "animationend") {
				if (ev.animationName === "slide-in-bottom-disappear") {
					btnBackToTop.style.display = "none";
				} else {
					btnBackToTop.style.display = "block";
				}
			}
		};

		btnBackToTop.addEventListener("animationend", displayBtnBackToTop, false);

		window.onresize = () => {
			componentHeight = aboutComp.offsetHeight;
		};

		var darkModeToggler = document.querySelector(".darkmode-toggler");

		// startup check
		if (window.scrollY > 400) {
			// check width, only if < 575px
			if (window.innerWidth < 575) {
				darkModeToggler.classList.remove("moveRight-animation");
				darkModeToggler.classList.add("moveLeft-animation");
			}
		}
		window.onscroll = () => {
			if (window.scrollY > 400) {
				if (window.innerWidth < 575) {
					darkModeToggler.classList.remove("moveRight-animation");
					darkModeToggler.classList.add("moveLeft-animation");
				}
				setShow(true);
				// show/hide back to top btn and check the bg mode
				if (document.body.classList.contains("bg-dark")) {
					btnBackToTop.className = "btn btn-outline-light btn-rounded slide-in-bottom-animation";
				} else {
					btnBackToTop.className = "btn btn-outline-dark btn-rounded slide-in-bottom-animation";
				}

				if (window.scrollY > componentHeight - 150 && window.scrollY < componentHeight + 150) {
					clearActiveHeader();
					aboutNav.classList.add("active");
				}

				if (window.scrollY > componentHeight * 2 - 150 && window.scrollY < componentHeight * 2 + 150) {
					clearActiveHeader();
					projectsNav.classList.add("active");
				}

				if (window.scrollY > componentHeight * 3 - 200 && window.scrollY < componentHeight * 3 + 200) {
					clearActiveHeader();
					contactNav.classList.add("active");
				}
			} else {
				clearActiveHeader();
				setShow(false);
				if (document.body.classList.contains("bg-dark")) {
					btnBackToTop.className = "btn btn-outline-light btn-rounded slide-in-bottom-disappear-animation";
				} else {
					btnBackToTop.className = "btn btn-outline-dark btn-rounded slide-in-bottom-disappear-animation";
				}
				// add moveright only if there is any
				if (darkModeToggler.classList.contains("moveLeft-animation")) {
					darkModeToggler.classList.remove("moveLeft-animation");
					darkModeToggler.classList.add("moveRight-animation");
				}
			}
		};

		return () => {
			// cleanup
			clearInterval(intervalBgCheck);
			btnBackToTop.removeEventListener("animationend", displayBtnBackToTop, false);
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
				<a href='/#' className={"btn btn-outline-light btn-rounded slide-in-bottom-disappear-animation"} id='btn-back-to-top' onClick={() => clickSfx.play()}>
					<i className='bi bi-arrow-up'></i>
				</a>
			</div>
		</>
	);
}
