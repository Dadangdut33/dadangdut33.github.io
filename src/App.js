import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./css/index.css";
import "./css/animation.css";
import Header from "./Components/Header/Header.jsx";
import MainPage from "./Components/MainPage/Profile";
import AboutMe from "./Components/MainPage/About";
import Projects from "./Components/MainPage/Projects";
import Contact from "./Components/MainPage/Contact";
import MouseHover from "./Components/Cosmetics/MouseHover";
import RandomDots from "./Components/Cosmetics/RandomDots";
import { BrowserView } from "react-device-detect";

function App() {
	return (
		<>
			<RandomDots />
			<BrowserView>
				<MouseHover />
			</BrowserView>
			<Header />
			<main className='App'>
				<MainPage />
				<AboutMe />
				<Projects />
				<Contact />
			</main>
		</>
	);
}

export default App;
