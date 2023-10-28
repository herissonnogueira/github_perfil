import { useState } from "react";

import Perfil from "./components/Perfil";
import Formulario from "./components/Formulario";
import ReposList from "./components/ReposList";

function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true);
  const [nomeUsuario, setNomeUsuario] = useState('');

  return (
    <>
      <div className='container'>
        <form className='form'>
          <input
            onBlur={e => setFormularioEstaVisivel(e.target.value)}
            className='formInput'
            type="text"
            placeholder='Digite seu GitHub'
          />
          <button
            onClick={() => setNomeUsuario(formularioEstaVisivel)}
            className='formButton'
            type="button"
          >
            Pesquisar
          </button>
        </form>
      </div>

      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}

      {/* {formularioEstaVisivel && (
        <Formulario />
      )}

      <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">toggle form</button> */}
    </>
  )
}

export default App