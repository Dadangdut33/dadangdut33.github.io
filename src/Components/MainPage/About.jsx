import { useRef, useCallback } from "react";
import ReactTooltip from "react-tooltip";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
export default function About() {
	const ref = useRef();
	const [contentRef, contentInView] = useInView({
		triggerOnce: false,
		rootMargin: "-250px 0px",
	});

	const [contentRef2, contentInView2] = useInView({
		triggerOnce: true,
		rootMargin: "-250px 0px",
	});

	const setRefs = useCallback(
		(node) => {
			// Ref's from useRef needs to have the node assigned to `current`
			ref.current = node;
			// Callback refs, like the one from `useInView`, is a function that takes the node as an argument
			contentRef(node);
			contentRef2(node);
		},
		[contentRef, contentRef2]
	);

	const contentVariants = {
		hidden: {
			opacity: 0,
			height: 0,
			transition: {
				duration: 0.8,
			},
		},
		visible: {
			opacity: 1,
			height: "fit-content",
			transition: {
				duration: 0.8,
			},
		},
	};

	return (
		<section className='d-flex flex-column justify-content-center' id='about-me-section'>
			<div className='m-auto'>
				<h1 className='text-center about-me' style={{ paddingBottom: "30px" }}>
					<span className='anchor' id='about-me'></span>
					<h1 className='display-1'>A Little More About Me</h1>
					<span className={contentInView ? "underline-smooth origin-right show-from-left" : "underline-smooth origin-right"}></span>
				</h1>
				<motion.div className='section-div about-me' ref={setRefs} initial='hidden' animate={contentInView2 ? "visible" : "hidden"} variants={contentVariants}>
					<p className='subtle-text'>
						At first, I have never thought of becoming a programmer because I had a feeling that it's a{" "}
						<strong data-tip data-for='imgPopup-1' className='subtle-link'>
							hard job
						</strong>
						, but then i realize that other stuff are also hard. So, why don't i try to pursue something that i could enjoy and ... here I am.
					</p>
					<p className='subtle-text'>
						I like games, anime, movie, manga, etc. I am very interested in programming, especially in topics related to stuff that I like. I have a passion for learning new things and I
						am always trying to improve my skills.
					</p>
					<p className='subtle-text'>I really hope things that i create can be useful, even if just a little.</p>
				</motion.div>
				<ReactTooltip id='imgPopup-1' className='tooltip-img'>
					<img src='https://c.tenor.com/OB4K11sbmrMAAAAM/spongebob-thinking.gif' alt='thinking-hard-gif' />
				</ReactTooltip>
			</div>
		</section>
	);
}
