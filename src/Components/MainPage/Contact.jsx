import { useState, useRef, useCallback } from "react";
import Footer from "../Footer/Footer";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
export default function Contact() {
	const ref = useRef();
	const [contentRef, contentInView] = useInView({
		triggerOnce: false,
		rootMargin: "-270px 0px",
	});

	const [contentRef2, contentInView2] = useInView({
		triggerOnce: true,
		rootMargin: "-270px 0px",
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
			height: 0,
			transition: {
				duration: 1,
			},
		},
		visible: {
			height: "fit-content",
			transition: {
				duration: 1,
			},
		},
	};

	const [hoverLink_1, setHoverLink_1] = useState(false);
	const [hoverLink_2, setHoverLink_2] = useState(false);
	const [hoverLink_3, setHoverLink_3] = useState(false);

	const linkFadeVariants = {
		hidden: {
			opacity: 0,
			transition: {
				duration: 0.15,
			},
		},
		visible: {
			opacity: 1,
			transition: {
				duration: 0.15,
			},
		},
	};

	return (
		<section className='d-flex flex-column justify-content-center' id='contact-me-section'>
			<div className='m-auto'>
				<span className='anchor' id='contact-me'></span>
				<h1 className='text-center'>
					<h1 className='display-1'>Contact Me</h1>
					<span className={contentInView ? "underline-smooth origin-center show-from-middle" : "underline-smooth origin-center"}></span>
				</h1>
				<motion.div className='section-div contact-me' ref={setRefs} initial='hidden' animate={contentInView2 ? "visible" : "hidden"} variants={contentVariants}>
					<div className='m-auto'>
						<p>
							<i className='bi bi-envelope'></i>{" "}
							<a
								href='mailto:contact@dadangdut33.codes'
								target={"_blank"}
								rel='noopener noreferrer'
								className='no-decoration'
								onMouseEnter={() => setHoverLink_1(true)}
								onMouseLeave={() => setHoverLink_1(false)}
							>
								contact@dadangdut33.codes{" "}
								<motion.span variants={linkFadeVariants} initial='hidden' animate={hoverLink_1 ? "visible" : "hidden"}>
									◀
								</motion.span>
							</a>
						</p>
						<p>
							<i className='bi bi-github'></i>{" "}
							<a
								href='https://github.com/Dadangdut33'
								target={"_blank"}
								rel='noopener noreferrer'
								className='no-decoration'
								onMouseEnter={() => setHoverLink_2(true)}
								onMouseLeave={() => setHoverLink_2(false)}
							>
								Dadangdut33{" "}
								<motion.span variants={linkFadeVariants} initial='hidden' animate={hoverLink_2 ? "visible" : "hidden"}>
									◀
								</motion.span>
							</a>
						</p>
						<p>
							<i className='bi bi-linkedin'></i>{" "}
							<a
								href='https://www.linkedin.com/in/fauzan-farhan-antoro/'
								target={"_blank"}
								rel='noopener noreferrer'
								className='no-decoration'
								onMouseEnter={() => setHoverLink_3(true)}
								onMouseLeave={() => setHoverLink_3(false)}
							>
								Fauzan Farhan Antoro{" "}
								<motion.span variants={linkFadeVariants} initial='hidden' animate={hoverLink_3 ? "visible" : "hidden"}>
									◀
								</motion.span>
							</a>
						</p>
					</div>
				</motion.div>
			</div>
			<Footer />
		</section>
	);
}
