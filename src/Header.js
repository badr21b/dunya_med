import {isBrowser, isMobile} from 'react-device-detect';
import { BsTelephone } from 'react-icons/bs';
import { IoLocationOutline } from 'react-icons/io5';
import { GrFacebookOption } from 'react-icons/gr';
import { AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';
import { FaTelegramPlane } from 'react-icons/fa';
import { useLocation } from "react-router-dom";
import Sidebar from "react-sidebar";
import {useEffect, useState} from "react";
import Hamburger from 'hamburger-react'
import { HashLink as Link } from 'react-router-hash-link';
import AnchorLink from "react-anchor-link-smooth-scroll";
import Sticky from 'react-sticky-el';


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
            <Sticky>
                {(isBrowser) && (
                    <HeaderSocialMedia stickyClass={stickyClass}/>
                )}
                <HeaderMainHeader />
            </Sticky>

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
                                            <Link
                                                className={"menu-list-item-mobile"} key={menuItem.key} to={menuItem.link}
                                                style={(location.pathname === menuItem.link)
                                                    ? ({ color: "orange" })
                                                    : ({ color: "black" })
                                                }
                                            >{menuItem.text}</Link>
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
    return(
        <div className={"social-media-item-container"} style= {customStyle.customStyle} >
            {/* todo: add href here for each social */}
            <div className={"social-media-item"}>
                <GrFacebookOption className={"icon"}/>
                <AiOutlineInstagram className={"icon"}/>
                <BsTwitter className={"icon"}/>
                <a href="https://wa.me/905346314603?text=DuniaMed" className={"icon"} target="_blank">
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

                <SocialMediaListComponent customStyle={{width: "25% !important", justifyContent: "flex-end !important"}}/>
            </div>
        </div>
    )
}


export default HeaderComp;
