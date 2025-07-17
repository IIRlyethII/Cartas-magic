# Buscador de Cartas Magic – React + Scryfall API

Una aplicación web SPA desarrollada con React y Vite que permite buscar cartas de Magic: The Gathering utilizando la API oficial de Scryfall. Los resultados se muestran en tarjetas visuales con información relevante, y cada búsqueda queda registrada en un historial guardado en el navegador.

--------------------------------------------------------------------------

## Características

- Búsqueda en tiempo real usando la 
    [API de Scryfall](https://scryfall.com/docs/api)
- Historial de búsquedas persistente con `localStorage`
- Repetición de búsqueda al hacer clic en entradas del historial
- Opción para eliminar entradas específicas del historial
- Interfaz moderna con modo oscuro y estilo mágico
- Componentes modulares desarrollados con React
- Validación de entrada y manejo de errores

--------------------------------------------------------------------------

## Tecnologías usadas

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Bootstrap 5](https://getbootstrap.com/)
- CSS personalizado

--------------------------------------------------------------------------

## Estructura del proyecto

- /src
- App.jsx                      ===#===              Componente principal
- main.jsx                     ===#===                  Punto de entrada
- estilos.css                  ===#===       Estilo general (modo oscuro)

- Componentes/
- Buscador.jsx                 ===#===             Formulario de búsqueda
- Resultados.jsx               ===#===            Visualización de cartas
- Historial.jsx                ===#===             Historial de búsquedas

- public/
- index.html                   ===#===                Documento HTML base

--------------------------------------------------------------------------

## Instalación y uso

1. Clona el repositorio:
    git clone https://github.com/tu-usuario/tu-repo.git
    cd tu-repo

2. Instala dependencias:
    npm install

3. Ejecuta el proyecto:
    npm run dev

4. Abre tu navegador en:
    http://localhost:5173/

--------------------------------------------------------------------------

## Autores
- Sergio Hidalgo
- Sebastian Novoa
- Estudiantes de Analista programador
- Institución: Inacap
