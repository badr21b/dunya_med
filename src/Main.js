import {GrFacebookOption} from "react-icons/gr";

export default function MainComp() {
    const treatmentList = [
        {key: "dandruffTreatment", text: "Dandruff Treatment", icon: <GrFacebookOption className={"icon"}/>},
        {key: "HairThinning", text: "Hair Thinning", icon: <GrFacebookOption className={"icon"}/>},
        {key: "RoughHairTreatment", text: "Rough hair treatment", icon: <GrFacebookOption className={"icon"}/>},
        {key: "Alopecia", text: "Alopecia", icon: <GrFacebookOption className={"icon"}/>},
        {key: "HairTossTreatment", text: "Hair loss treatment", icon: <GrFacebookOption className={"icon"}/>},
        {key: "AlopeciaAreata", text: "Alopecia Areata", icon: <GrFacebookOption className={"icon"}/>},
    ]
    return (
        <main style={{ padding: "1rem 0" }}>
            <div>
                <div>#1 Ranked Hair Clinic in Turkey</div>
                <div>Life isn't perfect but Your hair can be.</div>
                <div>
                    {treatmentList.map(item => {
                      return(
                          <div key={item.key} >
                              {item.icon}
                              <div>{item.text}</div>
                          </div>
                      )
                    })}
                </div>

                <div>
                    <div>Make an appointment</div>
                    <div>Phone +90 123456789</div>
                </div>

                <img src={"https://assets.website-files.com/620a7612af716dbffa6c4a61/620cc9eb17d49233903dd591_Hero-image-hair-treatment-min.png"}  alt={""}/>
            </div>
        </main>
    );
}
