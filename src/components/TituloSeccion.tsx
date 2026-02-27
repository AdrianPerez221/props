interface TituloSeccionProps {
  texto: string
}

function TituloSeccion({ texto }: TituloSeccionProps) {
  return <h1>{texto}</h1>
}

export default TituloSeccion
