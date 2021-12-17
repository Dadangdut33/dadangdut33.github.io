import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { useEffect } from "react";

export default function Header() {
	useEffect(() => {
		window.onscroll = () => {
			// prettier-ignore
			if (window.scrollY > 400) {
				document.getElementById("navbar_top").classList.remove("hidden");
			} else {
				document.getElementById("navbar_top").classList.add("hidden");
			}
		};
	}, []);

	return (
		<nav
			className='navbar navbar-expand-sm navbar-light bg-light border-bottom fixed-top hidden'
			id='navbar_top'
		>
			<div className='container-fluid'>
				<a className='navbar-brand' href='#'>
					Dadangdut33
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
					<ul className='navbar-nav me-auto'>
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
	);
}
