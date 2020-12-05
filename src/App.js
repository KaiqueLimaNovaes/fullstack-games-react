import './App.css';

import Menu from './/componentes/menu.js';
import Footer from './componentes/footer.js';
import Rotas from './rotas.js'

import {BrowserRouter} from 'react-router-dom';
import {Container} from 'react-bootstrap';

function App() {
  return ( 
  <BrowserRouter>
    <div className="App">
      <header>
        <Menu />
      </header>
      <main>
        <Container fluid>
          <Rotas />
        </Container>
      </main>
      <Footer />
    </div>
  </BrowserRouter>
  );
}

export default App;
