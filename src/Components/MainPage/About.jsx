import ReactTooltip from "react-tooltip";
export default function MainPage() {
	return (
		<section className='center-flex-column' id='about-me'>
			<div className='center-horizontal-vertical justify wrap-mid'>
				<h1 className='display-1'>A little more about me</h1>
				<h5 className='text-muted'>
					At first, I have never thought of becoming a programmer because I had a feeling that it's a{" "}
					<strong data-tip data-for='imgPopup-1'>
						hard job
					</strong>
					<ReactTooltip id='imgPopup-1' className='tooltip-img'>
						<img src='https://c.tenor.com/OB4K11sbmrMAAAAM/spongebob-thinking.gif' />
					</ReactTooltip>
					, but then i realize that other stuff are also hard so why don't i try to pursue something that i could enjoy and so... here I am.
				</h5>
				<h5 className='text-muted'>I like games, anime, movie, manga, etc. I am very interested in programming, especially in topics related to stuff that I like.</h5>
				<h5 className='text-muted'>I have a passion for learning new things and I am always trying to improve my skills.</h5>
			</div>
		</section>
	);
}
