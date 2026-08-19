import FigureNotFound from "@/components/figureNotFound"

export default function NotFound(){
    return(
        <>
            <div className="container-not-found">
                <div className="flex-notfound"> 
                    <h2>ERRO 404</h2>
                    <p>Página não encontrada</p>
                    <FigureNotFound/>
                </div>
            </div>
        </>
    )
}