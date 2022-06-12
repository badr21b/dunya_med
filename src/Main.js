import {AiFillCar} from "react-icons/ai";
import {FaHandHoldingMedical} from "react-icons/fa";
import {AiOutlineStar, AiFillStar} from "react-icons/ai";
import {BsTelephone} from "react-icons/bs";
import {MdOutlinePeopleAlt, MdHotel, MdOutlineHealthAndSafety} from "react-icons/md";
import {BsHandThumbsUp, BsTranslate} from "react-icons/bs";
import {GrCertificate} from "react-icons/gr";
import {RiStethoscopeLine} from "react-icons/ri";
import {GiHealthCapsule} from "react-icons/gi";
import {BiSearchAlt} from "react-icons/bi";
import {isDesktop, isMobile} from "react-device-detect";
import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import { Parallax } from 'react-scroll-parallax';

import ReactWhatsapp from 'react-whatsapp';
import AnchorLink from "react-anchor-link-smooth-scroll";
import {useSelector} from "react-redux";
import {translate} from "./functions/Languages/translation";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {TextareaAutosize} from "@mui/material";

export default function MainComp(props) {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [sex, setSex] = useState("initial");
    const [treatmentType, setTreatmentType] = useState("initial");
    const [healthPrecedentDisease, setHealthPrecedentDisease] = useState("");
    const [message, setMessage] = useState("");
    const [allowSubmit, setAllowSubmit] = useState(false);
    const [whatsappMessage, setWhatsappMessage] = useState({
        nom: "",
        telephone: "",
        email: "",
        age: "",
        sexe: "",
        type_de_traitement: "",
        prodblemes_de_santés_precedents: "",
        message: ""
    });
    const [storeLanguage, setStoreLanguage] = useState(useSelector(state => state.language));

    useEffect(() => {
        setStoreLanguage(props.currentLanguage)
    },[props.currentLanguage])


    const resetContactForm = () => {
        setName("");
        setPhone("");
        setEmail("");
        setAge("");
        setSex("initial");
        setTreatmentType("initial");
        setHealthPrecedentDisease("");
        setMessage("");
        setAllowSubmit(false);
    }

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
                if(0 < age.length){e.target.style.borderColor = "#e5e5e5"} else {e.target.style.borderColor = "red"}
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
            case "healthPrecedentDisease":
                setHealthPrecedentDisease(e.target.value)
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
            0 < age.length &&
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
                prodblemes_de_santés_precedents: healthPrecedentDisease,
                message: message
            })
            setAllowSubmit(true)
        } else{
            setAllowSubmit(false)
        }
    }


    const sendEmail= (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    const treatmentList = [
        {key: "fueSafir", text: "FUE SAPPHİRE", icon: <FaHandHoldingMedical className={"treatmentItemIcon"}/>, link:"/services/"},
        {key: "dhi", text: "DHI", icon: <FaHandHoldingMedical className={"treatmentItemIcon"}/>, link:"/services/"},
        {key: "mesotherapy", text: "Mésothérapie", icon: <FaHandHoldingMedical className={"treatmentItemIcon"}/>, link:"/services/"},
        {key: "prp", text: "PRP", icon: <FaHandHoldingMedical className={"treatmentItemIcon"}/>, link:"/services/"},
        {key: "implant_dentaire", text: translate("dental_implant", storeLanguage), icon: <MdOutlineHealthAndSafety className={"treatmentItemIcon"}/>, link:"/services/"},
        {key: "blanchiment_dentaire", text: translate("blanchiment_dentaire", storeLanguage), icon: <MdOutlineHealthAndSafety className={"treatmentItemIcon"}/>, link:"/services/"  },
    ]

    const ratingText1 = 4.4;
    const ratingText2 = 4.2;
    const ratingText3 = 4.6;

    return (
        <>
            <main id='home' style={{padding: "1rem 0", backgroundColor: "#f6f9f7"}}
                  className={(isDesktop)? ("paragraphPictureContainer"):("paragraphPictureContainerMobile")}
            >
                <div className={"textParagraphContainer"}>
                    <div className={"mainParagraphTitle"}>{translate("ranked_number_one", storeLanguage)}</div>
                    <div className={"mainParagraphSubtitle"}>
                        {translate("slogan_title", storeLanguage)}
                    </div>

                    {(isDesktop) && (
                        <div className={"treatmentListContainer"}>
                            {treatmentList.map(item => {
                                return(
                                    <div key={item.key} className={"treatmentItem"} style={(isDesktop)? ({width: "50%"}):({width: "70%"})}>
                                        {item.icon}
                                        <Link to={item.link} className={"treatmentItemText"}>{item.text}</Link>
                                    </div>
                                )
                            })}
                        </div>
                    )}


                    <div className={"buttonGroupContainer"}>
                        <AnchorLink className={"buttonItem"} href={"#contact"}>
                            {translate("devis_gratuit", storeLanguage)}
                        </AnchorLink>
                        <ReactWhatsapp  className={"buttonItem"} number="+905346314603" message={""}>
                            <BsTelephone style={{marginRight: "9px"}}/>
                            +90 (534) 631 46 03
                        </ReactWhatsapp>
                    </div>
                </div>


                <div className={(isMobile) ? ("imageContainerMobile") :("imageContainer")}>
                    <img style={{width: "100%"}} src={"./main_page_background.png"} alt={""}/>
                </div>
            </main>

            <Parallax className="blocksRow" y={[-10, 10]} tagOuter="figure">
            <div className={(isDesktop)? ("blocksContainer"):("blocksContainerMobile")} style={{marginTop: "-150px"}}>
                <div className={"blocksRow"}>
                    <div className={"blocksWrapper"}>
                        <div className={"blockItem"}>
                            <div className={"blockIcon"}><MdOutlinePeopleAlt size={42}/></div>
                            <div className={"blockTitle"}>{translate("plus_de_traite", storeLanguage)}</div>
                            <div className={"blockParagraph"}>{translate("plus_de_traite_paragraph", storeLanguage)}</div>
                        </div>
                    </div>

                    <div className={"blocksWrapper"}>
                        <div className={"blockItem"}>
                            <div className={"blockIcon"}><GrCertificate size={42}/></div>
                            <div className={"blockTitle"}>{translate("plus_expert")}</div>
                            <div className={"blockParagraph"}>{translate("expert_doctor_paragraph", storeLanguage)}</div>
                        </div>
                    </div>


                    <div className={"blocksWrapper"}>
                        <div className={"blockItem"}>
                            <div className={"blockIcon"}><BsHandThumbsUp size={42}/></div>
                            <div className={"blockTitle"}>{translate("success_rate", storeLanguage)}</div>
                            <div className={"blockParagraph"}>{translate("excellent_success_rate_paragraph", storeLanguage)}</div>
                        </div>
                    </div>
                </div>
            </div>
            </Parallax>

            <div className={(isDesktop)? ("mainBlockContainer"):("mainBlockContainerMobile")}>
                <div className={"aboutContainer"}>
                    <div className={"aboutImageWrapper"}>
                        <img alt={""} src={"./doctor_patient.jpeg"} />
                        <div className={"aboutExperienceWrapper"}>
                            <div className={"experienceNumber"}>8+</div>
                            <div className={"experienceText"}>{translate("experience_years", storeLanguage)}</div>
                        </div>
                    </div>

                    <div className={"aboutTextWrapper"}>
                        <div className={"aboutHeading"}>We’re DunyaMED</div>
                        <div className={"aboutParagraph"}>
                            {translate("we_re_dunya_paragraph", storeLanguage)}
                        </div>
                        <div className={"aboutParagraph"}>
                            {translate("we_re_dunya_paragraph_2", storeLanguage)}
                        </div>
                        <div className={"aboutBtnWrapper"} ><AnchorLink className={"button"} href={"#contact"}>Make an appointment</AnchorLink></div>
                    </div>
                </div>
            </div>


            <>
                <section id='process'  className={(isDesktop)? ("mainContainer"):("mainContainerMobile")}>
                    <h2 style={{marginTop: "100px"}}>{translate('nos_grandes_etapes', storeLanguage)}</h2>
                    <div className={(isDesktop)? ("treatmentBlocksContainer"):("treatmentBlocksContainerMobile")} style={{marginBottom: '100px'}}>


                        <div className={"blockWrapper"}>
                            <div className={"icon"}><BiSearchAlt/></div>
                            <div className={"stepWrapper"}>{translate("step", storeLanguage)}: 1</div>
                            <div className={"title"}>{translate("online_diagnostic", storeLanguage)}</div>
                            <div className={"paragraph"}>Mise en contact rapide et réactive.</div>
                        </div>

                        <div className={"blockWrapper"}>
                            <div className={"icon"}><RiStethoscopeLine/></div>
                            <div className={"stepWrapper"}>{translate("step", storeLanguage)}: 2</div>
                            <div className={"title"}>{translate("consultation_medecin", storeLanguage)}</div>
                            <div className={"paragraph"}>{translate("consultation_medecin_paragraph", storeLanguage)}</div>
                        </div>

                        <div className={"blockWrapper"}>
                            <div className={"icon"}><GiHealthCapsule/></div>
                            <div className={"stepWrapper"}>{translate("step", storeLanguage)}: 3</div>
                            <div className={"title"}>{translate("suivi_post_opp",storeLanguage)}</div>
                            <div className={"paragraph"}>{translate("suivi_post_opp_paragraph", storeLanguage)}</div>
                        </div>
                    </div>

                    <Parallax className="" y={[-10, 10]} tagOuter="figure">
                        <div className={(isDesktop)? ("imageParagraphContainer"):("imageParagraphContainerMobile")}>

                            <Carousel className={"image"}
                                      autoPlay={true}
                                      dynamicHeight={true}
                                      showThumbs={false}
                                      showIndicators={false}
                            >
                                {[...Array(22)].map((_, i) => {
                                    return (
                                        <div key={i}>
                                            <img src={"./hotel_clinique/hotel_clinique_"+ i + ".jpeg"}  alt={i}/>
                                        </div>
                                    )
                                })}

                            </Carousel>

                            <div className={"paragraphContainer"}>
                                <div className={"title"}>{translate("votre_confort", storeLanguage)}</div>
                                <div className={"paragraph"}>
                                    {translate("our_hospital_1",storeLanguage)}
                                </div>
                                <div className={"paragraph"}>
                                    {translate("our_hospital_2",storeLanguage)}
                                </div>
                                <div className={"statisticsContainer"}>
                                    <div className={"statisticElementWrapper"}>
                                        <div className={"number"}>+43</div>
                                        <div className={"text"}>{translate("expert_doctor", storeLanguage)}</div>
                                    </div>
                                    <div className={"statisticElementWrapper"}>
                                        <div className={"number"}>+650</div>
                                        <div className={"text"}>{translate("happy_client",storeLanguage)}</div>
                                    </div>
                                </div>
                                <AnchorLink className={"button"} href={"#contact"}>{translate("devis_gratuit", storeLanguage)}</AnchorLink>
                            </div>
                        </div>

                    </Parallax>

                </section>

                <section id='testimonials' className={(isDesktop)? ("mainContainer"):("mainContainerMobile")}
                         style={{minHeight: "100vh", background: "#379bb3", padding: "32px", display:"flex", flexDirection: "column", flexWrap: "wrap", alignContent: "center", justifyContent: "center", maxWidth: "100%"}}>
                    <h2 style={{marginTop: "100px", color: "#ffffff", fontSize: "42px"}}>{translate("testimonials", storeLanguage)}</h2>
                    <div className={(isDesktop)? ("testimonialsBlocksContainer"):("testimonialsBlocksContainerMobile")}>

                        <div className={"blockWrapper"}>
                            <div className={"icon"}><img alt={""} src={"https://assets.website-files.com/620a7612af716dbffa6c4a61/628374c23aea710d2175ccc2_testimonial-3-min.jpg"}/></div>
                            <div className={"stepWrapper"}>
                                <img src={"https://assets.website-files.com/620a7612af716dbffa6c4a61/6213c81cd79929cf18d25393_quotes_icon.svg"} alt={""} />
                            </div>
                            <div className={"title"}>
                                Depuis l'aéroport jusqu'à mon retour, ils étaient toujours présents, bien viellants et toujours sourillants.
                                Le résultat se voit déjà comme prévu!
                                Merci
                            </div>


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
                                <div className={"name"}>Alexandre Jubier</div>
                                <div className={"job"}>Business Man</div>
                            </div>
                        </div>

                         <div className={"blockWrapper"}>
                            <div className={"icon"}><img alt={""} src={"https://assets.website-files.com/620a7612af716dbffa6c4a61/628374c3f8e3335d14e56c17_testimonial-2-min.jpg"}/></div>
                            <div className={"stepWrapper"}>
                                <img src={"https://assets.website-files.com/620a7612af716dbffa6c4a61/6213c81cd79929cf18d25393_quotes_icon.svg"} alt={""} />
                            </div>
                            <div className={"title"}>
                                Merci beaucoup à toute l'équipe qui était au petits soins.
                                Je conseille fortement cette clinique.
                            </div>


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
                                 <div className={"name"}>Jemy Lunarre</div>
                                 <div className={"job"}>Pompier</div>
                             </div>
                        </div>

                         <div className={"blockWrapper"}>
                            <div className={"icon"}><img alt={""} src={"data:image/jpeg;base64,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"}/></div>
                            <div className={"stepWrapper"}>
                                <img src={"https://assets.website-files.com/620a7612af716dbffa6c4a61/6213c81cd79929cf18d25393_quotes_icon.svg"} alt={""} />
                            </div>
                            <div className={"title"}>
                                Je suis très contante du résultat.
                                Le déroulement était super professionel de A à Z.
                            </div>


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
                                <div className={"name"}>Lucie Dubois</div>
                                <div className={"job"}>Cosultante marketing</div>
                            </div>
                        </div>


                    </div>
                </section>




                <section id='process'  className={(isDesktop)? ("mainContainer"):("mainContainerMobile")}>
                    <Parallax className="blocksRow" y={[-10, 10]} tagOuter="figure">
                    <div className={(isDesktop)? ("treatmentBlocksContainer"):("treatmentBlocksContainerMobile")} style={{marginBottom: '100px'}}>
                        <div className={"blockWrapperSmall"}>
                            <div className={"icon"}><AiFillCar/></div>
                            <div className={"title"}>{translate("transfert", storeLanguage)}</div>
                        </div>
                        <div className={"blockWrapperSmall"}>
                            <div className={"icon"}><MdHotel/></div>
                            <div className={"title"}>{translate("hebergement", storeLanguage)}</div>
                        </div>
                        <div className={"blockWrapperSmall"}>
                            <div className={"icon"}><BsTranslate/></div>
                            <div className={"title"}>{translate("traducteur", storeLanguage)}</div>
                        </div>
                        <div className={"blockWrapperSmall"}>
                            <div className={"icon"}><RiStethoscopeLine/></div>
                            <div className={"title"}>{translate("suivi_medical",storeLanguage)}</div>
                        </div>
                    </div>
                    </Parallax>

                </section>

                <Parallax className="" y={[-10, 10]} tagOuter="figure">
                <section id='results' className={""}
                    style={{minHeight: "600px)", maxWidth: "100%", margin: "0 auto"}}>
                    <div className={(isDesktop)? ("imageParagraphContainer"):("imageParagraphContainerMobile")} style={{minHeight: "600px"}}>
                        <img className={"image"} alt={""} src={"./doctor_result.png"} style={{maxWidth: "600px"}}/>
                        <div className={"paragraphContainer"} style={{maxWidth: "900px"}}>
                            <div className={"title"}>{translate("resultat_prouve", storeLanguage)}</div>
                            <div className={"paragraph"}>
                                {translate("consultation_resultat", storeLanguage)}
                            </div>
                            <div className={"button"} style={{background: "#0f0f0f"}}>
                                <AnchorLink style={{textDecoration:"none", color: "#ffffff"}} href={"#testimonials"}>{translate("see_testimonials", storeLanguage)}</AnchorLink>
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
                        <img className={"image"} alt={""} src={"./doctor.png"} />
                        <div className={"paragraphContainer"}>
                            <div className={"title"}>{translate("contact_us", storeLanguage)}</div>
                            <div className={"paragraph"}>{translate("please_fill_form", storeLanguage)}</div>
                            <div className={"contactFormContainer"}>
                                <div className={"lineWrapper"}>
                                    {/*<div className={"lineElement"}>*/}
                                    {/*    <div className={"icon"}><BsPerson/></div>*/}
                                        <input className={"lineElement"}
                                               value={name}
                                               data-fieldname={"name"}
                                               onChange={handleChange}
                                               placeholder={translate("full_name", storeLanguage)}
                                        />
                                    {/*</div>*/}
                                    <input className={"lineElement"}
                                           value={phone}
                                           type="number"
                                           data-fieldname={"phone"}
                                           onChange={handleChange}
                                           placeholder={translate("phone", storeLanguage)}
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
                                           placeholder={translate("email", storeLanguage)}
                                    />
                                    {/*</div>*/}
                                    <input className={"lineElement"}
                                           value={age}
                                           type="age"
                                           data-fieldname={"age"}
                                           onChange={handleChange}
                                           placeholder={translate("age", storeLanguage)}
                                    />
                                </div>

                                <div className={"lineWrapper"}>
                                    <select defaultValue={sex} onChange={handleChange} data-fieldname={"sex"} className={"lineElement"} style={{height: "45px", width: "45%"}} >
                                        <option value="initial" disabled >{translate("select_sex", storeLanguage)}</option>
                                        <option value={"male"}>{translate("male",storeLanguage)}</option>
                                        <option value={"female"}>{translate("female",storeLanguage)}</option>
                                    </select>
                                    <select defaultValue={treatmentType} placeholder={translate("need_for")} data-fieldname={"treatmentType"} onChange={handleChange} className={"lineElement"} style={{height: "45px", width: "45%"}}>
                                        <option value="initial" disabled >{translate("need_for", storeLanguage)}</option>
                                        <option value="hair">{translate("greffe", storeLanguage)}</option>
                                        <option value="dent">{translate("estetique", storeLanguage)}</option>
                                        <option value="plasticSurgery">{translate("chirurgie_esthetique", storeLanguage)}</option>
                                    </select>
                                </div>


                                <div className={"lineWrapper"}>
                                    <input className={"lineElement"} style={{width: "90%"}}
                                           value={healthPrecedentDisease}
                                           type="healthPrecedentDisease"
                                           data-fieldname={"healthPrecedentDisease"}
                                           onChange={handleChange}
                                           placeholder={translate("health_problem", storeLanguage)}
                                    />
                                </div>

                                <div className={"lineWrapper"}>
                                    <TextareaAutosize
                                        onChange={handleChange}
                                        className={"lineElement"}
                                        maxRows={4}
                                        aria-label="maximum height"
                                        placeholder= {translate("message", storeLanguage)}
                                        defaultValue={message}
                                        data-fieldname={"message"}
                                        style={{ width: "90%", lineHeight: "24px", minHeight: "150px", padding: "12px" }}
                                    />
                                </div>

                            </div>

                            {(allowSubmit) ? (
                                <div className={"sendButtonGroupContainer"}>
                                    <ReactWhatsapp onClick={() => {resetContactForm()}} className={"sendButton"} number="+905346314603" message={`${JSON.stringify(whatsappMessage, undefined, 2).replace(/[{}]/g, '')}`}>{translate("send_by_whatsapp", storeLanguage)}</ReactWhatsapp>
                                    <div  className={"sendButton"}
                                          onClick={() => {
                                              sendEmail("mailto:info@dunyamed.fr");
                                              resetContactForm();
                                          }}
                                          // onClick={() => window.location = 'mailto:info@dunyamed.fr'}>
                                    >
                                        {translate("send_by_email", storeLanguage)}
                                    </div>
                                </div>

                            ) :(
                                <div className={"sendButtonGroupContainer"}>
                                    <div className={"sendButton"} style={{background: "#e2e2e2"}}>{translate("send_by_whatsapp", storeLanguage)}</div>
                                    <div className={"sendButton"} style={{background: "#e2e2e2"}}>{translate("send_by_email", storeLanguage)}</div>
                                </div >
                            )}

                        </div>
                    </div>
                </section>

            </>

        </>

    );
}
