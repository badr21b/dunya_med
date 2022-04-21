import {isBrowser, isMobile} from 'react-device-detect';
import { BsTelephone } from 'react-icons/bs';
import { IoLocationOutline } from 'react-icons/io5';
import { GrFacebookOption } from 'react-icons/gr';
import { AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';
import { FaTelegramPlane } from 'react-icons/fa';
import { Link } from "react-router-dom";


const HeaderComp = () => {
    return (
        <>
            {(isBrowser) && (
                <HeaderSocialMedia />
            )}

            <HeaderMainHeader />

            {/*<div>*/}
            {/*    <img src={logo} className="App-logo" alt="logo" />*/}
            {/*    <div>{(!isBrowser)?("Is Mobile"): ("Is Desktop")}</div>*/}
            {/*</div>*/}
        </>

    )
}

const HeaderMainHeader = () => {
    const menuList = [
        {key: "home", text: "Home", link: "/"},
        {key: "treatment", text: "Treatment", link: ""},
        {key: "process", text: "Process", link: ""},
        {key: "contact", text: "Contact", link: ""},

        {key: "test", text: "Test", link: "/test"},
    ]
    return (
        <div className={"main-menu-holder"}>
            <div className={"main-menu-container"}>
                <div className="logo-container" >
                    <img src={"./logoHeader.png"}alt="logo" />
                </div>

                {/* Menu Mobile/desktop version */}
                {(isMobile) && (<div>
                    Mobile Menu Here
                </div>)}

                {(isBrowser) && (
                    <div className={"menu-list-holder"}>
                        {menuList.map(menuItem => {
                            return (
                                <Link className={"menu-list-item"} key={menuItem.key} to={menuItem.link}>{menuItem.text}</Link>
                            )
                        } )}
                    </div>
                )}
            </div>
        </div>
    )
}


const HeaderSocialMedia = () => {
    return (
        <div className={"social-media-holder"}>
            <div className={"social-media-container"}>
                <div className={"social-media-item-container"} style={{width: "calc(75% - 24px)", justifyContent: "flex-start"}}>
                    <div className={"social-media-item"}>
                        <BsTelephone className={"icon"}/>
                        <div>
                            <a href="tel:00905311234567" className={"phoneHref"}>
                                +90-531-123-45-67
                            </a>
                        </div>
                    </div>

                    <div className={"separator"}>|</div>

                    <div className={"social-media-item"}>
                        <IoLocationOutline className={"icon"}/>
                        <div>Location here</div>
                    </div>
                </div>

                <div className={"social-media-item-container"} style={{width: "25%", justifyContent: "flex-end"}}>
                    {/* todo: add href here for each social */}
                    <div className={"social-media-item"}>
                        <GrFacebookOption className={"icon"}/>
                        <AiOutlineInstagram className={"icon"}/>
                        <BsTwitter className={"icon"}/>
                        <AiOutlineWhatsApp className={"icon"}/>
                        <FaTelegramPlane className={"icon"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default HeaderComp;
