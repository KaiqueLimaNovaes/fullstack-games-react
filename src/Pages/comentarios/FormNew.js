import React from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import { useForm } from "react-hook-form";

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
      <Container>
        <close onClick={() => {
          history.push("/comentarios");
        }}>
          X
        </close>
  
        <title>Criar Categoria</title>
  
        <form onSubmit={handleSubmit(handleOnSubmit)}>
          <label>Nome:</label>
          <input type="text" name="nome" ref={register} />
          <label>Comentário:</label>
          <input type="text" name="comentario" ref={register} />
          <button>Enviar</button>
        </form>
      </Container>
    );
  };

  export default FormNew;