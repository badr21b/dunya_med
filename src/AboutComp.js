import {isDesktop} from "react-device-detect";
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {Parallax, ParallaxLayer} from "@react-spring/parallax";
import styles from './Style/styles.module.scss'
import {translate} from "./functions/Languages/translation";
import {HashLink} from "react-router-hash-link";


export default function AboutComp(props) {

    const [storeLanguage, setStoreLanguage] = useState(useSelector(state => state.language));
    const [categoryObj, setCategoryObj] = useState({
        title: "Title",
        subtitle: "Subtitle",
        paragraph: "La Greffe de cheveux chez DunyaMED a pour objectif d’améliorer votre apparence et votre estime de vous-même en retrouvant votre zone dégarnie avec une garantie de résultats 100% naturels à vie. Vos cheveux existants serviront de zone donneuse à partir de laquelle des follicules seront prélevés pour être implantés dans la zone dégarnie (receveuse) afin de remplacer les cheveux perdus.",
        backgroundUrl: "url(https://turkishmedicalservices.com/wp-content/uploads/2018/11/hair-transplantation.jpg)"
    });


    const [treatmentsList, setTreatmentsList] = useState([
        {
            key: "hair", text:  translate("hair_transplant", storeLanguage), link: "/#hair",
            subcategory: [
                {key: "", text: "", }
            ]
        },
        {key: "dent", text:  translate("dent_care", storeLanguage), link: "/#dent"},
        {key: "aesthetic", text:  translate("aesthetic", storeLanguage), link: "/#aesthetic"},
    ]);

    // const [storeLanguage, setStoreLanguage] = useState(useSelector(state => state.language));
    // useEffect(() => {
    //     setStoreLanguage(props.currentLanguage);
    // },[props.currentLanguage])
    const alignCenter = { display: 'flex', alignItems: 'center' }


    return (
        <>
            <div  className={(isDesktop)? ("blocksContainer"):("blocksContainerMobile")} style={{height: "100vh", background: "transparent", width: "100%"}}>


                <div className={styles.background} />

                <Parallax pages={treatmentsList.length * 2}>

                    <ParallaxLayer offset={0} speed={0.5} style={{ ...alignCenter, justifyContent: 'center' }}>
                        {/*<p className={styles.scrollText}>Scroll down</p>*/}
                        <div className={(isDesktop)? ("blocksContainer"):("blocksContainerMobile")} style={{height: "100vh", width: "100%"}}>
                            {/*<div className={"backgroundDetailsContainer"}/>*/}
                            <HashLink smooth className={"menu-list-item"} key={"hair"} to={"#hair"}> Hair anchor</HashLink>
                            <HashLink smooth className={"menu-list-item"} key={"hair"} to={"#dent"}> Dent anchor</HashLink>
                        </div>
                    </ParallaxLayer>

                    {/*{treatmentsList.map((category, key) => {*/}
                    {/*    return (*/}
                    {/*       <>*/}
                    {/*           <ParallaxLayer sticky={{ start: 1, end: 3 }} style={{ ...alignCenter, justifyContent: 'flex-start' }} >*/}
                    {/*               <div className={`${styles.card} ${styles.sticky} ${styles.verticalGroup}`}>*/}

                    {/*                   <div className={"backgroundDetailsContainer"} style={{backgroundImage: categoryObj.backgroundUrl}}>*/}
                    {/*                       <div>*/}
                    {/*                           <p>Greffe de Cheveux</p>*/}
                    {/*                           <div>*/}
                    {/*                               Transplantation Cheveux*/}
                    {/*                               La perte de cheveux est acceptée comme un problème majeur affectant un pourcentage important de la population. Bien qu’il existe diverses raisons contribuant à la perte de cheveux, la cause la plus importante reste l’alopécie androgénétique qui est une affection héréditaire associée à la sensibilité des androgènes. Alors que les traitements non chirurgicaux disponibles peuvent aider à ralentir la perte de cheveux dans une certaine mesure, des progrès sans fin sur la restauration chirurgicale des cheveux ont transformé la greffe de cheveux en une méthode presque sûre et efficace, impeccable pour les patients affectés.*/}

                    {/*                               La greffe de cheveux est un type de procédure en évolution constante, fournissant des solutions aux patients aux prises avec l’alopécie androgénétique ainsi que la perte de cheveux résultant d’autres sources telles que les traumatismes ou les troubles inflammatoires des cheveux. Les résultats d’apparence naturelle obtenus lors des opérations de greffe de cheveux agissent comme des facteurs encourageants, et chaque jour qui passe, de plus en plus d’hommes et de femmes optent pour la restauration des cheveux.*/}

                    {/*                           </div>*/}
                    {/*                       </div>*/}
                    {/*                   </div>*/}
                    {/*               </div>*/}
                    {/*           </ParallaxLayer>*/}

                    {/*           <ParallaxLayer offset={1.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>*/}
                    {/*               <div className={`${styles.card} ${styles.parallax} ${styles.blue_2}`}>*/}
                    {/*                   <p>Transplantation Cheveux</p>*/}
                    {/*               </div>*/}
                    {/*           </ParallaxLayer>*/}

                    {/*           <ParallaxLayer offset={2.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>*/}
                    {/*               <div className={`${styles.card} ${styles.parallax} ${styles.blue}`}>*/}
                    {/*                   <p>Neither am I</p>*/}
                    {/*               </div>*/}
                    {/*           </ParallaxLayer>*/}
                    {/*       </>*/}
                    {/*    )*/}
                    {/*} )}*/}

                    <ParallaxLayer  id='hair' sticky={{ start: 1, end: 3 }} style={{ ...alignCenter, justifyContent: 'flex-start' }} >
                        <div className={`${styles.card} ${styles.sticky} ${styles.verticalGroup}`}>

                            <div className={"backgroundDetailsContainer"} style={{backgroundImage: categoryObj.backgroundUrl}}>
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

                            <ParallaxLayer offset={1.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
                                <div className={`${styles.card} ${styles.parallax} ${styles.blue_2}`}>
                                    <p>Transplantation Cheveux</p>
                                </div>
                            </ParallaxLayer>
                            <ParallaxLayer offset={2.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
                                <div className={`${styles.card} ${styles.parallax} ${styles.blue}`}>
                                    <p>Neither am I</p>
                                </div>
                            </ParallaxLayer>

                    <ParallaxLayer id='dent' sticky={{ start: 3, end: 6 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
                        <div className={`${styles.card} ${styles.sticky}`}>
                            <p>I'm a sticky layer 2 two</p>
                        </div>
                    </ParallaxLayer>

                            <ParallaxLayer offset={4} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
                                <div className={`${styles.card} ${styles.parallax} ${styles.blue}`}>
                                    <p>2 Neither am I</p>
                                </div>
                            </ParallaxLayer>
                            <ParallaxLayer offset={5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
                                <div className={`${styles.card} ${styles.parallax} ${styles.blue}`}>
                                    <p>2 Neither am I</p>
                                </div>
                            </ParallaxLayer>
                </Parallax>



                {/*<Parallax pages={2} style={{ top: '0', left: '0' }}>*/}
                {/*    <ParallaxLayer*/}
                {/*        offset={0}*/}
                {/*        speed={2.5}*/}
                {/*        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}*/}
                {/*    >*/}
                {/*        /!*<p>Scroll down</p>*!/*/}
                {/*        /!*<div className={(isDesktop)? ("blocksContainer"):("blocksContainerMobile")} style={{height: "100vh", background: "red", width: "100%"}}>*!/*/}
                {/*            <div className={"backgroundDetailsContainer"} style={{backgroundImage: categoryObj.backgroundUrl}}>*/}
                {/*                <div className={"textBlockHolder"}>*/}
                {/*                    <div className={"textBlockContainer"}>*/}
                {/*                        <div className={"title"}>{categoryObj.title}</div>*/}
                {/*                        <div className={"subtitle"}>{categoryObj.subtitle}</div>*/}
                {/*                        <div className={"paragraph"}>{categoryObj.paragraph}</div>*/}
                {/*                        <div className={"button"}>More info</div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        /!*</div>*!/*/}
                {/*    </ParallaxLayer>*/}

                {/*    <ParallaxLayer offset={2} speed={2} style={{ backgroundColor: '#ff6d6d' }} />*/}

                {/*    <ParallaxLayer*/}
                {/*        offset={1}*/}
                {/*        speed={0.5}*/}
                {/*        style={{*/}
                {/*            display: 'flex',*/}
                {/*            justifyContent: 'center',*/}
                {/*            alignItems: 'center',*/}
                {/*            color: 'white',*/}
                {/*        }}>*/}
                {/*        <p>Scroll up</p>*/}
                {/*        <div className={"categoryListContainer"}>*/}
                {/*            <div className={"categoryBlock"}>Category</div>*/}
                {/*            <div className={"categoryBlock"}>Category</div>*/}
                {/*            <div className={"categoryBlock"}>Category</div>*/}
                {/*            <div className={"categoryBlock"}>Category</div>*/}
                {/*            <div className={"categoryBlock"}>Category</div>*/}
                {/*        </div>*/}
                {/*    </ParallaxLayer>*/}
                {/*</Parallax>*/}
            </div>
        </>

    );
}
