//import logo from './logo.svg';
import {
    Routes,
    Route,
} from "react-router-dom";
import './Style/App.scss';
import HeaderComp from './Header'
import MainComp from './Main'
import TestComp from './Test'

function App() {
  return (
    <div className="App">
        <HeaderComp />
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <HeaderComp books={[{title: "Book 1"}, {title: "Book 2"}]}/>*/}
      {/*</header>*/}

        <div>
            <img src={"https://assets.website-files.com/620a7612af716dbffa6c4a61/620cc9eb17d49233903dd591_Hero-image-hair-treatment-min.png"}  alt={""}/>
        </div>

        <Routes>
            <Route path="/" element={<MainComp />} />
            <Route path="/test" element={<TestComp />} />
        </Routes>

    </div>
  );
}

export default App;
