import {isBrowser} from 'react-device-detect';
import logo from './logo.svg';
import { BsTelephone } from 'react-icons/bs';


const HeaderComp = () => {
    return (
        <>
            {(isBrowser) && (
                <HeaderSocialMedia />
            )}

            <div>
                <img src={logo} className="App-logo" alt="logo" />
                <div>{(!isBrowser)?("Is Mobile"): ("Is Desktop")}</div>
            </div>
        </>

    )
}

const HeaderSocialMedia = () => {
    return (
        <div className={"social-media-holder"}>
            <div className={"social-media-container"}>
                <div className={"social-media-item-container"} style={{width: "calc(75% - 24px)", justifyContent: "flex-start"}}>
                    <div className={"social-media-item"}>
                        <BsTelephone />
                        <div className={"phoneNumber"}>+90 531 123 45 67</div>
                    </div>

                    <div className={"social-media-item"}>
                        Location here
                    </div>
                </div>

                <div className={"social-media-item-container"} style={{width: "25%", justifyContent: "flex-end"}}>Contact here</div>
            </div>
        </div>
    )
}


export default HeaderComp;
