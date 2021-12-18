import { useEffect } from "react";
import logo from "./logo.png";
import Pulse from "react-reveal/Jump";
import Fade from "react-reveal/Fade";
import Jump from "react-reveal/Jump";

export default function MainPage() {
	// set document title
	useEffect(() => {
		document.title = "Dadangdut33's Profile";
	}, []);

	return (
		<section className='center-flex-column'>
			<Fade>
				<div
					className='center-horizontal-vertical'
					style={{ paddingBottom: "70px" }}
				>
					<div className='flex-dir-row'>
						<div className='flex-dir-column'>
							<img
								src={logo}
								alt='Logo'
								className='logo-main content center-horizontal'
							/>{" "}
							<div
								className='center-horizontal'
								style={{ paddingTop: "4px" }}
							>
								<a href='https://github.com/Dadangdut33'>
									<i className='bi bi-github pad-small'></i>
								</a>
								<a href='https://www.linkedin.com/in/fauzan-farhan-antoro/'>
									<i className='bi bi-linkedin pad-small'></i>
								</a>
							</div>
						</div>
						<div className='content'>
							<div className='flex-dir-row persist'>
								<h1 style={{ marginRight: "1rem" }}>
									<strong>Hello!</strong>
								</h1>
								<h1 style={{ marginRight: "0.5rem" }}>
									I'm Fauzan
								</h1>
								<h1>
									<Pulse delay={750}>👋</Pulse>
								</h1>
							</div>
							<h2 className='lead'>Full Stack Developer</h2>
							<h4 class='text-muted'>
								I'm currently pursuing my bachelor degree as an
								Informatics Engineering Student at{" "}
								<a
									href='https://www.uinjkt.ac.id/'
									className='subtle-link'
								>
									UIN Jakarta
								</a>
								<br />I like to learn new things and code for
								some side projects on my free time.
							</h4>
						</div>
					</div>
					<Jump delay={3000}>
						<div className='center'>
							<a
								className='btn btn-primary'
								href='#about-me'
								style={{ margin: "0 auto" }}
							>
								Read more <i class='bi bi-arrow-down-short'></i>
							</a>
						</div>
					</Jump>
				</div>
			</Fade>
		</section>
	);
}
