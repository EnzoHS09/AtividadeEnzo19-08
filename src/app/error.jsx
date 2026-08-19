"use client";

import FigureError from "@/components/figureError"

export default function Error({error, reset}){
    return(
        <>
            <div className="container-notfound">
                <div className="flex-notfound">
                    <h2 className="mostrando_erro">Erro: {error.message}</h2>
                    <FigureError/>
                </div>
            </div>
        </>
    )
}