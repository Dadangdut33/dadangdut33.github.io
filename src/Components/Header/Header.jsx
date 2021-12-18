import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";

export default function Header() {
	const [showState, setShow] = useState(false);

	useEffect(() => {
		if (window.scrollY > 400) {
			setShow(true);
		}

		// all components have the same height so only need 1
		var aboutComp = document.getElementById("about-me");
		var heightAbout = aboutComp.offsetHeight;

		var aboutNav = document.getElementById("about-nav");
		var skillsNav = document.getElementById("skills-nav");
		var projectsNav = document.getElementById("projects-nav");
		var contactNav = document.getElementById("contact-nav");

		const clearActiveHeader = () => {
			aboutNav.classList.remove("active");
			skillsNav.classList.remove("active");
			projectsNav.classList.remove("active");
			contactNav.classList.remove("active");
		};

		window.onresize = () => {
			heightAbout = aboutComp.offsetHeight;
		};

		window.onscroll = () => {
			if (window.scrollY > 400) {
				setShow(true);

				if (window.scrollY === heightAbout) {
					clearActiveHeader();
					aboutNav.classList.add("active");
				}

				if (window.scrollY === heightAbout * 2) {
					clearActiveHeader();
					skillsNav.classList.add("active");
				}

				if (window.scrollY === heightAbout * 3) {
					clearActiveHeader();
					projectsNav.classList.add("active");
				}

				if (window.scrollY === heightAbout * 4) {
					clearActiveHeader();
					contactNav.classList.add("active");
				}
			} else {
				setShow(false);
			}
		};
	}, []);

	return (
		<Fade top when={showState}>
			<nav className='navbar navbar-expand-sm navbar-light bg-light border-bottom fixed-top' id='navbar_top'>
				<div className='container-fluid'>
					<a className='navbar-brand' href='/#'>
						<span style={{ fontSize: "26px" }}>Dadangdut33</span>
					</a>
					<button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNavDropdown' aria-controls='navbarNavDropdown' aria-expanded='false' aria-label='Toggle navigation'>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div className='collapse navbar-collapse' id='navbarNavDropdown'>
						<ul className='navbar-nav me-auto' style={{ fontSize: "20px" }}>
							<li className='nav-item'>
								<a className='nav-link active' aria-current='page' href='#about-me' id='about-nav'>
									About
								</a>
							</li>
							<li className='nav-item'>
								<a className='nav-link' href='#skills' id='skills-nav'>
									Skills
								</a>
							</li>
							<li className='nav-item'>
								<a className='nav-link' href='#projects' id='projects-nav'>
									Projects
								</a>
							</li>
							<li className='nav-item'>
								<a className='nav-link' href='#contact-me' id='contact-nav'>
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
	);
}
