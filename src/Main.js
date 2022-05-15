import {GoPrimitiveDot} from "react-icons/go";
import {FaHandHoldingMedical} from "react-icons/fa";
import {BsTelephone} from "react-icons/bs";
import {MdOutlinePeopleAlt} from "react-icons/md";
import {BsHandThumbsUp} from "react-icons/bs";
import {GrCertificate} from "react-icons/gr";
import {isMobile} from "react-device-detect";
import { Link } from "react-router-dom";
import AnchorLink from 'react-anchor-link-smooth-scroll'

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
        <>
            <main style={{ padding: "1rem 0" }} className={"paragraphPictureContainer"}>
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


                <div className={(isMobile) ? ("imageContainerMobile") :("imageContainer")}>
                    <img style={{width: "100%"}} src={"https://assets.website-files.com/620a7612af716dbffa6c4a61/620cc9eb17d49233903dd591_Hero-image-hair-treatment-min.png"}  alt={""}/>
                </div>
            </main>

            <div className={"blocksContainer"}>
                <div className={"blocksRow"}>
                    <div className={"blocksWrapper"}>
                        <div className={"blockItem"}>
                            <div className={"blockIcon"}><MdOutlinePeopleAlt size={42}/></div>
                            <div className={"blockTitle"}>8.4 M+ People Treated</div>
                            <div className={"blockParagraph"}>Dunya Med is insanely flexible and amazingly easy to use.</div>
                        </div>
                    </div>

                    <div className={"blocksWrapper"}>
                        <div className={"blockItem"}>
                            <div className={"blockIcon"}><GrCertificate size={42}/></div>
                            <div className={"blockTitle"}>40+ Expert Doctor</div>
                            <div className={"blockParagraph"}>Get started swiftly & easily by importing a demo of your choice.</div>
                        </div>
                    </div>

                    <div className={"blocksWrapper"}>
                        <div className={"blockItem"}>
                            <div className={"blockIcon"}><BsHandThumbsUp size={42}/></div>
                            <div className={"blockTitle"}>95% Success Rate</div>
                            <div className={"blockParagraph"}>Over 30 quality professionally designed pre-built website.</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={"mainBlockContainer"}>
                <div className={"aboutContainer"}>
                    <div className={"aboutImageWrapper"}>
                        <img alt={""} src={"https://assets.website-files.com/620a7612af716dbffa6c4a61/6210b57ab0efeab9f7a50a4b_hair-treatment-about_image-min.jpg"} />

                        <div className={"aboutExperienceWrapper"}>
                            <div className={"experienceNumber"}>8+</div>
                            <div className={"experienceText"}>Years of Experience</div>
                        </div>
                    </div>

                    <div className={"aboutTextWrapper"}>
                        <div className={"aboutHeading"}>We’re Dunya Med</div>
                        <div className={"aboutParagraph"}>Get started swiftly & easily by importing a demo of your choice in a single click. Over 30 high quality professionally designed pre-built website concepts to choose from.</div>
                        <div className={"aboutParagraph"}>Dunya Med is a modern business theme, that lets you build stunning high performance websites using a fully visual interface. Start with any of the demos below or build one on your own. Exponent is a perfect blend of spacious layouts, precise typography.</div>
                        <div className={"aboutBtnWrapper"} >
                            <Link to={'/contact'}>Make Appointment</Link>
                            </div>
                    </div>
                </div>
            </div>


            <div>
                <AnchorLink href='#things'>Things</AnchorLink>
                <AnchorLink href='#stuff'>Stuff</AnchorLink>

                <section id='treatment' style={{height: "1000px", background: "red"}}>
                    <h2>treatments</h2>
                </section>
                <section id='process' style={{height: "1000px", background: "green"}}>
                    <h2>Process</h2>
                </section>
            </div>

        </>

    );
}
