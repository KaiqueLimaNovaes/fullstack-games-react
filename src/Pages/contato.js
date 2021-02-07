import {lazy, Suspense} from 'react';

const Contatos = lazy(() => import('../componentes/contatos.js'));

function Contato(){
    return (
        <Suspense fallback={<p>Carregando ...</p>}>
            <Contatos />
        </Suspense>
    )
}

export default Contato;