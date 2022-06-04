import AnchorLink from "react-anchor-link-smooth-scroll";
import {isDesktop} from "react-device-detect";
import {translate} from "./functions/Languages/translation";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import FrequentQuestions from "./FrequentQuestions";
// import {AiOutlineInstagram, AiOutlineWhatsApp} from "react-icons/ai";

const FooterComp = (props) => {
    const [storeLanguage, setStoreLanguage] = useState(useSelector(state => state.language));
    useEffect(() => {
        setStoreLanguage(props.currentLanguage);
    },[props.currentLanguage])
    return (
        <div className={(isDesktop)? ("footer-holder"):("footer-holder-mobile")} >
            <div className={"blockHolder"}>
                <div className={"categoryHolder"}>
                    <div className={"title"}>{translate("information", storeLanguage)}</div>
                    <div className={"itemsList"}>
                        <div className={"itemContainer"}>
                            <div className={"itemLeft"}>{translate("working_days", storeLanguage)}</div>
                            <div className={"itemRight"}>8AM - 11PM</div>
                        </div>
                        <div className={"itemContainer"}>
                            <div className={"itemLeft"}>{translate("saturday", storeLanguage)}</div>
                            <div className={"itemRight"}>8AM - 12PM</div>
                        </div>
                        <div className={"itemContainer"}>
                            <div className={"itemLeft"}>{translate("sunday", storeLanguage)}</div>
                            <div className={"itemRight"}>10AM - 11PM</div>
                        </div>
                    </div>
                </div>

                <div className={"categoryHolder"}>
                    <div className={"title"}>{translate("follow_us", storeLanguage)}</div>
                    <div className={"itemsList"}>
                        <div className={"itemContainer"}>
                            <div className={"itemLeft"}>
                                <a href="https://wa.me/905346314603?text=DunyaMed" rel="noreferrer" className={"icon"} target="_blank">Whatsapp</a>
                            </div>
                        </div>
                        {/*<div className={"itemContainer"}>*/}
                        {/*    <div className={"itemLeft"}>Twitter</div>*/}
                        {/*</div>*/}
                        <div className={"itemContainer"}>
                            <div className={"itemLeft"}>
                                <a href="https://www.instagram.com/Dunyamed.fr/" rel="noreferrer" className={"icon"} target="_blank">
                                    Instagram
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"categoryHolder"}>
                    <div className={"title"}>{translate("contact", storeLanguage)}</div>
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
                                >{translate("send_form", storeLanguage)}</AnchorLink>
                            </div>
                        </div>
                        <div className={"itemContainer"}>
                            <div className={"itemLeft"} onClick={() => window.location = 'mailto:duniamed34@gmail.com'}>
                                {translate("send_email", storeLanguage)}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className={"blockHolder"} style={{borderTop: "1px solid rgb(82 170 191)"}}>
                <div className={"categoryHolder"} style={{fontSize: "14px"}}>{translate("questions_frequentes", storeLanguage)}</div>
                <FrequentQuestions/>
            </div>
            <div className={"blockHolder"} style={{borderTop: "1px solid rgb(82 170 191)"}}>
                <div className={"categoryHolder"} style={{fontSize: "12px"}}>© DunyaMED {new Date().getFullYear()}.</div>
            </div>
        </div>
    )
}

export default FooterComp;
