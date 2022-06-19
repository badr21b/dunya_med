import {isDesktop} from "react-device-detect";
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {Parallax, ParallaxLayer} from "@react-spring/parallax";
import styles from './Style/styles.module.scss'
import {translate} from "./functions/Languages/translation";
import {HashLink} from "react-router-hash-link";

import {Animated} from "react-animated-css";

const Anchor = (props) => {
  return (
      <div>
          <div>{props.anchorObj.resumeTitle}</div>
          <div>{props.anchorObj.resumeText}</div>
          <div>
              <HashLink smooth className={"menu-list-item"} key={"hair"} to={"#" + props.anchorObj.key}>
                  {props.anchorObj.readMoreButton}
              </HashLink>
          </div>
      </div>
  )
}

export default function AboutComp(props) {

    const [storeLanguage, setStoreLanguage] = useState(useSelector(state => state.language));
    const [categoryObj, setCategoryObj] = useState({
        title: "Title",
        subtitle: "Subtitle",
        paragraph: "La Greffe de cheveux chez DunyaMED a pour objectif d’améliorer votre apparence et votre estime de vous-même en retrouvant votre zone dégarnie avec une garantie de résultats 100% naturels à vie. Vos cheveux existants serviront de zone donneuse à partir de laquelle des follicules seront prélevés pour être implantés dans la zone dégarnie (receveuse) afin de remplacer les cheveux perdus.",
        backgroundUrl: "url(https://turkishmedicalservices.com/wp-content/uploads/2018/11/hair-transplantation.jpg)"
    });


    const [currentTreatment, setCurrentTreatment] = useState("hair");
    const [currentBackgroundImage, setCurrentBackgroundImage] = useState("hair");

    const [hairInfo] = useState({
        key: "hair",
        resumeTitle: "Greffe de Cheveux",
        resumeText: "La perte de cheveux est acceptée comme un problème majeur affectant un pourcentage important de la population. Bien qu’il existe diverses raisons contribuant à la perte de cheveux, la cause la plus importante reste l’alopécie androgénétique qui est une affection héréditaire associée à la sensibilité des androgènes. Alors que les traitements non chirurgicaux disponibles peuvent aider à ralentir la perte de cheveux dans une certaine mesure, des progrès sans fin sur la restauration chirurgicale des cheveux ont transformé la greffe de cheveux en une méthode presque sûre et efficace, impeccable pour les patients affectés.\n" +
            "\n" +
            "La greffe de cheveux est un type de procédure en évolution constante, fournissant des solutions aux patients aux prises avec l’alopécie androgénétique ainsi que la perte de cheveux résultant d’autres sources telles que les traumatismes ou les troubles inflammatoires des cheveux. Les résultats d’apparence naturelle obtenus lors des opérations de greffe de cheveux agissent comme des facteurs encourageants, et chaque jour qui passe, de plus en plus d’hommes et de femmes optent pour la restauration des cheveux.",
        readMoreButton: "En savoir plus"
    });

    const [dentInfo] = useState({
        key: "dent",
        resumeTitle: "Implants Dentaires",
        resumeText: "Si vous envisagez un traitement par implants dentaires en Turquie, nous sommes votre clinique. Près de 20 ans d’expérience nous soutiennent ainsi que notre engagement envers l’innovation technologique, les meilleurs professionnels et une invasion chirurgicale minimale.\n" +
            "\n" +
            "Le manque de pièces dentaires a une solution, et notre équipe vous accompagnera tout au long du processus, depuis le diagnostic, le conseil et le résultat final de vos implants dentaires déjà posés en bouche.",
        readMoreButton: "En savoir plus",
    });

    const [aestheticInfo] = useState({
        key: "aesthetic",
        resumeTitle: "Plastic surgery",
        resumeText: "Face Surgery\n" + "Breast Surgery\n" + "Body Surgery\n" + "Bottox & Filler\n",
        readMoreButton: "En savoir plus",
    });

    //https://clinicexpert.com/en/enlpps/?offer=aesthetic-eng&gclid=Cj0KCQjwzLCVBhD3ARIsAPKYTcRPTcc9EwFk5hR0Zv4OsYUq_v_7B003KliSXZtIlcid5l6_yaavTooaAgmiEALw_wcB

    // const [storeLanguage, setStoreLanguage] = useState(useSelector(state => state.language));
    // useEffect(() => {
    //     setStoreLanguage(props.currentLanguage);
    // },[props.currentLanguage])
    const alignCenter = { display: 'flex', alignItems: 'center' }


    return (
        <>
            <div  className={(isDesktop)? ("blocksContainer"):("blocksContainerMobile")} style={{height: "100vh", background: "transparent", width: "100%"}}>


                <div className={styles.background} />

                <Parallax pages={10}>

                    <ParallaxLayer offset={0} speed={0.5} style={{ ...alignCenter, justifyContent: 'center' }}>
                        <div className={(isDesktop)? ("blocksContainer"):("blocksContainerMobile")} style={{height: "100vh", width: "100%", backgroundImage: currentBackgroundImage, backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>

                            <div className={`${styles.categoryResumeContainer}`}>
                                <Animated animationIn="zoomInUp" animationOut="zoomOutDown" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
                                    <div className={`${styles.categoryResumeAnchorContainer}`}>
                                        {"hair" === currentTreatment && (<Anchor anchorObj={hairInfo}/>)}
                                        {"dent" === currentTreatment && (<Anchor anchorObj={dentInfo}/>)}
                                        {"aesthetic" === currentTreatment && (<Anchor anchorObj={aestheticInfo}/>)}
                                    </div>
                                </Animated>
                            </div>

                            <div className={styles.categoryCardsListContainer}>
                                <div className={`${styles.categoryCardContainer}`} onClick={() => {setCurrentTreatment("hair", setCurrentBackgroundImage("url(https://www.kerimdental.com/images/slide_01.jpg)"))}}>Hair</div>
                                <div className={`${styles.categoryCardContainer}`}  onClick={() => {setCurrentTreatment("dent")}}>Dent</div>
                                <div className={`${styles.categoryCardContainer}`} onClick={() => {setCurrentTreatment("aesthetic")}}>Aesthetics</div>
                            </div>

                        </div>
                    </ParallaxLayer>



                    <ParallaxLayer sticky={{ start: 1, end: 3 }} style={{ ...alignCenter, justifyContent: 'flex-start' }} >
                        <div className={`${styles.card} ${styles.sticky} ${styles.verticalGroup}`}>

                            <div  id='hair' className={"backgroundDetailsContainer"} style={{backgroundImage: categoryObj.backgroundUrl}}>
                                <div>
                                    <p>Greffe de Cheveux</p>
                                    <div>
                                        Transplantation Cheveux
                                        La perte de cheveux est acceptée comme un problème majeur affectant un pourcentage important de la population. Bien qu’il existe diverses raisons contribuant à la perte de cheveux, la cause la plus importante reste l’alopécie androgénétique qui est une affection héréditaire associée à la sensibilité des androgènes. Alors que les traitements non chirurgicaux disponibles peuvent aider à ralentir la perte de cheveux dans une certaine mesure, des progrès sans fin sur la restauration chirurgicale des cheveux ont transformé la greffe de cheveux en une méthode presque sûre et efficace, impeccable pour les patients affectés.

                                        La greffe de cheveux est un type de procédure en évolution constante, fournissant des solutions aux patients aux prises avec l’alopécie androgénétique ainsi que la perte de cheveux résultant d’autres sources telles que les traumatismes ou les troubles inflammatoires des cheveux. Les résultats d’apparence naturelle obtenus lors des opérations de greffe de cheveux agissent comme des facteurs encourageants, et chaque jour qui passe, de plus en plus d’hommes et de femmes optent pour la restauration des cheveux.

                                    </div>
                                </div>
                            </div>
                        </div>
                    </ParallaxLayer>

                            <ParallaxLayer offset={1.8} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
                                <div className={`${styles.card} ${styles.parallax} ${styles.blue_2}`}>
                                    <p>Transplantation Cheveux</p>
                                </div>
                            </ParallaxLayer>
                            <ParallaxLayer offset={2.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
                                <div className={`${styles.card} ${styles.parallax} ${styles.blue}`}>
                                    <p>Neither am I</p>
                                </div>
                            </ParallaxLayer>








                    <ParallaxLayer  id='dent'  sticky={{ start: 4, end: 6 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
                        <div className={`${styles.card} ${styles.sticky}`}>
                            <p>I'm a sticky layer 2 two</p>
                        </div>
                    </ParallaxLayer>
                            <ParallaxLayer offset={4.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
                                <div className={`${styles.card} ${styles.parallax} ${styles.blue}`}>
                                    <p>2 Neither am I</p>
                                </div>
                            </ParallaxLayer>
                            <ParallaxLayer offset={5.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
                                <div className={`${styles.card} ${styles.parallax} ${styles.blue}`}>
                                    <p>2 Neither am I</p>
                                </div>
                            </ParallaxLayer>

                    <ParallaxLayer id='aesthetic'  sticky={{ start: 7, end: 9 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
                        <div className={`${styles.card} ${styles.sticky}`}>
                            <p>I'm a sticky layer 3 three</p>
                        </div>
                    </ParallaxLayer>
                            <ParallaxLayer offset={7.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
                                <div className={`${styles.card} ${styles.parallax} ${styles.blue}`}>
                                    <p>3 Neither am I</p>
                                </div>
                            </ParallaxLayer>
                            <ParallaxLayer offset={8.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
                                <div className={`${styles.card} ${styles.parallax} ${styles.blue}`}>
                                    <p>3 Neither am I</p>
                                </div>
                            </ParallaxLayer>
                </Parallax>

            </div>
        </>

    );
}
