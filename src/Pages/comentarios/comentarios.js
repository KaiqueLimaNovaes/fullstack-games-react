import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Switch, Route } from "react-router-dom";

import Lista from "./lista.js";
import './comentarios.css';

function Comentarios({ history }){
    const [comentarios, setComentarios] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3005/comentarios").then((response) => {
        setComentarios(response.data.comentarios);
        });
    }, []);
    
    return (
        <Container>
        <header>
          <Row id="rowHeader">
            <h2>Comentários</h2>
            <button id="btnC" onClick={() => {history.push(`/comentarios/new`);}}>Escrever um comentário</button>
          </Row>
        </header>
  
        <Switch>
          <Route
            path={["/comentarios", "/comentarios/new"]}
            component={Lista}
          />
        </Switch>
      </Container>
    )
}

export default Comentarios;