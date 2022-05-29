import {isBrowser, isMobile} from 'react-device-detect';
import { BsTelephone } from 'react-icons/bs';
// import { IoLocationOutline } from 'react-icons/io5';
// import { GrFacebookOption } from 'react-icons/gr';
import { AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai';
// import { BsTwitter } from 'react-icons/bs';
import { FaTelegramPlane } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { useLocation } from "react-router-dom";
import Sidebar from "react-sidebar";
import {useEffect, useState} from "react";
import Hamburger from 'hamburger-react'
import AnchorLink from "react-anchor-link-smooth-scroll";
import {useDispatch, useSelector} from "react-redux";


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


    const onSetSidebarOpen = (open) => {
        setSidebarOpen(open)
        setOpen(open)
    }
    return (
        <div className={"main-menu-holder"}>
            <div className={"main-menu-container"}>
                <div className="logo-container" style={{width: "100px"}}>
                    <img src={"./logoHeader.png"} alt="logo" style={{height:"50px"}}/>
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

                                <SocialMediaListComponent customStyle={{height: "25%", width: "calc(100% - 24px)", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}/>

                            </>

                        }
                        pullRight={false}
                        open={sidebarOpen}
                        onSetOpen={onSetSidebarOpen}
                        styles={{ sidebar: { background: "white" } }}
                    >
                        <div style={{position: "absolute", right:"10px"}}>
                            <Hamburger style={{position: "absolute  !important", right: "0 !important"}} toggle={() => onSetSidebarOpen(true)} toggled={isOpen} />
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
        console.log(e.target.value);
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
                  <option disabled>Language</option>
                  <option value={"en"}>🇬🇧 English</option>
                  <option value={"fr"}>🇫🇷 Français</option>
                  <option value={"tr"}>🇹🇷 Türkçe</option>
              </select>
            </div>

            {/* todo: add href here for each social */}
            <div className={"social-media-item"}>
                {/*<GrFacebookOption className={"icon"}/>*/}
                <AiOutlineInstagram className={"icon"}/>
                {/*<BsTwitter className={"icon"}/>*/}
                <a href="https://wa.me/905346314603?text=DuniaMed" rel="noreferrer" className={"icon"} target="_blank">
                    <AiOutlineWhatsApp className={"icon"}/>
                </a>
                <FaTelegramPlane className={"icon"}/>
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
                                +90 (534) 631 46 03
                            </a>
                        </div>
                    </div>

                    <div className={"separator"}>|</div>

                    <div className={"social-media-item"} onClick={() => window.location = 'mailto:duniamed34@gmail.com'}>
                        <FiMail className={"icon"}/>
                        <div>duniamed34@gmail.com</div>
                    </div>
                </div>

                <SocialMediaListComponent  customStyle={{width: "25% !important", justifyContent: "flex-end !important"}}/>
            </div>
        </div>
    )
}


export default HeaderComp;
