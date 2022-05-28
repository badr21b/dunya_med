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
import {useState} from "react";

//import {useSelector, useDispatch} from "react-redux";

//https://hairflow.webflow.io/#Testimonial

function App() {

    //const counter = useSelector(state => state.counter);
    //const storeLanguage = useSelector(state => state.language);
    //const dispatch = useDispatch();

    const [language, setLanguage] = useState('');


    // useEffect(() => {
    //     let tempLng = ""
    //     if(navigator.language || navigator.userLanguage.includes("en")){
    //         tempLng = "en"
    //     } else if (navigator.language || navigator.userLanguage.includes("fr")) {
    //         tempLng = "fr"
    //     } else if (navigator.language || navigator.userLanguage.includes("tr")){
    //         tempLng = "tr"
    //     } else {
    //         tempLng = "fr"
    //     }
    //     setLanguage(tempLng);
    // }, []);

    return (
    <div className="App">
        <ScrollToTop smooth />


        {/*<div>*/}
        {/*    <h1>language : {storeLanguage}</h1>*/}

        {/*    <h1>counter : {counter}</h1>*/}
        {/*    <button onClick={() => dispatch({type: "INCREMENT" })}> Increment </button>*/}
        {/*</div>*/}

        <HeaderComp language={language} setLanguage={setLanguage}/>
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
