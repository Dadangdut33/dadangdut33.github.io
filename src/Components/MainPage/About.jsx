import ReactTooltip from "react-tooltip";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
export default function MainPage() {
	const [contentRef, contentInView] = useInView({
		triggerOnce: false,
		rootMargin: "-300px 0px",
	});

	const contentVariants = {
		hidden: {
			opacity: 0,
			height: 0,
			transition: {
				duration: 0.6,
			},
		},
		visible: {
			opacity: 1,
			height: "fit-content",
			transition: {
				duration: 0.6,
			},
		},
	};

	return (
		<section className='center-flex-column' id='about-me'>
			<div className='center-horizontal-vertical justify wrap-mid'>
				<h1 className='display-1 text-center underline-1' style={{ paddingBottom: "6px" }}>
					A little more about me
				</h1>
				<motion.div className='content-outline' ref={contentRef} initial='hidden' animate={contentInView ? "visible" : "hidden"} variants={contentVariants} style={{ overflow: "hidden" }}>
					<p className='subtle-text'>
						At first, I have never thought of becoming a programmer because I had a feeling that it's a{" "}
						<strong data-tip data-for='imgPopup-1'>
							hard job
						</strong>
						<ReactTooltip id='imgPopup-1' className='tooltip-img'>
							<img src='https://c.tenor.com/OB4K11sbmrMAAAAM/spongebob-thinking.gif' alt='thinking-hard-gif' />
						</ReactTooltip>
						, but then i realize that other stuff are also hard. So, why don't i try to pursue something that i could enjoy and ... here I am.
					</p>
					<p className='subtle-text'>
						I like games, anime, movie, manga, etc. I am very interested in programming, especially in topics related to stuff that I like. I have a passion for learning new things and I am always trying to
						improve my skills.
					</p>
					<p className='subtle-text'>I really hope things that i create can be useful, even if just a little.</p>
				</motion.div>
			</div>
		</section>
	);
}
