import {isBrowser} from 'react-device-detect';
import logo from './logo.svg';


const HeaderComp = () => {
    return (
        <>
            <div className={"social-media-holder"}>
                <div className={"social-media-container"}>
                    <div className={"social-media-item-container"}>Social media here</div>
                    <div className={"social-media-item-container"}>Location here</div>
                    <div className={"social-media-item-container"}>Contact here</div>
                </div>
            </div>
            <div>
                <img src={logo} className="App-logo" alt="logo" />
                <div>{(!isBrowser)?("Is Mobile"): ("Is Desktop")}</div>
            </div>
        </>

    )
}

export default HeaderComp;
