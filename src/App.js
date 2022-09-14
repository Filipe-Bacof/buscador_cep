import { FiSearch } from 'react-icons/fi'
import './styles.css';

function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador de CEP</h1>
      <div className="containerInput">
        <input
        type="text"
        placeholder="Digite o seu CEP..."
        />
        <button className="buttonSearch">
          <FiSearch size={25} color="#FFF"/>
        </button>
      </div>

      <main className='main'>
        <h2>CEP: 93222-222</h2>
        <span>Rua Teste Algum</span>
        <span>Complemento</span>
        <span>Vila Rosa</span>
        <span>Sapucaia do Sul - RS</span>
      </main>
    </div>
  );
}

export default App;
