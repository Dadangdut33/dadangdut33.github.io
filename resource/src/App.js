import "bootstrap/dist/css/bootstrap.min.css";
// import $ from "jquery";
// import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./index.css";
import Header from "./Components/Header/Header.jsx";
import MainPage from "./Components/MainPage/Profile";
import BottomTest from "./Components/MainPage/BottomTest";
import MiddlteTest from "./Components/MainPage/MiddleTest";

function App() {
	return (
		<>
			<Header />
			<main className='App'>
				<MainPage />
				<MiddlteTest />
				<MiddlteTest />
				<MiddlteTest />
				<BottomTest />
			</main>
		</>
	);
}

export default App;
