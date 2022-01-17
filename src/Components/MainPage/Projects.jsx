import React from "react";
import { ReactTinyLink } from "react-tiny-link";
export default function MainPage() {
	return (
		<section className='center-flex-column' id='projects'>
			<div className='center-horizontal-vertical'>
				<h1 className='text-center'>Some of my Repositories</h1>
				<div className='flex-dir-row'>
					<ReactTinyLink
						cardSize='large'
						showGraphic={true}
						header='Minesweeper Game With Randomwalk Implementation'
						description='A minesweeper game made using React.js and randomwalk algorithm as the randomizer'
						defaultMedia='https://raw.githubusercontent.com/Dadangdut33/minesweeper-randomwalk/master/public/logo512.png'
						url='https://github.com/Dadangdut33/minesweeper-randomwalk'
					/>
					<span style={{ paddingLeft: "1rem", width: "300px" }}>
						<ReactTinyLink
							cardSize='large'
							showGraphic={true}
							header='Screen Translate - An Easy to Use OCR Translator'
							description='A Screen Translator/OCR Translator made by using Python and Tesseract, the user interface are made using Tkinter. All code written in python.'
							defaultMedia='https://raw.githubusercontent.com/Dadangdut33/Screen-Translate/main/logo.png'
							url='https://github.com/Dadangdut33/Screen-Translate'
						/>
					</span>
					<span style={{ paddingLeft: "1rem" }}>
						<ReactTinyLink
							cardSize='large'
							showGraphic={true}
							header='Osu Extractor'
							description='Extract/copy song, images, videos, and more from installed Osu beatmaps.'
							defaultMedia='https://raw.githubusercontent.com/Dadangdut33/Osu-Extractor/main/logo.png'
							url='https://github.com/Dadangdut33/Osu-Extractor'
						/>
					</span>
				</div>
			</div>
		</section>
	);
}
