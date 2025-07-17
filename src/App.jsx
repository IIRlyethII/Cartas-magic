import React, { useState, useEffect } from 'react'
import {Buscador} from "./Componentes/Buscador"
import {Resultados} from "./Componentes/Resultados"
import {Historial} from "./Componentes/Historial"


export const App =()=> {
  const [cartas, setCartas] = useState([]) 
  const [historial, setHistorial] = useState([])

  useEffect(()=> {
    const guardado = JSON.parse(localStorage.getItem("historialCartas")) || []
    setHistorial(guardado)
  }, [])

  useEffect(()=> {
    localStorage.setItem("historialCartas", JSON.stringify(historial))
  }, [historial])

  const buscarCartas = async (termino) => {
    try {
      const res = await fetch(`https://api.scryfall.com/cards/search?q=${encodeURIComponent(termino)}`)
      const data = await res.json()

      if (data.object === "error") {
        alert("No se encontraron resultados.")
        return
      }

      setCartas(data.data)

      const yaExiste = historial.find((entrada) => entrada.termino === termino);

      if (!yaExiste){
        const nuevoHistorial = [
          {termino, fecha: new Date().toLocaleDateString(), resultados: data.data.length}, ...historial
        ].slice(0, 10)
        setHistorial(nuevoHistorial)
      }

    } catch (error) {
      console.error("Error al buscar cartas:", error)
    }
  }

    const eliminarEntradaHistorial = (index) => {
      const nuevoHistorial = [...historial]
      nuevoHistorial.splice(index, 1)
      setHistorial(nuevoHistorial)
  }

    const repetirBusqueda = (termino) => {
      buscarCartas(termino)
  } 

  return (
    <div className='container py-4'>
      <h1 className='text-center mb-4'>Buscador de cartas Magic</h1>
      <Buscador onBuscar={buscarCartas}/>
      <Historial historial={historial} 
        eliminarEntrada={eliminarEntradaHistorial}
        repetirBusqueda={repetirBusqueda}/>
      <Resultados cartas={cartas}/>
    </div>
  )
}
