import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
export default function Portals() {
	const [contentRef, contentInView] = useInView({
		triggerOnce: true,
		rootMargin: "0px 0px -300px",
	});

	const fadeVar = {
		hidden: {
			scale: 0,
			transition: {
				duration: 0.5,
			},
		},
		visible: (i) => ({
			scale: 1,
			transition: {
				delay: i * 0.3,
				duration: 0.5,
			},
		}),
	};

	return (
		<section className='center-flex-column' id='portals-section'>
			<div className='center-horizontal-vertical'>
				<span className='anchor' id='portals' style={{ marginTop: "-100px" }}></span>
				<h1 className='text-center' ref={contentRef} style={{ paddingBottom: "5px" }}>
					<span>Portals</span>
					<span
						className={contentInView ? "display-1 text-center underline-smooth origin-left show-from-right" : "display-1 text-center underline-smooth origin-left"}
						style={{ marginTop: "0" }}
					></span>
				</h1>
				<div className='flex-dir-row center'>
					<motion.div className='col-sm-6 card-wrapper' variants={fadeVar} custom={0} initial={"hidden"} animate={contentInView ? "visible" : "hidden"}>
						<div className='card card-list'>
							<div className='card-body bg-light'>
								<h5 className='card-title'>
									<i class='bi bi-pen'></i> My Blog
								</h5>
								<p className='card-text'>Place where I share some of my thoughts, ideas, and experiences.</p>
								<a href='https://blog.dadangdut33.codes' target={"_blank"} rel='noopener noreferrer' className='btn btn-primary'>
									blog.dadangdut33.codes
								</a>
							</div>
						</div>
					</motion.div>
					<motion.div className='col-sm-6 card-wrapper' variants={fadeVar} custom={1} initial={"hidden"} animate={contentInView ? "visible" : "hidden"}>
						<div className='card card-list'>
							<div className='card-body bg-light'>
								<h5 className='card-title'>
									<i class='bi bi-star'></i> Featured Projects: ScreenTranslate
								</h5>
								<p className='card-text'>An Easy to Use OCR/Screen Translator made using Python and Tesseract.</p>
								<a href='https://github.com/Dadangdut33/Screen-Translate' target={"_blank"} rel='noopener noreferrer' className='btn btn-primary'>
									Project Repository
								</a>
								<a
									href='https://github.com/Dadangdut33/Screen-Translate/releases/latest'
									target={"_blank"}
									rel='noopener noreferrer'
									className='btn btn-info'
									style={{ marginLeft: "1rem" }}
								>
									Download
								</a>
							</div>
						</div>
					</motion.div>
				</div>

				<div className='flex-dir-row center'>
					<motion.div className='col-sm-6 card-wrapper' variants={fadeVar} custom={2} initial={"hidden"} animate={contentInView ? "visible" : "hidden"}>
						<div className='card card-list'>
							<div className='card-body bg-light'>
								<h5 className='card-title'>
									<i class='bi bi-star'></i> Featured Projects: Minesweeper-Randomwalk
								</h5>
								<p className='card-text'>A minesweeper game made using React.js and randomwalk algorithm as the randomizer</p>
								<a href='https://github.com/Dadangdut33/minesweeper-randomwalk' target={"_blank"} rel='noopener noreferrer' className='btn btn-primary'>
									Project Repository
								</a>
								<a href='https://dadangdut33.github.io/minesweeper-randomwalk/' target={"_blank"} rel='noopener noreferrer' className='btn btn-info' style={{ marginLeft: "1rem" }}>
									Live demo
								</a>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
