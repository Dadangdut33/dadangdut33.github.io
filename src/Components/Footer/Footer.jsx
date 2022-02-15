import KoFi from "./KoFI/KoFi";
export default function Footer() {
	const currYear = new Date().getFullYear();
	return (
		<footer className='text-center text-lg-start'>
			<div className='container p-4 pb-0'>
				<section className='d-flex justify-content-center align-items-center' style={{ marginBottom: "18px", marginTop: "30px" }}>
					<KoFi color='29abe0' id='dadangdut33' label='Buy Me a Ko-Fi' />
				</section>
			</div>
			<div className='text-center p-3 footer-light' id='footer'>
				© {currYear} <strong>Dadangdut33</strong>
			</div>
		</footer>
	);
}
