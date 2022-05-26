//import logo from './logo.svg';
import {
    Routes,
    Route,
} from "react-router-dom";
import './Style/App.scss';
import HeaderComp from './Header'
import MainComp from './Main'
import TestComp from './Test'
import FooterComp from "./Footer";
import ScrollToTop from "react-scroll-to-top";


//https://hairflow.webflow.io/#Testimonial

function App() {
  return (
    <div className="App">
        <ScrollToTop smooth />
        <HeaderComp />
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <HeaderComp books={[{title: "Book 1"}, {title: "Book 2"}]}/>*/}
      {/*</header>*/}



        <Routes>
            <Route path="/" element={<MainComp />} />
            <Route path={`/#section${2}`} element={<MainComp />} />
            <Route path="/test" element={<TestComp />} />
        </Routes>

        <FooterComp />

    </div>
  );
}

export default App;
