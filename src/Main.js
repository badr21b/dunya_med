import {GoPrimitiveDot} from "react-icons/go";
import {FaHandHoldingMedical} from "react-icons/fa";
import {BsTelephone} from "react-icons/bs";
import {MdOutlinePeopleAlt} from "react-icons/md";
import {BsHandThumbsUp} from "react-icons/bs";
import {GrCertificate} from "react-icons/gr";
import {RiStethoscopeLine} from "react-icons/ri";
import {GiHealthCapsule} from "react-icons/gi";
import {BiSearchAlt} from "react-icons/bi";
import {isMobile} from "react-device-detect";
import { Link } from "react-router-dom";

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
            <main id='home' style={{ padding: "1rem 0" }} className={"paragraphPictureContainer"}>
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
                <section id='treatment' className={"mainContainer"} style={{height: "1000px", background: "red"}}>
                    <div className={"headerWrapper"}>
                        <h2>Our treatment options</h2>
                    </div>
                </section>
                <section id='process' className={"mainContainer"} style={{minHeight: "600px",
                    padding: "32px"
                }}>
                    <h2 style={{marginTop: "50px auto"}}>Our great 3 steps for treatment</h2>
                    <div className={"treatmentBlocksContainer"}>
                        <div className={"blockWrapper"}>
                            <div className={"icon"}><RiStethoscopeLine/></div>
                            <div className={"stepWrapper"}>Step: 1</div>
                            <div className={"title"}>Doctor Consultation</div>
                            <div className={"paragraph"}>Dunya Med is insanely flexible and amazingly easy to use Marketing Page WP Theme.</div>
                        </div>

                        <div className={"blockWrapper"}>
                            <div className={"icon"}><BiSearchAlt/></div>
                            <div className={"stepWrapper"}>Step: 2</div>
                            <div className={"title"}>Digital Diagnosis</div>
                            <div className={"paragraph"}>Dunya Med is insanely flexible and amazingly easy to use Marketing Page WP Theme.</div>
                        </div>

                        <div className={"blockWrapper"}>
                            <div className={"icon"}><GiHealthCapsule/></div>
                            <div className={"stepWrapper"}>Step: 2</div>
                            <div className={"title"}>Safe & Holistic Treatment</div>
                            <div className={"paragraph"}>Dunya Med is insanely flexible and amazingly easy to use Marketing Page WP Theme.</div>
                        </div>
                    </div>
                    <div className={"imageParagraphContainer"}>
                        <img className={"image"} alt={""} src={"https://assets.website-files.com/620a7612af716dbffa6c4a61/6214537f681fac1e317a0110_hair-transplant-min.jpg"} />
                        <div className={"paragraphContainer"}>
                            <div className={"title"}>World's most advanced hair transplant system</div>
                            <div className={"paragraph"}>Dunya Med is a modern business theme, that lets you build stunning high performance websites using a fully visual interface. Start with any of the demos below or build one on your own.</div>
                            <div className={"statisticsContainer"}>
                                <div className={"statisticElementWrapper"}>
                                    <div className={"number"}>493</div>
                                    <div className={"text"}>Expert Doctor</div>
                                </div>
                                <div className={"statisticElementWrapper"}>
                                    <div className={"number"}>43</div>
                                    <div className={"text"}>Happy Client</div>
                                </div>
                            </div>
                            <div className={"button"}>Make an Appointment</div>
                        </div>
                    </div>
                </section>

                <section id='team' style={{height: "1000px"}}>
                    <h2>Team</h2>
                </section>
            </div>

        </>

    );
}
