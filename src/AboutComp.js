import {isDesktop} from "react-device-detect";
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {Parallax, ParallaxLayer} from "@react-spring/parallax";
import styles from './Style/styles.module.scss'


export default function AboutComp(props) {

    const [storeLanguage, setStoreLanguage] = useState(useSelector(state => state.language));
    const [categoryObj, setCategoryObj] = useState({
        title: "Title",
        subtitle: "Subtitle",
        paragraph: "La Greffe de cheveux chez DunyaMED a pour objectif d’améliorer votre apparence et votre estime de vous-même en retrouvant votre zone dégarnie avec une garantie de résultats 100% naturels à vie. Vos cheveux existants serviront de zone donneuse à partir de laquelle des follicules seront prélevés pour être implantés dans la zone dégarnie (receveuse) afin de remplacer les cheveux perdus.",
        backgroundUrl: "url(https://turkishmedicalservices.com/wp-content/uploads/2018/11/hair-transplantation.jpg)"
    });

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
                        {/*<p className={styles.scrollText}>Scroll down</p>*/}
                        <div className={(isDesktop)? ("blocksContainer"):("blocksContainerMobile")} style={{height: "100vh", background: "red", width: "100%"}}>
                            <div className={"backgroundDetailsContainer"} style={{backgroundImage: categoryObj.backgroundUrl}}/>
                        </div>
                    </ParallaxLayer>

                    <ParallaxLayer sticky={{ start: 1, end: 3 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
                        <div className={`${styles.card} ${styles.sticky}`}>
                            <p>I'm a sticky layer</p>
                        </div>
                    </ParallaxLayer>

                    <ParallaxLayer offset={1.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
                        <div className={`${styles.card} ${styles.parallax} ${styles.purple}`}>
                            <p>I'm not</p>
                        </div>
                    </ParallaxLayer>

                    <ParallaxLayer offset={2.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
                        <div className={`${styles.card} ${styles.parallax} ${styles.blue}`}>
                            <p>Neither am I</p>
                        </div>
                    </ParallaxLayer>



                    <ParallaxLayer sticky={{ start: 3, end: 6 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
                        <div className={`${styles.card} ${styles.sticky}`}>
                            <p>I'm a sticky layer 2 two</p>
                        </div>
                    </ParallaxLayer>

                    <ParallaxLayer offset={4} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
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
