import KoFi from "./KoFI/KoFi";
export default function Footer() {
	return (
		<footer className='text-center text-lg-start'>
			<div className='container p-4 pb-0'>
				{" "}
				<section className=''>
					{" "}
					<p className='d-flex justify-content-center align-items-center'>
						<span className='me-3'>Consider to </span> <KoFi color='29abe0' id='dadangdut33' label='Support Me on Ko-Fi' />
					</p>{" "}
				</section>{" "}
			</div>
			<div className='text-center p-3' style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
				© 2021 <strong>Dadangdut33</strong>
				{/* <KoFi color='29abe0' id='dadangdut33' label='Support Me on Ko-Fi' /> */}
			</div>
		</footer>
		// <section className=''>
		// 	<footer className='text-center text-white'>
		// 		<div className='container p-4 pb-0'>
		// 			<section className=''>
		// 				<p className='d-flex justify-content-center align-items-center'>
		// 					<span className='me-3'>Register for free</span>
		// 					<button type='button' className='btn btn-outline-light btn-rounded'>
		// 						Sign up!
		// 					</button>
		// 				</p>
		// 			</section>
		// 		</div>

		// 		<div className='text-center p-3'>
		// 			© 2020 Copyright:
		// 			<a className='text-white' href='https://mdbootstrap.com/'>
		// 				MDBootstrap.com
		// 			</a>
		// 		</div>
		// 	</footer>
		// </section>
	);
}
