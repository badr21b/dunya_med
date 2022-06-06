import {isBrowser, isMobile} from 'react-device-detect';
import { BsTelephone } from 'react-icons/bs';
// import { IoLocationOutline } from 'react-icons/io5';
// import { GrFacebookOption } from 'react-icons/gr';
import { AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai';
// import { BsTwitter } from 'react-icons/bs';
// import { FaTelegramPlane } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { useLocation } from "react-router-dom";
import Sidebar from "react-sidebar";
import {useEffect, useState} from "react";
import Hamburger from 'hamburger-react';
import AnchorLink from "react-anchor-link-smooth-scroll";
import {useDispatch, useSelector} from "react-redux";
import {translate} from "./functions/Languages/translation";


const HeaderComp = () => {
    const [stickyClass, setStickyClass] = useState('relative');

    useEffect(() => {
        window.addEventListener('scroll', stickNavbar);

        return () => {
            window.removeEventListener('scroll', stickNavbar);
        };
    }, []);


    const stickNavbar = () => {
        if (window !== undefined) {
            let windowHeight = window.scrollY;
            windowHeight > 500 ? setStickyClass('fixed top-0 left-0 z-50') : setStickyClass('relative');
        }
    };

    return (
        <>
            {/*<Sticky>*/}
                {(isBrowser) && (
                    <HeaderSocialMedia stickyClass={stickyClass} />
                )}
                <HeaderMainHeader stickyClass={stickyClass}/>
            {/*</Sticky>*/}

        </>

    )
}



const HeaderMainHeader = () => {
    const location = useLocation();
    const menuList = [
        {key: "home", text: "Home", link: "#home"},
        // {key: "treatment", text: "Treatment", link: "#treatment"},
        {key: "process", text: "Process", link: "#process"},
        {key: "testimonials", text: "Testimonials", link: "#testimonials"},
        {key: "results", text: "Results", link: "#results"},
        {key: "contact", text: "Contact", link: "#contact"},
    ]
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isOpen, setOpen] = useState(false)
    const [storeLanguage, setStoreLanguage] = useState(useSelector(state => state.language));
    const dispatch = useDispatch();

    const handleChange = (e) => {
        console.log(e.target.value);
        // dispatch({type: "SET_LANGUAGE" });
        dispatch({
            type: 'SET_LANGUAGE',
            language: e.target.value,
        })
        setStoreLanguage(e.target.value)
    }

    const onSetSidebarOpen = (open) => {
        setSidebarOpen(open)
        setOpen(open)
    }
    return (
        <div className={"main-menu-holder"}>
            <div className={"main-menu-container"}>
                <div className={isMobile ? ("logo-container-mobile"):("logo-container")}>
                    <img src={"./logoHeader.png"} alt="logo" style={{height:"60px"}}/>
                </div>



                {/* Menu Mobile/desktop version */}
                {(isMobile) && (
                    <div className={"menu-list-holder-mobile"}>
                        <Sidebar
                            sidebar={
                                <>
                                    <div className="logo-container" style={{marginBottom: "32px", height: "15%",display: "flex", flexDirection: "column", flexWrap: "wrap", justifyContent: "center", alignItems: "center"}}>
                                        <img src={"./logoHeader.png"} alt="logo" />
                                    </div>
                                    <div className={"menu-list-container-mobile"} style={{height: "50%"}}>
                                        {menuList.map(menuItem => {
                                            return (
                                            <AnchorLink
                                                onClick={() => {onSetSidebarOpen(false)}}
                                                className={"menu-list-item-mobile"} key={menuItem.key}  href={menuItem.link}
                                                style={(location.pathname === menuItem.link)
                                                    ? ({ color: "orange" })
                                                    : ({ color: "black" })
                                                }
                                            >{menuItem.text}</AnchorLink>
                                            )
                                        } )}
                                    </div>

                                    <SocialMediaListComponent customStyle={{height: "25%", width: "calc(100% - 24px)", display: "flex", flexDirection: (isMobile)?("column"):("row"), justifyContent: "center", alignItems: "center"}}/>
                                </>

                            }
                            pullRight={false}
                            open={sidebarOpen}
                            onSetOpen={onSetSidebarOpen}
                            styles={{ sidebar: { background: "white" } }}
                        >
                            <div style={{position: "absolute", right:"10px", display: "flex"}}>
                                <select
                                    style={{
                                        position: "relative",
                                        display: "flex",
                                        width: "60px",
                                        border: "none",
                                        height: "60px",
                                        fontSize: "32px",
                                        alignItems: "center",
                                        backgroundColor: "#ffffff",
                                        appearance: "none",
                                        justifyContent: "center",
                                        alignContent: "center",
                                        flexDirection: "row",
                                        flexWrap: "nowrap",
                                        textAlign: "center"
                                    }}
                                    className={"languageSelectorMobile"} defaultValue={storeLanguage} onChange={handleChange}>
                                    <option disabled>{translate("language", storeLanguage)}</option>
                                    <option value={"en"}>🇬🇧</option>
                                    <option value={"fr"}>🇫🇷</option>
                                    <option value={"tr"}>🇹🇷</option>
                                </select>
                                <Hamburger style={{position: "absolute  !important", right: "0 !important", marginTop: "4px"}} toggle={() => onSetSidebarOpen(true)} toggled={isOpen} />
                            </div>
                        </Sidebar>
                </div>)}

                {(isBrowser) && (
                    <div className={"menu-list-holder"}>
                        {menuList.map(menuItem => {
                            return (
                                <AnchorLink
                                    className={"menu-list-item"} key={menuItem.key} href={menuItem.link}
                                    style={(location.pathname === menuItem.link)
                                        ? ({ color: "orange" })
                                        : ({ color: "black" })
                                    }
                                >{menuItem.text}</AnchorLink>
                            )
                        } )}

                    </div>
                )}
            </div>
        </div>
    )
}

const SocialMediaListComponent = (customStyle) => {
    const [storeLanguage, setStoreLanguage] = useState(useSelector(state => state.language));
    const dispatch = useDispatch();

    const handleChange = (e) => {
        // console.log(e.target.value);
        // dispatch({type: "SET_LANGUAGE" });
        dispatch({
            type: 'SET_LANGUAGE',
            language: e.target.value,
        })
        setStoreLanguage(e.target.value)
    }
    return(
        <div className={"social-media-item-container"} style= {customStyle.customStyle} >
            <div className={"social-media-item"}>
              <select className={"languageSelector"} defaultValue={storeLanguage} onChange={handleChange}>
                  <option disabled>{translate("language", storeLanguage)}</option>
                  <option value={"en"}>🇬🇧 &nbsp; English</option>
                  <option value={"fr"}>🇫🇷 &nbsp; Français</option>
                  <option value={"tr"}>🇹🇷 &nbsp; Türkçe</option>
              </select>
            </div>

            {/* todo: add href here for each social */}
            <div className={"social-media-item"}>
                {/*<GrFacebookOption className={"icon"}/>*/}

                <a href="https://www.instagram.com/Dunyamed.fr/" rel="noreferrer" className={"icon"} target="_blank">
                    <AiOutlineInstagram className={"icon"} style={(isMobile)? {color: "#379bb3"} : {color: "#ffffff"}}/>
                </a>

                {/*<BsTwitter className={"icon"}/>*/}
                <a href="https://wa.me/905346314603?text=DunyaMed" rel="noreferrer" className={"icon"} target="_blank">
                    <AiOutlineWhatsApp className={"icon"} style={(isMobile)? {color: "#379bb3"} : {color: "#ffffff"}}/>
                </a>
                {/*<FaTelegramPlane className={"icon"} style={(isMobile)? {color: "#379bb3"} : {color: "#ffffff"}}/>*/}
            </div>
        </div>
    )
}

const HeaderSocialMedia = () => {
    const [storePhoneNumber] = useState(useSelector(state => state.phoneNumber));
    return (
        <div className={"social-media-holder"}>
            <div className={"social-media-container"}>
                <div className={"social-media-item-container"} style={{width: "calc(75% - 24px)", justifyContent: "flex-start"}}>
                    <div className={"social-media-item"}>
                        <BsTelephone className={"icon"}/>
                        <div>
                            <a href="tel:00905311234567" className={"phoneHref"}>{storePhoneNumber}</a>
                        </div>
                    </div>

                    <div className={"separator"}>|</div>

                    <div className={"social-media-item"} onClick={() => window.location = 'mailto:info@dunyamed.fr'}>
                        <FiMail className={"icon"}/>
                        <div>info@dunyamed.fr</div>
                    </div>
                </div>

                <SocialMediaListComponent  customStyle={{width: "25% !important", justifyContent: "flex-end !important"}}/>
            </div>
        </div>
    )
}


export default HeaderComp;
