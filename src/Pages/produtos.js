import  {useState, useEffect} from 'react';
import axios from "axios";

import Produto from '../componentes/produtos/produto.js';
import './produtos.css';

function Produtos(){
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3005/produto").then((response) => {
        setProdutos(response.data.produtos);
        });
    }, []);

    return (
        <div class="container-fluid">
            <div class="row">
                <div class="col">
                    <h3>Categorias</h3>
                    <div class="row">
                        <ol id="listaLinha">
                            <li class="lisP" onclick="exibirTodos()">Todos (16)</li>
                            <li class="lisP" onclick="exibirCategoria('consoles')">Consoles (5)</li>
                            <li class="lisP" onclick="exibirCategoria('jogos')">Jogos (6)</li>
                            <li class="lisP" onclick="exibirCategoria('acessorios')">Acessórios (3)</li>
                            <li class="lisP" onclick="exibirCategoria('pc')">PC (2)</li>
                        </ol>
                    </div>
                </div>
            </div>
            <div class="container-fluid">
                <div class="row justify-content-around">
                    {produtos && produtos.map((item) => (<Produto key={item.id} imagem={item.imagem} nome={item.descricao} preco={item.preco} precoP={item.preco_venda} categoria={item.categoria} />))}
                </div>
            </div>
        </div>
    )
}

export default Produtos;