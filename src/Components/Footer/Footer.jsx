import Coffe from "./Coffee.svg";
import { motion } from "framer-motion";

export default function Footer() {
	const currYear = new Date().getFullYear();
	return (
		<footer className='text-center text-lg-start '>
			<div className='container p-4 pb-0'>
				<section className='d-flex justify-content-center align-items-center position-relative' style={{ marginBottom: "18px", marginTop: "30px" }}>
					<motion.a className='position-absolute pb-4' target={"_blank"} rel='noopener noreferrer' href='https://ko-fi.com/dadangdut33' whileHover={{ scale: 1.2 }}>
						<img src={Coffe} alt="Dadangdut33's Ko-Fi Page" className='ko-fi-bottom text-light' width={40}></img>
					</motion.a>
				</section>
			</div>
			<div className='text-center p-3 footer-light' id='footer'>
				© {currYear} <strong>Dadangdut33</strong>
			</div>
		</footer>
	);
}
