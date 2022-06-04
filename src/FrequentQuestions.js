import {isMobile} from "react-device-detect";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import {translate} from "./functions/Languages/translation";
import AccordionDetails from "@mui/material/AccordionDetails";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";

export default function FrequentQuestions(props) {
    const [storeLanguage, setStoreLanguage] = useState(useSelector(state => state.language));
    useEffect(() => {
        setStoreLanguage(props.currentLanguage);
    },[props.currentLanguage])
    return (
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
                // disabled
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
    );
}
