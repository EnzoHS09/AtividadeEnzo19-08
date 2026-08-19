import Link from "next/link";
import "./footer.css"

export default function Footer(){
    return(
        <footer className="footer_global">
          <ul>
            <div><li className="sobre_nos"><Link href="/direcionou">Sobre Nós</Link></li></div>
            <div><li className="redes_sociais"><Link href="/direcionou">Redes Sociais</Link></li></div>
            <div><li className="contatos"><Link href="/direcionou">Contatos</Link></li></div>
          </ul>
        </footer>
    )
}
