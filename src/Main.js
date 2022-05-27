import {AiFillCar} from "react-icons/ai";
import {FaHandHoldingMedical} from "react-icons/fa";
import {AiOutlineStar, AiFillStar} from "react-icons/ai";
import {BsTelephone} from "react-icons/bs";
import {MdOutlinePeopleAlt, MdHotel} from "react-icons/md";
import {BsHandThumbsUp, BsTranslate} from "react-icons/bs";
import {GrCertificate} from "react-icons/gr";
import {RiStethoscopeLine} from "react-icons/ri";
import {GiHealthCapsule} from "react-icons/gi";
import {BiSearchAlt} from "react-icons/bi";
import {isDesktop, isMobile} from "react-device-detect";
import React, { useState } from 'react';
import { Parallax } from 'react-scroll-parallax';

import ReactWhatsapp from 'react-whatsapp';
import AnchorLink from "react-anchor-link-smooth-scroll";


export default function MainComp() {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [sex, setSex] = useState("initial");
    const [treatmentType, setTreatmentType] = useState("initial");
    const [message, setMessage] = useState("");
    const [allowSubmit, setAllowSubmit] = useState(false);
    const [whatsappMessage, setWhatsappMessage] = useState({
        nom: "",
        telephone: "",
        email: "",
        age: "",
        sexe: "",
        type_de_traitement: "",
        message: ""
    });


    const handleChange = (e) => {
        switch (e.target.dataset.fieldname) {
            case "name":
                setName(e.target.value);
                if(6 < name.length){e.target.style.borderColor = "#e5e5e5"} else {e.target.style.borderColor = "red"}
                break;
            case "phone":
                setPhone(e.target.value)
                if(6 < phone.length){e.target.style.borderColor = "#e5e5e5"} else {e.target.style.borderColor = "red"}
                break;
            case "email":
                setEmail(e.target.value)
                if(!! email.match(/.+@.+/)){e.target.style.borderColor = "#e5e5e5"} else {e.target.style.borderColor = "red"}
                break;
            case "age":
                setAge(e.target.value)
                if(1 < age.length){e.target.style.borderColor = "#e5e5e5"} else {e.target.style.borderColor = "red"}
                break;
            case "sex":
                setSex(e.target.value)
                console.log(sex)
                if("initial" !== e.target.value){e.target.style.borderColor = "#e5e5e5"} else {e.target.style.borderColor = "red"}
                break;
            case "treatmentType":
                setTreatmentType(e.target.value)
                if("initial" !== e.target.value){e.target.style.borderColor = "#e5e5e5"} else {e.target.style.borderColor = "red"}
                break;
            case "message":
                setMessage(e.target.value)
                if(6 < message.length){e.target.style.borderColor = "#e5e5e5"} else {e.target.style.borderColor = "red"}
                break;
            default: return
        }
        setTimeout(() => {
            controlSubmitForm()
        }, 300)
    }
    const controlSubmitForm = () => {
        if (
            6 < name.length &&
            6 < phone.length &&
            1 < age.length &&
            !! email.match(/.+@.+/) &&
            "initial" !== sex &&
            "initial" !== treatmentType &&
            6 < message.length
        ){
            setWhatsappMessage({
                nom: name,
                telephone: phone,
                email: email,
                age: age,
                sexe: sex,
                type_de_traitement: treatmentType,
                message: message
            })
            setAllowSubmit(true)
        } else{
            setAllowSubmit(false)
        }
    }

    const treatmentList = [
        {key: "dandruffTreatment", text: "Dandruff Treatment", icon: <FaHandHoldingMedical className={"treatmentItemIcon"}/>},
        {key: "HairThinning", text: "Hair Thinning", icon: <FaHandHoldingMedical className={"treatmentItemIcon"}/>},
        {key: "RoughHairTreatment", text: "Rough hair treatment", icon: <FaHandHoldingMedical className={"treatmentItemIcon"}/>},
        {key: "Alopecia", text: "Alopecia", icon: <FaHandHoldingMedical className={"treatmentItemIcon"}/>},
        {key: "HairTossTreatment", text: "Hair loss treatment", icon: <FaHandHoldingMedical className={"treatmentItemIcon"}/>},
        {key: "AlopeciaAreata", text: "Alopecia Areata", icon: <FaHandHoldingMedical className={"treatmentItemIcon"}/>},
    ]

    const ratingText1 = 4.4;
    const ratingText2 = 4.2;
    const ratingText3 = 4.6;

    return (
        <>
            <main id='home' style={{ padding: "1rem 0", backgroundColor: "#f6f9f7" }}
                  className={(isDesktop)? ("paragraphPictureContainer"):("paragraphPictureContainerMobile")}
            >
                <div className={"textParagraphContainer"}>
                    <div className={"mainParagraphTitle"}>#1 Ranked Hair Clinic in Turkey</div>
                    <div className={"mainParagraphSubtitle"}>Life isn't perfect but Your hair can be.</div>
                    <div className={"treatmentListContainer"}>
                        {treatmentList.map(item => {
                            return(
                                <div key={item.key} className={"treatmentItem"} style={(isDesktop)? ({width: "50%"}):({width: "70%"})}>
                                    {item.icon}
                                    <div className={"treatmentItemText"}>{item.text}</div>
                                </div>
                            )
                        })}
                    </div>

                    <div className={"buttonGroupContainer"}>
                        <AnchorLink className={"buttonItem"} href={"#contact"}>Obtenez un devis gratuit</AnchorLink>
                        <ReactWhatsapp  className={"buttonItem"} number="+905346314603" message={""}>
                            <BsTelephone style={{marginRight: "9px"}}/>
                            +90 (534) 631 46 03
                        </ReactWhatsapp>
                    </div>
                </div>


                <div className={(isMobile) ? ("imageContainerMobile") :("imageContainer")}>
                    <img style={{width: "100%"}} src={"https://assets.website-files.com/620a7612af716dbffa6c4a61/620cc9eb17d49233903dd591_Hero-image-hair-treatment-min.png"}  alt={""}/>
                </div>
            </main>

            <Parallax className="blocksRow" y={[-20, 20]} tagOuter="figure">
            <div className={(isDesktop)? ("blocksContainer"):("blocksContainerMobile")}>
                <div className={"blocksRow"}>
                    <div className={"blocksWrapper"}>
                        <div className={"blockItem"}>
                            <div className={"blockIcon"}><MdOutlinePeopleAlt size={42}/></div>
                            <div className={"blockTitle"}>8.4K+ Personnes traitées</div>
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
            </Parallax>

            <div className={(isDesktop)? ("mainBlockContainer"):("mainBlockContainerMobile")}>
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
                        <div className={"aboutBtnWrapper"} ><AnchorLink className={"button"} href={"#contact"}>Make an appointment</AnchorLink></div>
                    </div>
                </div>
            </div>


            <>
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
                <section id='process'  className={(isDesktop)? ("mainContainer"):("mainContainerMobile")}>
                    <h2 style={{marginTop: "100px"}}>Our great 3 steps for treatment</h2>
                    <div className={(isDesktop)? ("treatmentBlocksContainer"):("treatmentBlocksContainerMobile")} style={{marginBottom: '100px'}}>
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

                    <Parallax className="" y={[-20, 20]} tagOuter="figure">
                        <div className={(isDesktop)? ("imageParagraphContainer"):("imageParagraphContainerMobile")}>
                            <img className={"image"} alt={""} src={"https://assets.website-files.com/620a7612af716dbffa6c4a61/6214537f681fac1e317a0110_hair-transplant-min.jpg"} />
                            <div className={"paragraphContainer"}>
                                <div className={"title"}>World's most advanced hair transplant system</div>
                                <div className={"paragraph"}>Dunya Med is a modern business theme, that lets you build stunning high performance websites using a fully visual interface. Start with any of the demos below or build one on your own.</div>
                                <div className={"statisticsContainer"}>
                                    <div className={"statisticElementWrapper"}>
                                        <div className={"number"}>+43</div>
                                        <div className={"text"}>Expert Doctor</div>
                                    </div>
                                    <div className={"statisticElementWrapper"}>
                                        <div className={"number"}>+289</div>
                                        <div className={"text"}>Happy Client</div>
                                    </div>
                                </div>
                                <AnchorLink className={"button"} href={"#contact"}>Make an appointment</AnchorLink>
                            </div>
                        </div>

                    </Parallax>

                </section>

                <section id='testimonials' className={(isDesktop)? ("mainContainer"):("mainContainerMobile")}
                         style={{minHeight: "100vh", background: "#379bb3", padding: "32px", display:"flex", flexDirection: "column", flexWrap: "wrap", alignContent: "center", justifyContent: "center", maxWidth: "100%"}}>
                    <h2 style={{marginTop: "100px", color: "#ffffff", fontSize: "42px"}}>Testimonials</h2>
                    <div className={(isDesktop)? ("testimonialsBlocksContainer"):("testimonialsBlocksContainerMobile")}>

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




                <section id='process'  className={(isDesktop)? ("mainContainer"):("mainContainerMobile")}>
                    <div className={(isDesktop)? ("treatmentBlocksContainer"):("treatmentBlocksContainerMobile")} style={{marginBottom: '100px'}}>
                        <div className={"blockWrapperSmall"}>
                            <div className={"icon"}><AiFillCar/></div>
                            <div className={"title"}>Transfert VIP durant tout votre séjour </div>
                        </div>
                        <div className={"blockWrapperSmall"}>
                            <div className={"icon"}><MdHotel/></div>
                            <div className={"title"}>Hébergement dans un hôtel préstigieux</div>
                        </div>
                        <div className={"blockWrapperSmall"}>
                            <div className={"icon"}><BsTranslate/></div>
                            <div className={"title"}>Traducteur disponible durant toute la procédure</div>
                        </div>
                        <div className={"blockWrapperSmall"}>
                            <div className={"icon"}><RiStethoscopeLine/></div>
                            <div className={"title"}>Suivi médical</div>
                        </div>
                    </div>

                </section>

                <Parallax className="" y={[-20, 20]} tagOuter="figure">
                <section id='results' className={""}
                    style={{minHeight: "600px)", maxWidth: "100%", margin: "0 auto"}}>
                    <div className={(isDesktop)? ("imageParagraphContainer"):("imageParagraphContainerMobile")} style={{minHeight: "600px"}}>
                        <img className={"image"} alt={""} src={"https://us.123rf.com/450wm/stokkete/stokkete1609/stokkete160900332/62025951-sourire-m%C3%A9decin-%C3%A0-la-clinique-donnant-une-poign%C3%A9e-de-main-%C3%A0-son-patient-la-sant%C3%A9-et-le-professionnal.jpg"} style={{maxWidth: "600px"}}/>
                        <div className={"paragraphContainer"} style={{maxWidth: "900px"}}>
                            <div className={"title"}>95% Proven results! See the difference</div>
                            <div className={"paragraph"}>30-45 minute consultation with a hair doctor to understand the root cause & the extent of your condition earlier root cause & extent of your condition</div>
                            <div className={"button"} style={{background: "#0f0f0f"}}>
                                <AnchorLink style={{textDecoration:"none", color: "#ffffff"}} href={"#testimonials"}>View story</AnchorLink>
                            </div>
                        </div>
                    </div>
                </section>
                </Parallax>

                <section id='contact'
                         className={(isDesktop)? ("mainContainer"):("mainContainerMobile")}
                         style={{minHeight: "100vh", padding: "32px",

                             position: "relative",
                             display: "flex",
                             flexDirection: "column",
                             justifyContent: "center",
                             alignItems: "center"
                         }}
                >
                    <div className={(isDesktop)? ("imageParagraphContainer"):("imageParagraphContainerMobile")} >
                        <img className={"image"} alt={""} src={"https://browsecat.net/sites/default/files/doctors-wallpapers-105115-962022-5679706.png"} />
                        <div className={"paragraphContainer"}>
                            <div className={"title"}>Contact us</div>
                            <div className={"paragraph"}>Please fill in the details below to schedule an appointment.</div>
                            <div className={"contactFormContainer"}>
                                <div className={"lineWrapper"}>
                                    {/*<div className={"lineElement"}>*/}
                                    {/*    <div className={"icon"}><BsPerson/></div>*/}
                                        <input className={"lineElement"}
                                               value={name}
                                               data-fieldname={"name"}
                                               onChange={handleChange}
                                               placeholder={"Full Name"}
                                        />
                                    {/*</div>*/}
                                    <input className={"lineElement"}
                                           value={phone}
                                           type="number"
                                           data-fieldname={"phone"}
                                           onChange={handleChange}
                                           placeholder={"Phone Number"}
                                    />
                                </div>
                                <div className={"lineWrapper"}>
                                    {/*<div className={"lineElement"}>*/}
                                    {/*    <div className={"icon"}><BsPerson/></div>*/}
                                    <input className={"lineElement"}
                                           value={email}
                                           type="email"
                                           data-fieldname={"email"}
                                           onChange={handleChange}
                                           placeholder={"Email"}
                                    />
                                    {/*</div>*/}
                                    <input className={"lineElement"}
                                           value={age}
                                           type="age"
                                           data-fieldname={"age"}
                                           onChange={handleChange}
                                           placeholder={"Age"}
                                    />
                                </div>

                                {/*<div className={"lineWrapper"}>*/}
                                {/*    <input className={"lineElement"}  style={{width: "90%"}}*/}
                                {/*           value={email}*/}
                                {/*           type="email"*/}
                                {/*           data-fieldname={"email"}*/}
                                {/*           onChange={handleChange}*/}
                                {/*           placeholder={"Email"}*/}
                                {/*    />*/}
                                {/*</div>*/}

                                <div className={"lineWrapper"}>
                                    <select defaultValue={sex} onChange={handleChange} data-fieldname={"sex"} className={"lineElement"} style={{height: "45px", width: "45%"}} >
                                        <option value="initial" disabled >Sélectionnez votre sexe</option>
                                        <option value={"male"}>Male</option>
                                        <option value={"female"}>Female</option>
                                    </select>
                                    <select defaultValue={treatmentType} placeholder={"Need treatment for"} data-fieldname={"treatmentType"} onChange={handleChange} className={"lineElement"} style={{height: "45px", width: "45%"}}>
                                        <option value="initial" disabled >Besoin d'un traitement pour</option>
                                        <option value="hair">Hair Transplant</option>
                                        <option value="dent">Esthétique dentaire</option>
                                        <option value="plasticSurgery">Chirurgie Esthétique</option>
                                        <option value="Mesotherapy">Mésothérapie</option>
                                    </select>
                                </div>



                                <div className={"lineWrapper"}>
                                    <textArea
                                        className={"lineElement"} style={{width: "90%"}}
                                        data-fieldname={"message"}
                                        value={message}
                                        onChange={handleChange}
                                        placeholder="Message"
                                    />
                                </div>

                            </div>

                            {(allowSubmit) ? (
                                <ReactWhatsapp className={"button"} number="+905346314603" message={`${JSON.stringify(whatsappMessage, undefined, 2).replace(/[{}]/g, '')}`}>Send</ReactWhatsapp>
                            ) :(
                                <div className={"button"} style={{background: "#e2e2e2"}}>Send</div>
                            )}

                        </div>
                    </div>
                </section>

            </>

        </>

    );
}
