import Link from "next/link";
import "./bannerCTA.css"

export default function BannerCTA(){
    return(
        // fluid geralmente não tem espaço nas laterais
        <div className="container-cta-fluid">
            <button type="button" className="button-cta">Participar</button>
            <p>teste</p>
        </div>
    )
}
