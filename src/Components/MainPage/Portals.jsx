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

	const content_1 = [
		{
			title: "My Blog",
			icon: "bi bi-pen",
			link: "https://dadangdut33.codes",
			link_text: "blog.dadangdut33.codes",
			text: "Place where I share some of my thoughts, ideas, and experiences.",
		},
		{
			title: "Featured Repo: ScreenTranslate",
			icon: "bi bi-star",
			link: "https://github.com/Dadangdut33/Screen-Translate",
			link_text: "Project Repository",
			link2: "https://github.com/Dadangdut33/Screen-Translate/releases/latest",
			link_text2: "Download",
			text: "An Easy to Use OCR/Screen Translator made using Python and Tesseract.",
		},
	];

	const content_2 = [
		{
			title: "Featured Repo: Simple Wallpaper Changer",
			icon: "bi bi-star",
			link: "https://github.com/Dadangdut33/simple-wallpaper-changer",
			link_text: "Project Repository",
			link2: "https://github.com/Dadangdut33/simple-wallpaper-changer/releases/latest",
			link_text2: "Download",
			text: "A wallpaper changer made using electron with simple but useful feature.",
		},
		{
			title: "Featured Repo: Minesweeper-Randomwalk",
			icon: "bi bi-star",
			link: "https://github.com/Dadangdut33/minesweeper-randomwalk",
			link_text: "Project Repository",
			link2: "https://dadangdut33.github.io/minesweeper-randomwalk",
			link_text2: "Live demo",
			text: "A minesweeper game made using React.js and randomwalk algorithm as the randomizer.",
		},
	];

	return (
		<section className='d-flex flex-column justify-content-center' id='portals-section'>
			<div className='m-auto justify'>
				<span className='anchor' id='portals' style={{ marginTop: "-100px" }}></span>
				<h1 className='text-center' ref={contentRef} style={{ paddingBottom: "5px" }}>
					<h1 className='display-1'>Portals</h1>
					<span className={contentInView ? "underline-smooth origin-left show-from-right" : "underline-smooth origin-left"}></span>
				</h1>
				<div className='d-flex flex-column d-lg-flex flex-lg-row justify-content-center text-center'>
					{content_1.map((content, i) => {
						return (
							<motion.div className='col-lg-6 card-wrapper' variants={fadeVar} custom={i} initial={"hidden"} animate={contentInView ? "visible" : "hidden"}>
								<div className='card card-list'>
									<div className='card-body bg-light'>
										<h5 className='card-title'>
											<i className={content.icon}></i> {content.title}
										</h5>
										<p className='card-text'>{content.text}</p>
										<a href={content.link} target={"_blank"} rel='noopener noreferrer' className='btn btn-primary'>
											{content.link_text}
										</a>
										{content.link2 && (
											<a href={content.link2} target={"_blank"} rel='noopener noreferrer' className='btn btn-primary'>
												{content.link_text2}
											</a>
										)}
									</div>
								</div>
							</motion.div>
						);
					})}
				</div>

				<div className='d-flex flex-column d-lg-flex flex-lg-row justify-content-center text-center'>
					{content_2.map((content, i) => {
						return (
							<motion.div className='col-lg-6 card-wrapper' variants={fadeVar} custom={i + 2} initial={"hidden"} animate={contentInView ? "visible" : "hidden"}>
								<div className='card card-list'>
									<div className='card-body bg-light'>
										<h5 className='card-title'>
											<i className={content.icon}></i> {content.title}
										</h5>
										<p className='card-text'>{content.text}</p>
										<a href={content.link} target={"_blank"} rel='noopener noreferrer' className='btn btn-primary'>
											{content.link_text}
										</a>
										{content.link2 && (
											<a href={content.link2} target={"_blank"} rel='noopener noreferrer' className='btn btn-primary'>
												{content.link_text2}
											</a>
										)}
									</div>
								</div>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
