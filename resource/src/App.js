import "bootstrap/dist/css/bootstrap.min.css";
// import $ from "jquery";
// import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./index.css";
import Header from "./Components/Header/Header.jsx";
import MainPage from "./Components/MainPage/Profile";
import BottomTest from "./Components/MainPage/BottomTest";

function App() {
	return (
		<>
			<Header />
			<main className='App'>
				<MainPage />
				<MainPage />
				<MainPage />
				<MainPage />
				<MainPage />
				<BottomTest />
			</main>
		</>
	);
}

export default App;
