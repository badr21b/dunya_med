import {isDesktop} from "react-device-detect";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";

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


    return (
        <div className={(isDesktop)? ("blocksContainer"):("blocksContainerMobile")} style={{height: "100vh", background: "red", width: "100%"}}>
            <div className={"backgroundDetailsContainer"} style={{backgroundImage: categoryObj.backgroundUrl}}>
                <div className={"textBlockHolder"}>
                    <div className={"textBlockContainer"}>
                        <div className={"title"}>{categoryObj.title}</div>
                        <div className={"subtitle"}>{categoryObj.subtitle}</div>
                        <div className={"paragraph"}>{categoryObj.paragraph}</div>
                        <div className={"button"}>More info</div>
                    </div>
                </div>

            </div>
            <div className={"categoryListContainer"}>
                <div className={"categoryBlock"}>Category</div>
                <div className={"categoryBlock"}>Category</div>
                <div className={"categoryBlock"}>Category</div>
                <div className={"categoryBlock"}>Category</div>
                <div className={"categoryBlock"}>Category</div>
                <div className={"categoryBlock"}>Category</div>
                <div className={"categoryBlock"}>Category</div>
                <div className={"categoryBlock"}>Category</div>
                <div className={"categoryBlock"}>Category</div>
                <div className={"categoryBlock"}>Category</div>
            </div>
        </div>
    );
}
