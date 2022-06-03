import {isDesktop} from "react-device-detect";

export default function AboutComp() {
    return (
        <div className={(isDesktop)? ("blocksContainer"):("blocksContainerMobile")} style={{minHeight: "calc(100vh - 220px)"}}>
            <h2>Hair component</h2>
        </div>
    );
}
