<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $database = "fullstackgames";

    $conn = mysqli_connect($servername, $username, $password, $database);

    if (!$conn){
        die("A conexão com o banco de dados falhou: ".mysqli_connect_error());
    }
    
    $sql = "select * from produtos";
    $result = $conn->query($sql);

    $rows = $result->fetch_all();
?>