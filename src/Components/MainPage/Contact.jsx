import Footer from "../Footer/Footer";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
export default function BottomTest() {
	const [contentRef, contentInView] = useInView({
		triggerOnce: false,
		rootMargin: "-300px 0px",
	});

	const contentVariants = {
		hidden: {
			height: "0px",
			transition: {
				duration: 0.3,
			},
		},
		visible: {
			height: "fit-content",
			transition: {
				duration: 0.9,
			},
		},
	};

	return (
		<section className='flex-dir-column' id='contact-me'>
			<motion.div className='center-horizontal-vertical' ref={contentRef} initial='hidden' animate={contentInView ? "visible" : "hidden"} variants={contentVariants} style={{ overflow: "hidden" }}>
				<h1 className='display-1 text-center'>Contact Me</h1>
				<div className='center-horizontal-vertical justify wrap-mid'>
					<p>
						<i class='bi bi-envelope'></i> <a href='mailto:dadang.contact@gmail.com'>dadang.contact@gmail.com</a>
					</p>
					<p>
						<i className='bi bi-github'></i>{" "}
						<a href='https://github.com/Dadangdut33' target={"_blank"} rel='noreferrer'>
							Dadangdut33
						</a>
					</p>
					<p>
						<i className='bi bi-linkedin'></i>{" "}
						<a href='https://www.linkedin.com/in/fauzan-farhan-antoro/' target={"_blank"} rel='noreferrer'>
							Fauzan Farhan Antoro
						</a>
					</p>
				</div>
			</motion.div>
			<Footer />
		</section>
	);
}
