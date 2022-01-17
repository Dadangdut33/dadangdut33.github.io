import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";

export default function Header() {
	const [showState, setShow] = useState(false);

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
		var aboutComp = document.getElementById("about-me");
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

		window.onscroll = () => {
			if (window.scrollY > 400) {
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
			<Fade top when={showState}>
				<nav className='navbar navbar-expand-sm navbar-light bg-light border-bottom fixed-top' id='navbar_top'>
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
									<a className='nav-link' aria-current='page' href={"#about-me"} style={{ cursor: showState ? "pointer" : "default" }} id='about-nav'>
										About
									</a>
								</li>
								<li className='nav-item'>
									<a className='nav-link' href={"#projects"} style={{ cursor: showState ? "pointer" : "default" }} id='projects-nav'>
										Projects
									</a>
								</li>
								<li className='nav-item'>
									<a className='nav-link' href={"#contact-me"} style={{ cursor: showState ? "pointer" : "default" }} id='contact-nav'>
										Contact
									</a>
								</li>
							</ul>
							<div className='d-flex' style={{ marginBottom: "7px" }}>
								<DarkModeToggle />
							</div>
						</div>
					</div>
				</nav>
			</Fade>
			<div>
				<a href='/#' className={"btn btn-outline-light btn-rounded slide-in-bottom-disappear-animation"} id='btn-back-to-top'>
					<i className='bi bi-arrow-up'></i>
				</a>
			</div>
		</>
	);
}
