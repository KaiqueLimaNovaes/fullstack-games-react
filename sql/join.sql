use fullstackgames;

SELECT entrega.endereco, pedidos.endereco
FROM pedidos
INNER JOIN entrega ON entrega.endereco = pedidos.endereco;