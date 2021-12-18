import logo from "./logo.png";
import Pulse from "react-reveal/Jump";
import Fade from "react-reveal/Fade";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function MainPage() {
	const [btnClass, setBtnClass] = useState("btn btn-primary pulse-animation");

	useEffect(() => {
		// set document title
		document.title = "Dadangdut33's Profile";
	}, []);

	return (
		<section className='center-flex-column' id='top'>
			<Fade>
				<div className='center-horizontal-vertical' style={{ paddingBottom: "70px" }}>
					<div className='flex-dir-row'>
						<div className='flex-dir-column'>
							<img src={logo} alt='Logo' className='logo-main content center-horizontal' />{" "}
							<motion.div className='center-horizontal' style={{ paddingTop: "4px" }} whileHover={{ scale: 1.1 }}>
								<a href='https://github.com/Dadangdut33' target={"_blank"} rel='noreferrer'>
									<i className='bi bi-github pad-small'></i>
								</a>
								<a href='https://www.linkedin.com/in/fauzan-farhan-antoro/' target={"_blank"} rel='noreferrer'>
									<i className='bi bi-linkedin pad-small'></i>
								</a>
								<a href='https://ko-fi.com/dadangdut33' target={"_blank"} rel='noreferrer'>
									<svg xmlns='http://www.w3.org/2000/svg' aria-hidden='true' role='img' width={22} height={22} preserveAspectRatio='xMidYMid meet' viewBox='0 0 24 24' className='ko-fi-logo'>
										<path
											d='M23.881 8.948c-.773-4.085-4.859-4.593-4.859-4.593H.723c-.604 0-.679.798-.679.798s-.082 7.324-.022 11.822c.164 2.424 2.586 2.672 2.586 2.672s8.267-.023 11.966-.049c2.438-.426 2.683-2.566 2.658-3.734c4.352.24 7.422-2.831 6.649-6.916zm-11.062 3.511c-1.246 1.453-4.011 3.976-4.011 3.976s-.121.119-.31.023c-.076-.057-.108-.09-.108-.09c-.443-.441-3.368-3.049-4.034-3.954c-.709-.965-1.041-2.7-.091-3.71c.951-1.01 3.005-1.086 4.363.407c0 0 1.565-1.782 3.468-.963c1.904.82 1.832 3.011.723 4.311zm6.173.478c-.928.116-1.682.028-1.682.028V7.284h1.77s1.971.551 1.971 2.638c0 1.913-.985 2.667-2.059 3.015z'
											fill='currentColor'
										/>
									</svg>
								</a>
							</motion.div>
						</div>
						<div className='content'>
							<div className='flex-dir-row persist'>
								<h1 style={{ marginRight: "1rem" }}>
									<strong>Hello!</strong>
								</h1>
								<h1 style={{ marginRight: "0.5rem" }}>I'm Fauzan</h1>
								<h1>
									<Pulse delay={750}>👋</Pulse>
								</h1>
							</div>
							<h2 className='lead'>Full Stack Developer</h2>
							<h4 className='text-muted'>
								I'm currently pursuing my bachelor degree as an Informatics Engineering Student at{" "}
								<a href='https://www.uinjkt.ac.id/' className='subtle-link'>
									UIN Jakarta
								</a>
								<br />I like to learn new things and do some coding for side projects on my free time.
							</h4>
						</div>
					</div>
					<div className='center'>
						<motion.a className={btnClass} href='#about-me' style={{ margin: "0 auto" }} id='read-more-btn' onMouseEnter={() => setBtnClass("btn btn-primary")} onClick={() => setBtnClass("btn btn-primary")} whileHover={{ scale: 1.1 }}>
							Read more <i className='bi bi-arrow-down-short'></i>
						</motion.a>
					</div>
				</div>
			</Fade>
		</section>
	);
}
