import "./work_with_us.css";

export default function Work_with_us(){
    return(
        <div className="flex">
            <div className="formulario">
                <form method="POST">
                    <p className="titulo_formulario">Formulário de Inscrição</p>

                    <label className="inputs">Nome:</label>
                    <input type="text" />

                    <label className="inputs">Telefone:</label>
                    <input type="tel" />

                    <label className="inputs">Biografia curta:</label>
                    <textarea rows={10} cols={20}></textarea>

                    <label className="inputs">Cargo pretendido:</label>
                    <input type="text" />

                    <label className="inputs">Pretensão salarial:</label>
                    <input type="text" />

                    <label className="inputs">LinkedIn:</label>
                    <input type="text" />

                </form>
            </div>
        </div>
    );
}