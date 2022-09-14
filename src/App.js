import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './styles.css';
import api from './services/api';

function App() {

  const [input, setInput] = useState('')

  async function handleSearch () {
    // 93230495/json/

    if (input === '') {
      alert("Preencha algum CEP");
      return;
    }

    try{
      const response = await api.get(`${input}/json`);
      console.log(response);
    }catch{
      alert("ERRO AO BUSCAR");
    }

  }

  return (
    <div className="container">
      <h1 className="title">Buscador de CEP</h1>
      <div className="containerInput">
        <input
        type="text"
        placeholder="Digite o seu CEP..."
        value={input}
        onChange={(e) => setInput(e.target.value) }
        />
        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color="#FFF"/>
        </button>
      </div>

      <main className='main'>
        <h2>CEP: 93222-222</h2>
        <span>Rua da sua mãe</span>
        <span>Complemento prostibulo</span>
        <span>Ipiranga</span>
        <span>Sapucaia do Sul - RS</span>
      </main>
    </div>
  );
}

export default App;
