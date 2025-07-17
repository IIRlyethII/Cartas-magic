import React from "react"

export const Historial = ({historial, eliminarEntrada, repetirBusqueda}) => {
    if (historial.length === 0){
        return <p className="text-center mt-4">Aun no hay historial de busquedas.</p>
    }

    return (
        <div className="mt-5">
            <h4 className="mb-3">Historial de Búsquedas</h4>
            <div className="table-responsive">
                <table className="table table-bordered table-hover align-middle">
                    <thead className="table-dark">
                        <tr>
                            <th>Término</th>
                            <th>Fecha y Hora</th>
                            <th>Resultados</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {historial.map((entrada, index) => (
                            <tr key={index}>
                                <td>
                                    <button
                                    className="btn btn-link p-1 text-decoration-none"
                                    onClick={() => repetirBusqueda(entrada.termino)}>
                                    {entrada.termino}
                                    </button>
                                </td>
                                <td>{entrada.fecha}</td>
                                <td>{entrada.resultados}</td>
                                <td>
                                    <button
                                        className="btn btn-sm btn-danger"
                                        onClick={() => eliminarEntrada(index)}>
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}