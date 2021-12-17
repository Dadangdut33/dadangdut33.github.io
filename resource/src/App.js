import "bootstrap/dist/css/bootstrap.min.css";
// import $ from "jquery";
// import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./index.css";
import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer";
import MainPage from "./Components/MainPage/MainPage";

function App() {
	return (
		<>
			<Header />
			<main className='App'>
				<MainPage />
			</main>
			<Footer />
		</>
	);
}

export default App;
