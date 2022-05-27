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
import {useEffect, useState} from "react";


//https://hairflow.webflow.io/#Testimonial

function App() {

    const [language, setLanguage] = useState('fr');


    useEffect(() => {
        setLanguage(navigator.language || navigator.userLanguage);
    }, []);

    return (
    <div className="App">
        <ScrollToTop smooth />
        <HeaderComp language={language}/>
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <HeaderComp books={[{title: "Book 1"}, {title: "Book 2"}]}/>*/}
      {/*</header>*/}



        <Routes>
            <Route path="/" element={<MainComp  language={language}/>} />
            <Route path={`/#section${2}`} element={<MainComp  language={language}/>} />
            <Route path="/test" element={<TestComp  language={language}/>} />
        </Routes>

        <FooterComp  language={language}/>

    </div>
  );
}

export default App;
