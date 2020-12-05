import {useState} from 'react';

function Pedidos(){
    async function guardaPedido(event) {
        event.preventDefault();
    
        let formData = new FormData(event.target);
    
        const url = "http://localhost/fullstack_games_react/fullstack-games-back/pedidos-guarda.php";
    
        fetch(url, {
          method: "POST",
          body: formData,
        })
          .then((response) => console.log(response.json()))
          .then((dados) => {
            console.log("euu", dados);
          });
    }

    return (
        <div>
            <h2>Pedido</h2>
            <hr />
            <div class="container">
                <div>
                    <form onSubmit={guardaPedido}>
                    <div class="form-group">
                        <h4>Cliente:</h4>
                        <input type="text" name="cliente" placeholder="Digite seu nome ..." class="form-control" />
                    </div>
                    <div class="form-group">
                        <h4>Endereço:</h4>
                        <input type="text" name="endereco" placeholder="Digite seu endereço ..." class="form-control" /> 
                    </div>
                    <div class="form-group">
                        <h4>Telefone:</h4>
                        <input type="number" name="telefone" placeholder="Digite seu telefone ..." class="form-control" />
                    </div>
                    <div class="form-group">
                        <h4>Produto:</h4>
                        <input type="text" name="produto" placeholder="Digite o produto ..." class="form-control" />
                    </div>
                    <div class="form-group">
                        <h4>Preço:</h4>
                        <input type="number" name="preco" placeholder="Digite o preço ..." class="form-control" />
                    </div>
                    <div class="form-group">
                        <h4>Quantidade:</h4>
                        <input type="number" name="quantidade" placeholder="Digite a quantidade ..." class="form-control" />
                    </div>
                    <div class="form-group">
                        <h4>Total:</h4>
                        <input type="number" name="preco_total" placeholder="Digite o valor total ..." class="form-control" />
                    </div>
                    <br /><br />
                    <input type="submit" value="Enviar" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Pedidos;