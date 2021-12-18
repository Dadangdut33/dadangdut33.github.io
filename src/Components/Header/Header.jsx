import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";

export default function Header() {
	const [showState, setShow] = useState(false);

	useEffect(() => {
		window.onscroll = () => {
			if (window.scrollY > 400) {
				setShow(true);
			} else {
				setShow(false);
			}
		};
	}, []);

	return (
		<Fade top when={showState}>
			<nav
				className='navbar navbar-expand-sm navbar-light bg-light border-bottom fixed-top'
				id='navbar_top'
			>
				<div className='container-fluid'>
					<a className='navbar-brand' href='/#'>
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
					<div
						className='collapse navbar-collapse'
						id='navbarNavDropdown'
					>
						<ul
							className='navbar-nav me-auto'
							style={{ fontSize: "20px" }}
						>
							<li className='nav-item'>
								<a
									className='nav-link active'
									aria-current='page'
									href='#home'
								>
									Home
								</a>
							</li>
							<li className='nav-item'>
								<a className='nav-link' href='#contact'>
									x
								</a>
							</li>
							<li className='nav-item'>
								<a className='nav-link' href='#about'>
									About
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
