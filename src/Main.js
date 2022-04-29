import {GoPrimitiveDot} from "react-icons/go";
import {FaHandHoldingMedical} from "react-icons/fa";
import {BsTelephone} from "react-icons/bs";

export default function MainComp() {
    const treatmentList = [
        {key: "dandruffTreatment", text: "Dandruff Treatment", icon: <FaHandHoldingMedical className={"treatmentItemIcon"}/>},
        {key: "HairThinning", text: "Hair Thinning", icon: <FaHandHoldingMedical className={"treatmentItemIcon"}/>},
        {key: "RoughHairTreatment", text: "Rough hair treatment", icon: <FaHandHoldingMedical className={"treatmentItemIcon"}/>},
        {key: "Alopecia", text: "Alopecia", icon: <FaHandHoldingMedical className={"treatmentItemIcon"}/>},
        {key: "HairTossTreatment", text: "Hair loss treatment", icon: <FaHandHoldingMedical className={"treatmentItemIcon"}/>},
        {key: "AlopeciaAreata", text: "Alopecia Areata", icon: <GoPrimitiveDot className={"treatmentItemIcon"}/>},
    ]
    return (
        <main style={{ padding: "1rem 0" }}>
            <div className={"textParagraphContainer"}>
                <div className={"mainParagraphTitle"}>#1 Ranked Hair Clinic in Turkey</div>
                <div className={"mainParagraphSubtitle"}>Life isn't perfect but Your hair can be.</div>
                <div className={"treatmentListContainer"}>
                    {treatmentList.map(item => {
                      return(
                          <div key={item.key} className={"treatmentItem"}>
                              {item.icon}
                              <div className={"treatmentItemText"}>{item.text}</div>
                          </div>
                      )
                    })}
                </div>

                <div className={"buttonGroupContainer"}>
                    <div className={"buttonItem"}>Make an appointment</div>
                    <div className={"buttonItem"}>
                        <BsTelephone style={{marginRight: "9px"}}/>
                        +90 (123) 145-6789
                    </div>
                </div>
            </div>
            <img style={{width: "calc(35% + 36px)"}} src={"https://assets.website-files.com/620a7612af716dbffa6c4a61/620cc9eb17d49233903dd591_Hero-image-hair-treatment-min.png"}  alt={""}/>
        </main>
    );
}
