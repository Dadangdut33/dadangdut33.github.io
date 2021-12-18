import { useEffect } from "react";
export default function ContactMe() {
	useEffect(() => {
		document.title = "Dadangdut33's Profile | Contact";
	}, []);

	return (
		<div className='container-fluid'>
			<div className='row'>
				<div className='col-12'>
					<h1>Contact Me</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Ipsum a totam libero natus voluptate ducimus soluta, in
						qui. Explicabo repellat eveniet placeat obcaecati autem
						ducimus aliquid illum beatae consequuntur commodi?
					</p>
				</div>
			</div>
		</div>
	);
}
