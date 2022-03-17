import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./css/index.css";
import "./css/animation.css";
import { useDeviceSelectors } from "react-device-detect";
import PageOpen from "./Components/Cosmetics/PageOpen";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Profile from "./Components/MainPage/Profile";
import AboutMe from "./Components/MainPage/About";
import Portals from "./Components/MainPage/Portals";
import Contact from "./Components/MainPage/Contact";
import MouseHover from "./Components/Cosmetics/MouseHover";
import RandomDots from "./Components/Cosmetics/RandomDots";

function App() {
	const [selectors] = useDeviceSelectors(window.navigator.userAgent);
	const { isMobile } = selectors;
	return (
		<>
			<PageOpen />
			<RandomDots />
			<MouseHover isMobile={isMobile} />
			<Navbar />
			<main className='App'>
				<Profile />
				<AboutMe />
				<Portals />
				<Contact />
			</main>
		</>
	);
}

export default App;
