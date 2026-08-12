import Image from "next/image";
import styles from "./page.module.css";
import "./principal.css";

export default function Home() {
  return (
    <div className="tudo">


      <div className="geral">
        {/* BLOCO SUPERIOR: TEXTO + IMAGEM */}
        <div className="flex">
          <div className="escritasFlex">
            <div className="blocoTextos">
              <h2 className="tituloH1">
                Unlock Your Business <br />
                Potential With Facebook & <br />
                Instagram Advertising
              </h2>
              <h3 className="subtituloH3">
                Facebook Premier Level Partner Agency
              </h3>
            </div>

            <div className="link">
              <a href="#work_with_us" className="work_with_us_maior">
                WORK WITH US
              </a>
            </div>
          </div>

          <div className="imagem">
            <div className="foguete">
              <img src="/imagens/teste.webp" alt="Foguete" />
            </div>
          </div>
        </div>

        {/* BLOCO INFERIOR: SELOS (Agora pegando a tela toda por baixo dos dois) */}
        <div className="barraselos">
          <div className="seloItem">
            <img src="/imagens/facebookMarketingLogo.png" alt="Facebook Marketing Partner" />
            <p>Facebook Premier<br />Level Agency Partner</p>
          </div>

          <div className="seloItem">
            <img src="/imagens/googlePartnerLogo.png" alt="Google Partner" />
            <p>Google Endorsed<br />Marketing Partner</p>
          </div>

          <div className="seloItem">
            <img src="/imagens/forbesLogo.png" alt="Forbes Agency Council" />
            <p>Forbes Agency<br />Council Member</p>
          </div>

          <div className="seloItem">
            <img src="/imagens/inc5000logo.webp" alt="Inc. 5000" />
            <p>Inc. 5000<br />Fastest Growing Company</p>
          </div>

          <div className="seloItem">
            <span className="metricaValor">$100M</span>
            <p>In Annual<br />Digital Ad Spend</p>
          </div>

          <div className="seloItem">
            <span className="metricaValor">15+</span>
            <p>Years of Facebook<br />Advertising Experience</p>
          </div>
        </div>
      </div>
    </div>
  );
}
