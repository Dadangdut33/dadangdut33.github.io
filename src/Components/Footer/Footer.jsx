import KoFi from "./KoFI/KoFi";
export default function Footer() {
	return (
		<footer className='text-center text-lg-start'>
			<div className='container p-4 pb-0'>
				<section className='d-flex justify-content-center align-items-center' style={{ marginBottom: "18px" }}>
					<KoFi color='29abe0' id='dadangdut33' label='Buy Me a Ko-Fi' />
				</section>
			</div>
			<div className='text-center p-3' style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
				© 2021 <strong>Dadangdut33</strong>
			</div>
		</footer>
	);
}
