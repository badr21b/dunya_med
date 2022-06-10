import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";

export default function PageNotFound() {

    useEffect(() => {
        console.log("here");
    },[])

    return (
        <main style={{ padding: "1rem 0", zIndex: "9999999999999" }}>
            <div className={"pageNotFoundContainer"}>
                <div className={"textGroupContainer"}>
                    <div className={"title"}>404</div>
                    <div className={"subtitle"}>OOPS! ...</div>
                    <div className={"text"}>Page Not Found</div>
                </div>

                <img src={"./404.gif"} alt="404" />
                <Link to={"/"} className={"buttonItem"}>Home</Link>
            </div>
        </main>
    );
}
