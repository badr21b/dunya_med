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
import { useState} from "react";

import {useSelector, /*useDispatch*/} from "react-redux";

//https://hairflow.webflow.io/#Testimonial

function App() {
    const storeLanguage = useSelector(state => state.language);
    const [language, setLanguage] = useState('');


    return (
    <div className="App">
        <ScrollToTop smooth />
        <HeaderComp language={language} setLanguage={setLanguage}/>
        <Routes>
            <Route path="/" element={<MainComp  currentLanguage={storeLanguage}/>} />
            <Route path={`/#section${2}`} element={<MainComp  language={language}/>} />
            <Route path="/test" element={<TestComp  language={language}/>} />
        </Routes>
        <FooterComp  language={language}/>
    </div>
  );
}

export default App;
