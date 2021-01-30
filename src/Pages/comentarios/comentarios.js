import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Switch, Route } from "react-router-dom";

import Lista from "./lista.js";

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
          <h2>Comentários</h2>
  
          <button onClick={() => {history.push(`/comentarios/new`);}}>Novo</button>
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