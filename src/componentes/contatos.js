import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import { useForm } from "react-hook-form";

import email from '../componentes/images/email.png';
import whats from '../componentes/images/w.png';

function Contatos(){
    const { register, handleSubmit } = useForm();
  
    const handleOnSubmit = (data) => {
      axios.post("http://localhost:3210/contatos", data).then((response) => {
        alert("Cadastrado com Sucesso");  
        window.location.reload()
      });
    };

    const [contatos, setContatos] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3210/contatos").then(function(response){
            //console.log(response.data)
            setContatos(response.data);
            //console.log(setContatos)
        })
    }, []);

    return (
        <div class="container-fluid">
            <h2>Contato</h2>
            <hr />
            <div class="container">
                <div class="row">
                    <div class="col">
                        <img src={email} alt="email" width="50px" />
                        <p class="lead">contato@fullstackgames.com</p>
                    </div>
                    <div class="col">
                        <img src={whats} alt="whatsapp" width="50px" />
                        <p class="lead">11 986634923</p>
                    </div>
                </div>
                <form onSubmit={handleSubmit(handleOnSubmit)}>
                    <div class="form-group">
                        <h4>Nome:</h4>
                        <input type="text" name="nome" placeholder="Digite seu nome ..." class="form-control" ref={register} />
                    </div>
                    <div class="form-group">
                        <h4>Email:</h4>
                        <input type="text" name="email" placeholder="Digite seu email ..." class="form-control" ref={register} />
                    </div>
                    <div class="form-group">
                        <h4>Mensagem:</h4>
                        <textarea name="menssagem" placeholder="Digite sua mensagem ..." class="form-control" ref={register}></textarea>
                    </div>
                    <br />
                    <input type="submit" value="Enviar" />
                </form>
                <br /><br />
                <div class="container-fluid">
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Menssagem</th>
                        </tr>
                        </thead>
                        <tbody>
                        {contatos && contatos.map((item) => (
                        <tr key={item._id}>
                            <td>{item.nome}</td>
                            <td>{item.menssagem}</td>
                        </tr>
                        ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
}

export default Contatos;