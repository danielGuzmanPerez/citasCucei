<?php
//credenciales del servidor
$server = "localhost";
$usuario="id14883820_daniel";
$pass=">X_0@0i)~^)<(2RV";
$bd="id14883820_citas";
//datos a recibir
//$mes = $_GET['mes'];
//$dia = $_GET['dia'];
//$hora = $_GET['hora'];
$id = $_GET['id'];
//conexion al servidor
$cone = mysqli_connect($server,$usuario,$pass,$bd);
$sql ="DELETE FROM `DatosCitas` WHERE  `id`='$id'";
mysqli_query($cone,$sql);
$borrados = mysqli_affected_rows($cone);
if($borrados>0){
    echo "1";
}else{
    echo "0";
}
mysqli_close($cone);
?>