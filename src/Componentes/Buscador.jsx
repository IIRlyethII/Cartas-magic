import React, {useState} from "react"

export const Buscador =({onBuscar}) => {
    const [termino, setTermino] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (termino.trim() === "") {
            setError("Porfavor, ingresa un termino de busqueda.")
            return
        }
        setError("")
        onBuscar(termino)
        setTermino("")
    }
    return (
        <form onSubmit={handleSubmit} className="mb-4 border p-3 rounded bg-light">
            <div className="row g-3 align-items-end">
                <div className="col-md-10">
                    <label className="form-label">Buscar carta por nombre, tipo o texto:</label>
                    <input
                        type="text"
                        className={`form-control ${error ? "is-invalid": "is-valid"}`}
                        placeholder="Ej: goblin, lighning bolt, artifact"
                        value={termino}
                        onChange={(e)=> setTermino(e.target.value)}
                    />
                    {error && <div className="invalid-feedback d-block">{error}</div>}
                </div>
                <div className="col-md-2 text-end">
                    <button type="submit" className="btn btn-primary w-100">
                        buscar
                    </button>
                </div>
            </div>
        </form>
    )
}