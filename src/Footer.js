import AnchorLink from "react-anchor-link-smooth-scroll";
import {isDesktop} from "react-device-detect";

const FooterComp = () => {
    return (
        <div className={(isDesktop)? ("footer-holder"):("footer-holder-mobile")} >
            <div className={"blockHolder"}>
                <div className={"categoryHolder"}>
                    <div className={"title"}>Information</div>
                    <div className={"itemsList"}>
                        <div className={"itemContainer"}>
                            <div className={"itemLeft"}>Working days</div>
                            <div className={"itemRight"}>8AM - 11PM</div>
                        </div>
                        <div className={"itemContainer"}>
                            <div className={"itemLeft"}>Saturday</div>
                            <div className={"itemRight"}>8AM - 12PM</div>
                        </div>
                        <div className={"itemContainer"}>
                            <div className={"itemLeft"}>Sunday</div>
                            <div className={"itemRight"}>10AM - 11PM</div>
                        </div>
                    </div>
                </div>

                <div className={"categoryHolder"}>
                    <div className={"title"}>Follow us</div>
                    <div className={"itemsList"}>
                        <div className={"itemContainer"}>
                            <div className={"itemLeft"}>Facebook</div>
                        </div>
                        <div className={"itemContainer"}>
                            <div className={"itemLeft"}>Twitter</div>
                        </div>
                        <div className={"itemContainer"}>
                            <div className={"itemLeft"}>Instagram</div>
                        </div>
                    </div>
                </div>

                <div className={"categoryHolder"}>
                    <div className={"title"}>Contact</div>
                    <div className={"itemsList"}>
                        <div className={"itemContainer"}>
                            <div className={"itemLeft"}>
                                <a href="tel:00905311234567" className={"phoneHref"}>
                                    +90 (534) 631 46 03
                                </a>
                            </div>
                        </div>
                        <div className={"itemContainer"}>
                            <div className={"itemLeft"}>
                                <AnchorLink
                                    className={"menu-list-item"} href={"#contact"}
                                >Send us a form</AnchorLink>
                            </div>
                        </div>
                        <div className={"itemContainer"}>
                            <div className={"itemLeft"} onClick={() => window.location = 'mailto:duniamed34@gmail.com'}>
                                Send us an email
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className={"blockHolder"} style={{borderTop: "1px solid rgb(82 170 191)"}}>
                <div className={"categoryHolder"} style={{fontStyle: "12px"}}>© Dunia Med {new Date().getFullYear()}.</div>
            </div>
        </div>
    )
}

export default FooterComp;
