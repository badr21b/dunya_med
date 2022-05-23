import {GoPrimitiveDot} from "react-icons/go";
import {FaHandHoldingMedical} from "react-icons/fa";
import {AiOutlineStar, AiFillStar} from "react-icons/ai";
import {BsTelephone, BsPerson} from "react-icons/bs";
import {MdOutlinePeopleAlt, MdOutlineMail} from "react-icons/md";
import {BsHandThumbsUp} from "react-icons/bs";
import {GrCertificate} from "react-icons/gr";
import {RiStethoscopeLine} from "react-icons/ri";
import {GiHealthCapsule} from "react-icons/gi";
import {BiSearchAlt} from "react-icons/bi";
import {isMobile} from "react-device-detect";
import { Link } from "react-router-dom";

export default function MainComp() {

    const handleChange = () => {
        console.log("handle submit")
    }

    const treatmentList = [
        {key: "dandruffTreatment", text: "Dandruff Treatment", icon: <FaHandHoldingMedical className={"treatmentItemIcon"}/>},
        {key: "HairThinning", text: "Hair Thinning", icon: <FaHandHoldingMedical className={"treatmentItemIcon"}/>},
        {key: "RoughHairTreatment", text: "Rough hair treatment", icon: <FaHandHoldingMedical className={"treatmentItemIcon"}/>},
        {key: "Alopecia", text: "Alopecia", icon: <FaHandHoldingMedical className={"treatmentItemIcon"}/>},
        {key: "HairTossTreatment", text: "Hair loss treatment", icon: <FaHandHoldingMedical className={"treatmentItemIcon"}/>},
        {key: "AlopeciaAreata", text: "Alopecia Areata", icon: <GoPrimitiveDot className={"treatmentItemIcon"}/>},
    ]

    const ratingText1 = 4.4;
    const ratingText2 = 4.2;
    const ratingText3 = 4.6;

    return (
        <>
            <main id='home' style={{ padding: "1rem 0", backgroundColor: "#f6f9f7" }} className={"paragraphPictureContainer"}>
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
                {/*<section id='treatment' className={"mainContainer"} style={{minHeight: "calc(100vh - 160px)", background: "#379bb31f", padding: "32px"}}>*/}
                {/*    <h2 style={{marginTop: "100px"}}>Our treatment options</h2>*/}
                {/*    <div className={"treatmentBlocksContainer"}>*/}
                {/*        <div className={"blockWrapper"}>*/}
                {/*            <div className={"icon"}><RiStethoscopeLine/></div>*/}
                {/*            <div className={"stepWrapper"}>Step: 1</div>*/}
                {/*            <div className={"title"}>Doctor Consultation</div>*/}
                {/*            <div className={"paragraph"}>Dunya Med is insanely flexible and amazingly easy to use Marketing Page WP Theme.</div>*/}
                {/*        </div>*/}

                {/*        <div className={"blockWrapper"}>*/}
                {/*            <div className={"icon"}><BiSearchAlt/></div>*/}
                {/*            <div className={"stepWrapper"}>Step: 2</div>*/}
                {/*            <div className={"title"}>Digital Diagnosis</div>*/}
                {/*            <div className={"paragraph"}>Dunya Med is insanely flexible and amazingly easy to use Marketing Page WP Theme.</div>*/}
                {/*        </div>*/}

                {/*        <div className={"blockWrapper"}>*/}
                {/*            <div className={"icon"}><GiHealthCapsule/></div>*/}
                {/*            <div className={"stepWrapper"}>Step: 2</div>*/}
                {/*            <div className={"title"}>Safe & Holistic Treatment</div>*/}
                {/*            <div className={"paragraph"}>Dunya Med is insanely flexible and amazingly easy to use Marketing Page WP Theme.</div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</section>*/}
                <section id='process' className={"mainContainer"} style={{minHeight: "calc(100vh - 160px)", padding: "32px"}}>
                    <h2 style={{marginTop: "100px"}}>Our great 3 steps for treatment</h2>
                    <div className={"treatmentBlocksContainer"} style={{marginBottom: '100px'}}>
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

                <section id='testimonials' className={"mainContainer"}
                         style={{minHeight: "calc(100vh - 160px)", background: "#379bb3", padding: "32px", display:"flex", flexDirection: "column", flexWrap: "wrap", alignContent: "center", justifyContent: "center", maxWidth: "100%"}}>
                    <h2 style={{marginTop: "100px", color: "#ffffff", fontSize: "42px"}}>Testimonials</h2>
                    <div className={"testimonialsBlocksContainer"}>

                        <div className={"blockWrapper"}>
                            <div className={"icon"}><img alt={""} src={"https://assets.website-files.com/620a7612af716dbffa6c4a61/628374c23aea710d2175ccc2_testimonial-3-min.jpg"}/></div>
                            <div className={"stepWrapper"}>
                                <img src={"https://assets.website-files.com/620a7612af716dbffa6c4a61/6213c81cd79929cf18d25393_quotes_icon.svg"} alt={""} />
                            </div>
                            <div className={"title"}>Minutes consultation with a hair doctor to understand the root cause & extent of your condition oleo hobe</div>


                            <div className={"testimonial-rating-wrapper"}>
                                <div className={"rating-text"}>{ratingText1}</div>
                                <div className={"rating-star-wrapper"}>
                                    <div>{(1 <= ratingText1) ? <AiFillStar color="#dfa245"/> : <AiOutlineStar/>}</div>
                                    <div>{(2 <= ratingText1) ? <AiFillStar color="#dfa245"/> : <AiOutlineStar/>}</div>
                                    <div>{(3 <= ratingText1) ? <AiFillStar color="#dfa245"/> : <AiOutlineStar/>}</div>
                                    <div>{(4 <= ratingText1) ? <AiFillStar color="#dfa245"/> : <AiOutlineStar/>}</div>
                                    <div>{(5 <= ratingText1) ? <AiFillStar color="#dfa245"/> : <AiOutlineStar/>}</div>
                                </div>
                            </div>
                            <div className={"nameJobContainer"}>
                                <div className={"name"}>Darlene Robertson</div>
                                <div className={"job"}>Business Man</div>
                            </div>
                        </div>

                         <div className={"blockWrapper"}>
                            <div className={"icon"}><img alt={""} src={"https://assets.website-files.com/620a7612af716dbffa6c4a61/628374c3f8e3335d14e56c17_testimonial-2-min.jpg"}/></div>
                            <div className={"stepWrapper"}>
                                <img src={"https://assets.website-files.com/620a7612af716dbffa6c4a61/6213c81cd79929cf18d25393_quotes_icon.svg"} alt={""} />
                            </div>
                            <div className={"title"}>Minutes consultation with a hair doctor to understand the root cause & extent of your condition oleo hobe</div>


                            <div className={"testimonial-rating-wrapper"}>
                                <div className={"rating-text"}>{ratingText2}</div>
                                <div className={"rating-star-wrapper"}>
                                    <div>{(1 <= ratingText2) ? <AiFillStar color="#dfa245"/> : <AiOutlineStar/>}</div>
                                    <div>{(2 <= ratingText2) ? <AiFillStar color="#dfa245"/> : <AiOutlineStar/>}</div>
                                    <div>{(3 <= ratingText2) ? <AiFillStar color="#dfa245"/> : <AiOutlineStar/>}</div>
                                    <div>{(4 <= ratingText2) ? <AiFillStar color="#dfa245"/> : <AiOutlineStar/>}</div>
                                    <div>{(5 <= ratingText2) ? <AiFillStar color="#dfa245"/> : <AiOutlineStar/>}</div>
                                </div>
                            </div>
                             <div className={"nameJobContainer"}>
                                 <div className={"name"}>Darlene Robertson</div>
                                 <div className={"job"}>Business Man</div>
                             </div>
                        </div>

                         <div className={"blockWrapper"}>
                            <div className={"icon"}><img alt={""} src={"https://assets.website-files.com/620a7612af716dbffa6c4a61/628374c23485265ccc4b7bbd_testimonial-1-min.jpg"}/></div>
                            <div className={"stepWrapper"}>
                                <img src={"https://assets.website-files.com/620a7612af716dbffa6c4a61/6213c81cd79929cf18d25393_quotes_icon.svg"} alt={""} />
                            </div>
                            <div className={"title"}>Minutes consultation with a hair doctor to understand the root cause & extent of your condition oleo hobe</div>


                            <div className={"testimonial-rating-wrapper"}>
                                <div className={"rating-text"}>{ratingText3}</div>
                                <div className={"rating-star-wrapper"}>
                                    <div>{(1 <= ratingText3) ? <AiFillStar color="#dfa245"/> : <AiOutlineStar/>}</div>
                                    <div>{(2 <= ratingText3) ? <AiFillStar color="#dfa245"/> : <AiOutlineStar/>}</div>
                                    <div>{(3 <= ratingText3) ? <AiFillStar color="#dfa245"/> : <AiOutlineStar/>}</div>
                                    <div>{(4 <= ratingText3) ? <AiFillStar color="#dfa245"/> : <AiOutlineStar/>}</div>
                                    <div>{(5 <= ratingText3) ? <AiFillStar color="#dfa245"/> : <AiOutlineStar/>}</div>
                                </div>
                            </div>
                            <div className={"nameJobContainer"}>
                                <div className={"name"}>Darlene Robertson</div>
                                <div className={"job"}>Business Man</div>
                            </div>
                        </div>


                    </div>
                </section>



                <section id='results' className={""}
                    style={{minHeight: "600px)", maxWidth: "100%", margin: "0 auto"}}>
                    <div className={"imageParagraphContainer"} style={{minHeight: "600px"}}>
                        <img className={"image"} alt={""} src={"https://us.123rf.com/450wm/stokkete/stokkete1609/stokkete160900332/62025951-sourire-m%C3%A9decin-%C3%A0-la-clinique-donnant-une-poign%C3%A9e-de-main-%C3%A0-son-patient-la-sant%C3%A9-et-le-professionnal.jpg"} style={{maxWidth: "600px"}}/>
                        <div className={"paragraphContainer"} style={{maxWidth: "900px"}}>
                            <div className={"title"}>95% Proven results! See the difference</div>
                            <div className={"paragraph"}>30-45 minute consultation with a hair doctor to understand the root cause & the extent of your condition earlier root cause & extent of your condition</div>
                            <div className={"button"} style={{background: "#0f0f0f"}}>View story</div>
                        </div>
                    </div>
                </section>

                <section id='process' className={"mainContainer"} style={{minHeight: "calc(100vh - 160px)", padding: "32px"}}>
                    <div className={"imageParagraphContainer"}>
                        <img className={"image"} alt={""} src={"https://browsecat.net/sites/default/files/doctors-wallpapers-105115-962022-5679706.png"} />
                        <div className={"paragraphContainer"}>
                            <div className={"title"}>Contact us</div>
                            <div className={"paragraph"}>Please fill in the details below to schedule an appointment.</div>
                            <div className={"contactFormContainer"}>
                                <div className={"lineWrapper"}>
                                    {/*<div className={"lineElement"}>*/}
                                    {/*    <div className={"icon"}><BsPerson/></div>*/}
                                        <input className={"lineElement"}
                                            // value={value}
                                               placeholder={"Full Name"}
                                        />
                                    {/*</div>*/}
                                    <input className={"lineElement"}
                                        // value={value}
                                           placeholder={"Phone Number"}
                                    />
                                </div>

                                <div className={"lineWrapper"}>
                                    <input className={"lineElement"}  style={{width: "90%"}}
                                        // value={value}
                                           placeholder={"Email"}
                                    />
                                </div>

                                <div className={"lineWrapper"}>
                                    <select value={"Sex"} className={"lineElement"} style={{height: "45px", width: "45%"}}>
                                        <option value="A">Male</option>
                                        <option value="B">Female</option>
                                    </select>
                                    <select value={"Need treatment for"} className={"lineElement"} style={{height: "45px", width: "45%"}}>
                                        <option value="A">Male</option>
                                        <option value="B">Female</option>
                                    </select>
                                </div>



                                <div className={"lineWrapper"}>
                                    <textArea
                                        className={"lineElement"} style={{width: "90%"}}
                                    // value={value}
                                    placeholder="Message"
                                    />
                                </div>

                            </div>
                            <div className={"button"}>Send</div>
                        </div>
                    </div>
                </section>

            </div>

        </>

    );
}
