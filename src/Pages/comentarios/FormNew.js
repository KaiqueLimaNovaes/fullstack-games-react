import React from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import { useForm } from "react-hook-form";

import './FormNew.css';

export const FormNew = ({ history }) => {
    const { register, handleSubmit } = useForm();
  
    const handleOnSubmit = (data) => {
      axios.post("http://localhost:3005/comentarios", data).then((response) => {
        if (response.data.status === "OK") {
          alert("Cadastrado com Sucesso");
  
          history.push("/comentarios");
  
          window.location.reload()
        }
      });
    };
  
    return (
      <Container id="corpo">

        <header id="gameboyHeader"></header>

        <span id="wordGeneral">Deixe um comentário</span>
  
        <section id="screen">
          <span></span>
          <div id="glass">
            <form id="formComentario" onSubmit={handleSubmit(handleOnSubmit)}>
              <label id="wordScreen">Nome:</label>
              <input id="inputScreen" type="text" name="nome" ref={register} />
              <label id="wordScreen">Comentário:</label>
              <input id="inputScreenC" type="text" name="comentario" ref={register} />
            </form>
          </div>
        </section>
        <p id="wordName">Full stack games</p>
        <table id="tabela">
            <tr>
                <td>
                    <div id="directions">
                        <button id="bLeft"></button>
                        <button id="bTop"></button>
                        <button id="bRigth"></button>
                        <button id="bBottom"></button>
                    </div>
                </td>
                <td>
                    <input id="buttonL" type="submit" form="formComentario" />
                    <br /><br />
                    <button id="buttonS" onClick={() => {history.push("/comentarios");}}>Sair</button>
                </td>
            </tr>
        </table>
        <div>
          <button id="start"></button>
          <button id="select"></button>
        </div>
      </Container>
    );
  };

  export default FormNew;