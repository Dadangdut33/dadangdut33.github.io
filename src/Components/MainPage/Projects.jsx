import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ClickSound from "../../assets/click.mp3";
export default function MainPage() {
	const clickSfx = new Audio(ClickSound);
	const [contentRef, contentInView] = useInView({
		triggerOnce: false,
		rootMargin: "0px 0px -300px",
	});

	// startup
	useEffect(() => {
		// check on startup
		const cards = document.querySelectorAll(".card-body");
		var i = 0;
		var interval = setInterval(() => {
			if (i > 100) clearInterval(interval);
			// check bg type in body
			if (document.body.classList.contains("bg-dark")) {
				cards.forEach((card) => {
					card.className = card.className.replace("bg-light", "bg-dark");
				});
			}
			i++;
		}, 100);

		return () => clearInterval(interval);
	}, [contentInView]);

	const parentVariants = {
		hidden: {
			opacity: 0,
			transition: {
				duration: 0.5,
			},
		},
		visible: {
			opacity: 1,
			transition: {
				duration: 0.5,
			},
		},
	};

	const childVariants_1 = {
		hidden: {
			scale: 0,
			transition: {
				duration: 0.5,
			},
		},
		visible: {
			scale: 1,
			transition: {
				duration: 0.5,
			},
		},
	};

	const childVariants_2 = {
		hidden: {
			scale: 0,
			transition: {
				duration: 0.5,
			},
		},
		visible: {
			scale: 1,
			transition: {
				duration: 0.5,
				delay: 0.3,
			},
		},
	};

	const childVariants_3 = {
		hidden: {
			scale: 0,
			transition: {
				duration: 0.5,
			},
		},
		visible: {
			scale: 1,
			transition: {
				duration: 0.5,
				delay: 0.6,
			},
		},
	};

	return (
		<section className='center-flex-column' id='projects-section'>
			<div className='center-horizontal-vertical'>
				<span className='anchor' id='projects' style={{ marginTop: "-100px" }}></span>
				<h1 className='text-center' ref={contentRef}>
					Some of My Repositories
				</h1>
				<motion.div className='projects' initial='hidden' animate={contentInView ? "visible" : "hidden"} variants={parentVariants}>
					<motion.div className='card mb-3' style={{ maxWidth: "540px" }} variants={childVariants_1}>
						<div className='flex-dir-row persist'>
							<div className='col-md-4'>
								<img src='https://raw.githubusercontent.com/Dadangdut33/minesweeper-randomwalk/master/public/logo512.png' className='card-img' alt='Project-Logo' />
							</div>
							<div className='col-md-8'>
								<div className='card-body bg-light'>
									<h5 className='card-title'>Minesweeper Game With Randomwalk Implementation</h5>
									<p className='card-text'>A minesweeper game made using React.js and randomwalk algorithm as the randomizer</p>
									<p className='card-text'>
										<small className='text-muted'>
											<a href='https://github.com/Dadangdut33/minesweeper-randomwalk' className='subtle-link' target={"_blank"} rel='noopener noreferrer'>
												Visit project repository
											</a>
											{" | "}
											<a href='https://dadangdut33.github.io/minesweeper-randomwalk/' className='subtle-link' target={"_blank"} rel='noopener noreferrer'>
												Live demo
											</a>
										</small>
									</p>
								</div>
							</div>
						</div>
					</motion.div>
					<motion.div className='card mb-3' style={{ maxWidth: "540px" }} variants={childVariants_2}>
						<div className='flex-dir-row persist'>
							<div className='col-md-4'>
								<img src='https://raw.githubusercontent.com/Dadangdut33/Screen-Translate/main/logo.png' className='card-img' alt='Project-Logo' />
							</div>
							<div className='col-md-8'>
								<div className='card-body bg-light'>
									<h5 className='card-title'>Screen Translate - An Easy to Use OCR Translator</h5>
									<p className='card-text'>An Easy to Use OCR/Screen Translator made by using Python and Tesseract.</p>
									<p className='card-text'>
										<small className='text-muted'>
											<a href='https://github.com/Dadangdut33/Screen-Translate' className='subtle-link' target={"_blank"} rel='noopener noreferrer'>
												Visit project repository
											</a>
											{" | "}
											<a href='https://github.com/Dadangdut33/Screen-Translate/releases/latest' className='subtle-link' target={"_blank"} rel='noopener noreferrer'>
												Download
											</a>
										</small>
									</p>
								</div>
							</div>
						</div>
					</motion.div>
					<motion.div className='card mb-3' style={{ maxWidth: "540px" }} variants={childVariants_3}>
						<div className='card-body bg-light'>
							<motion.h5
								className='card-title text-center'
								style={{ cursor: "pointer" }}
								whileHover={{ scale: 1.1 }}
								onClick={() => {
									clickSfx.play();
									window.open("https://github.com/Dadangdut33?tab=repositories", "_blank", "noopener noreferrer");
								}}
							>
								Visit my Github for More
							</motion.h5>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
