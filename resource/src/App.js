import "bootstrap/dist/css/bootstrap.min.css";
// import $ from "jquery";
// import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./index.css";
import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer";

function App() {
	return (
		<>
			<Header />
			<main className='App'>
				<h1>Hello World!</h1>
				<h2>My first react App!</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Ipsum a totam libero natus voluptate ducimus soluta, in qui.
					Explicabo repellat eveniet placeat obcaecati autem ducimus
					aliquid illum beatae consequuntur commodi?
				</p>
			</main>
			<Footer />
		</>
	);
}

export default App;
