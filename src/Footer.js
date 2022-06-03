import AnchorLink from "react-anchor-link-smooth-scroll";
import {isDesktop, isMobile} from "react-device-detect";
import {translate} from "./functions/Languages/translation";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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
                                <a href="https://wa.me/905346314603?text=DuniaMed" rel="noreferrer" className={"icon"} target="_blank">Whatsapp</a>
                            </div>
                        </div>
                        {/*<div className={"itemContainer"}>*/}
                        {/*    <div className={"itemLeft"}>Twitter</div>*/}
                        {/*</div>*/}
                        <div className={"itemContainer"}>
                            <div className={"itemLeft"}>
                                <a href="https://www.instagram.com/duniamed.fr/" rel="noreferrer" className={"icon"} target="_blank">
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
                <div className={"categoryHolder"} style={isMobile ? ({maxWidth: "80%", fontSize: "12px"}):({fontSize: "12px"})}>
                    <Accordion>
                        <AccordionSummary
                            style={{ backgroundColor: "#379bb3"}}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography style={{fontSize: "12px", color:"#fff"}}>{translate("where_who_makes_opp", storeLanguage)}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography style={{fontSize: "13px", color: "#847373"}}>
                                {translate("where_who_makes_opp_answr", storeLanguage)}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            style={{ backgroundColor: "#379bb3"}}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography style={{fontSize: "12px", color:"#fff"}}>{translate("who_can_transplant_hair", storeLanguage)}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography style={{fontSize: "13px", color: "#847373"}}>
                                {translate("who_can_transplant_hair_answr", storeLanguage)}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            style={{ backgroundColor: "#379bb3"}}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography style={{fontSize: "12px", color:"#fff"}}>{translate("what_are_dental_implants", storeLanguage)}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography style={{fontSize: "13px", color: "#847373"}}>
                                {translate("what_are_dental_implants_paragraph", storeLanguage)}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion
                        {/*disabled*/}
                    >
                        <AccordionSummary
                            style={{ backgroundColor: "#379bb3"}}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography style={{fontSize: "12px", color:"#fff"}}>{translate("what_do_with_crooked_or_crowded_teeth", storeLanguage)}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography style={{fontSize: "13px", color: "#847373"}}>
                                {translate("what_do_with_crooked_or_crowded_teeth_paragraph", storeLanguage)}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                </div>
            </div>
            <div className={"blockHolder"} style={{borderTop: "1px solid rgb(82 170 191)"}}>
                <div className={"categoryHolder"} style={{fontSize: "12px"}}>© Dunia Med {new Date().getFullYear()}.</div>
            </div>
        </div>
    )
}

export default FooterComp;
