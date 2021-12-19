import "bootstrap/dist/css/bootstrap.min.css";
// import $ from "jquery";
// import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./index.css";
import "./css/animation.css";
import Header from "./Components/Header/Header.jsx";
import MainPage from "./Components/MainPage/Profile";
import AboutMe from "./Components/MainPage/About";
import Skills from "./Components/MainPage/Skills";
import Projects from "./Components/MainPage/Projects";
import Contact from "./Components/MainPage/Contact";
import MainPageMeta from "./Components/Meta/MainPageMeta";

function App() {
	return (
		<>
			<MainPageMeta />
			<Header />
			<main className='App'>
				<MainPage />
				<AboutMe />
				<Skills />
				<Projects />
				<Contact />
			</main>
		</>
	);
}

export default App;
