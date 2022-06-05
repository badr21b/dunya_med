import { BsTelephone } from 'react-icons/bs';
import ReactWhatsapp from "react-whatsapp";
import React from "react";


export default function WhatsappFloat() {
    return (
        <div className={"float"}>
            <ReactWhatsapp  className={"phoneIcon"} number="+905346314603" message={""}>
                <BsTelephone/>
            </ReactWhatsapp>

        </div>
    );
}
