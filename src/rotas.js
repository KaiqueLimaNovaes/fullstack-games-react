import {Switch, Route} from 'react-router-dom';

import Produtos from './Pages/produtos.js';
import Pedidos from './Pages/pedidos.js';
import Contato from './Pages/contato.js';
import Lojas from './Pages/lojas.js';
import Comentarios from './Pages/comentarios/comentarios.js';
import FormNew from './Pages/comentarios/FormNew.js'

function Rotas(){
    return (
        <Switch>
            <Route exact path="/produtos" component={Produtos} />
            <Route exact path="/pedidos" component={Pedidos} />
            <Route exact path="/contato" component={Contato} />
            <Route exact path="/lojas" component={Lojas} />
            <Route exact path="/comentarios" component={Comentarios} />
            <Route exact path="/comentarios/new" component={FormNew} />
        </Switch>
    )
}

export default Rotas;