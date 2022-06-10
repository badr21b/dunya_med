import {useEffect} from "react";

export default function TestComp() {

    useEffect(() => {
        console.log("here")
    },[])

    return (
        <main style={{ padding: "1rem 0" }}>
            <div className={"pageNotFoundContainer"}>
                <img src={"./404.gif"} alt="404" />
            </div>
        </main>
    );
}
