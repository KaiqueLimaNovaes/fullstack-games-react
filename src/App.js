import './App.css';

import Menu from './/componentes/menu.js';
//import Footer from './componentes/footer.js';
import Rotas from './rotas.js'

import {BrowserRouter} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import {lazy, Suspense} from 'react';

const Footer = lazy(() => import('./componentes/footer.js'));

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
      <Suspense fallback={<p>Carregando ...</p>}>
        <Footer />
      </Suspense>
    </div>
  </BrowserRouter>
  );
}

export default App;
