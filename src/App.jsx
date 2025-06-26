import { useState } from "react"

const App = () => {
//   const [contador, setContador] = useState(0)

//   const incrementar = () => {
//     setContador(contador+1);
//   }
  const [nome, setNome] = useState()
  const [especie, setEspecie] = useState()
  const [imagem, setImagem] = useState()
  const [status, setStatus] = useState()

  
  const buscar = () => {
    let number = parseInt(Math.random()*20)
    fetch("https://rickandmortyapi.com/api/character")
    .then((res) => res.json())
    .then((data) => {
      setNome(data.results[number].name)
      setEspecie(data.results[number].species)
      setImagem(data.results[number].image)
      setStatus(data.results[number].status)
    })
  }

  return(
    <div>
      <img src={imagem} alt="" />
      <p>Nome: {nome}</p>
      <p>Espécie: {especie}</p>
      <p>Status: {status}</p>
      <button onClick={buscar}>Personagem</button>
    </div>
  )
}

export default App
