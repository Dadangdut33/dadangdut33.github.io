import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

export default function Header() {
	return (
		<nav className='navbar navbar-expand-sm navbar-light bg-light' id='top'>
			<div className='container-fluid'>
				<a className='navbar-brand' href='#top'>
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
					<div className='d-flex'>
						<DarkModeToggle />
					</div>
				</div>
			</div>
		</nav>
	);
}
