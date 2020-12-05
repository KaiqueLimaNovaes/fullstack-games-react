import { ListGroup } from "react-bootstrap";
import "./categorias.css";

export const ListaCategorias = ({ setFilter }) => {
  const categoriasData = [
    { label: "Todos", slug: null },
    { label: "Consoles", slug: "consoles" },
    { label: "Jogos", slug: "jogos" },
    { label: "Microondas", slug: "microondas" },
    { label: "Lava Louças", slug: "lavaLoucas" },
    { label: "Lavadora de Roupas", slug: "lavadoraDeRoupas" },
  ];

  return (
    <div className="categorias">
      <h3>Categorias</h3>

      <ListGroup variant="flush">
        {categoriasData.map((cat, key) => (
          <ListGroup.Item
            className="itemCategoria"
            key={key}
            onClick={() => setFilter(cat.slug)}
          >
            {cat.label}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};