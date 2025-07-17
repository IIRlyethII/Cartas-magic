import React, {useState, useEffect} from "react"

export const Resultados = ({cartas})=> {
    const [puntos, setPuntos] = useState('')

    useEffect(()=>{
        const interval = setInterval(()=>{
            setPuntos((prev)=> (prev.length < 3 ? prev + '.' : ''))
        }, 500)
        return ()=> clearInterval(interval)
    }, [])

    if (cartas.length === 0) {
        return <p className="text-center mt-4">No hay cartas para mostrar aun{puntos}</p>
    }

    return (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            {cartas.map((carta) => (
                <div className="col" key={carta.id}>
                    <div className="card h-100 shadow-sm">
                        {carta.image_uris?.normal ? (
                            <img
                                src={carta.image_uris.normal}
                                className="card-img-top"
                                alt={carta.name}
                            />
                        ):(
                            <div className="card-img-top d-flex align-items-center justify-content-center bg-light" style={{height: "300px"}}>
                                <span className="text-muted">Sin imagen</span>
                            </div>
                        )}
                        <div className="card-body">
                            <h5 className="card-title">{carta.name}</h5>
                            <p className="card-text"><strong>Tipo: </strong>{carta.type_line}</p>
                            <p className="card-text"><strong>Rareza: </strong>{carta.rarity}</p>
                            <p className="card-text"><strong>Edicion: </strong>{carta.set_name}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}