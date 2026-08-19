import Link from "next/link";
import "./header.css"

export default function Header(){
    return(
        <header>
          <div className="header">
            <div className="logo">
              <img src="/imagens/tierLogo.svg" alt="Tier 1 Logo" />
            </div>
            <div className="escritasLateral">
              <div >WHAT WE DO </div>
              <div><Link href={"/blog"}> BLOG </Link></div>
              <div>PODCAST</div>
              <div><Link href={"/careers"}> CAREERS </Link></div>
              <div className="work_with_us_menor"><Link href={"/work_with_us"}> WORK WITH US </Link></div>
            </div>
          </div>
        </header>
    )
}


    