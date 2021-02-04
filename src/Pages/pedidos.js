import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

import './pedidos.css';

function Pedidos(){
    const { register, handleSubmit } = useForm();
  
    const handleOnSubmit = (data) => {
      axios.post("http://localhost:3005/pedidos", data).then((response) => {
        if (response.data.status === "OK") {
          alert("Pedido efetuado com Sucesso");

          window.location.reload()
        }
      });
    };

    return (
        <div>
            <h2>Pedido</h2>
            <hr />
            <div class="container">
                <div>
                    <form id="formPedido" onSubmit={handleSubmit(handleOnSubmit)}>
                    <div class="form-group">
                        <h4>Cliente:</h4>
                        <input id="inputScreenP" type="text" name="cliente" placeholder="Digite seu nome ..." ref={register} />
                    </div>
                    <div class="form-group">
                        <h4>Endereço:</h4>
                        <input id="inputScreenP" type="text" name="endereco" placeholder="Digite seu endereço ..." ref={register} /> 
                    </div>
                    <div class="form-group">
                        <h4>Telefone:</h4>
                        <input id="inputScreenP" type="number" name="telefone" placeholder="Digite seu telefone ..." ref={register} />
                    </div>
                    <div class="form-group">
                        <h4>Produto:</h4>
                        <input id="inputScreenP" type="text" name="produto" placeholder="Digite o produto ..." ref={register} />
                    </div>
                    <div class="form-group">
                        <h4>Preço:</h4>
                        <input id="inputScreenP" type="number" name="preco" placeholder="Digite o preço ..." ref={register} />
                    </div>
                    <div class="form-group">
                        <h4>Quantidade:</h4>
                        <input id="inputScreenP" type="number" name="quantidade" placeholder="Digite a quantidade ..." ref={register} />
                    </div>
                    <div class="form-group">
                        <h4>Total:</h4>
                        <input id="inputScreenP" type="number" name="preco_total" placeholder="Digite o valor total ..." ref={register} />
                    </div>
                    <br /><br />
                    <input id="btnP" type="submit" value="Enviar" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Pedidos;