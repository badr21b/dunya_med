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


import {useSelector, /*useDispatch*/} from "react-redux";
import AboutComp from "./AboutComp";
import WhatsappFloat from "./WhatsappFloat";
import PageNotFound from "./PageNotFound";

//https://hairflow.webflow.io/#Testimonial

function App() {
    const storeLanguage = useSelector(state => state.language);
    const [language] = useState('');


    useEffect(() => {
        document.title = "DunyaMED";
    }, []);

    return (
    <div className="App">
        <ScrollToTop smooth style={{zIndex: "90000000"}} />

        <WhatsappFloat/>


        <HeaderComp currentLanguage={storeLanguage}/>
        <Routes>
            <Route path='*' element={<PageNotFound  currentLanguage={storeLanguage}/>} />

            <Route path="/" element={<MainComp  currentLanguage={storeLanguage}/>} />
            <Route path="/test" element={<TestComp  language={language}/>} />
            <Route path="/services/" element={<AboutComp  language={language}/>} />


        </Routes>
        <FooterComp currentLanguage={storeLanguage}/>
    </div>
  );
}

export default App;
