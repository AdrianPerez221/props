import AlumnoCard from './components/AlumnoCard'
import EstadoAlumno from './components/EstadoAlumno'
import TituloSeccion from './components/TituloSeccion'
import './App.css'

function App() {
  return (
    <main className="app">
      <TituloSeccion texto="Listado de alumnos" />
      <section className="alumnos">
        <div className="alumno-item">
          <AlumnoCard nombre="Ana" curso="DAW" notaMedia={8.5} />
          <EstadoAlumno activo={true} />
        </div>
        <div className="alumno-item">
          <AlumnoCard nombre="Luis" curso="DAM" />
          <EstadoAlumno activo={false} />
        </div>
      </section>
    </main>
  )
}

export default App
