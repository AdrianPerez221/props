interface EstadoAlumnoProps {
  activo: boolean
}

function EstadoAlumno({ activo }: EstadoAlumnoProps) {
  return <p className="estado-alumno">{activo ? 'Activo' : 'Inactivo'}</p>
}

export default EstadoAlumno
