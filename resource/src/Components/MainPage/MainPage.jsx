import { useEffect } from "react";
export default function MainPage() {
	// set document title
	useEffect(() => {
		document.title = "Dadangdut33's Profile";
	}, []);

	return (
		<>
			<h1>Hello World!</h1>
			<h2>My first react App!</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum a
				totam libero natus voluptate ducimus soluta, in qui. Explicabo
				repellat eveniet placeat obcaecati autem ducimus aliquid illum
				beatae consequuntur commodi?
			</p>
		</>
	);
}
