
const FooterComp = () => {
    return (
        <div className={"footer-holder"}>
            <div className={"blockHolder"}>
                <div className={"categoryHolder"}>
                    <div className={"title"}>Information</div>
                    <div className={"itemsList"}>
                        <div className={"itemContainer"}>
                            <div className={"itemLeft"}>Working days</div>
                            <div className={"itemRight"}>8AM - 11PM</div>
                        </div>
                        <div className={"itemContainer"}>
                            <div className={"itemLeft"}>Saturday</div>
                            <div className={"itemRight"}>8AM - 12PM</div>
                        </div>
                        <div className={"itemContainer"}>
                            <div className={"itemLeft"}>Sunday</div>
                            <div className={"itemRight"}>10AM - 11PM</div>
                        </div>
                    </div>
                </div>

                <div className={"categoryHolder"}>
                    <div className={"title"}>Follow us</div>
                    <div className={"itemsList"}>
                        <div className={"itemContainer"}>
                            <div className={"itemLeft"}>Facebook</div>
                        </div>
                        <div className={"itemContainer"}>
                            <div className={"itemLeft"}>Twitter</div>
                        </div>
                        <div className={"itemContainer"}>
                            <div className={"itemLeft"}>Instagram</div>
                        </div>
                    </div>
                </div>

                <div className={"categoryHolder"}>
                    <div className={"title"}>Contact</div>
                    <div className={"itemsList"}>
                        <div className={"itemContainer"}>
                            <div className={"itemLeft"}>
                                <a href="tel:00905311234567" className={"phoneHref"}>
                                    +90 (534) 631 46 03
                                </a>
                            </div>
                        </div>
                        <div className={"itemContainer"}>
                            <div className={"itemLeft"}>
                                <a href="tel:00905311234567" className={"phoneHref"}>
                                    +90 (534) 631 46 03
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className={"blockHolder"}>
                <div className={"categoryHolder"}>© Dunia Med {new Date().getFullYear()}.</div>
            </div>
        </div>
    )
}

export default FooterComp;
