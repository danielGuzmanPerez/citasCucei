<?php
$server = "localhost";
$usuario="id14883820_daniel";
$pass=">X_0@0i)~^)<(2RV";
$bd="id14883820_citas";
//conectar a server
$cone = mysqli_connect($server,$usuario,$pass,$bd);
$carrera=$_GET['carrera'];
$Dia=$_GET['Dia'];
$Mes=$_GET['Mes'];
$sql = "SELECT * FROM DatosCitas WHERE `Carrera`='$carrera' AND `Dia`='$Dia' AND `Mes`='$Mes' ";
$resultado=mysqli_query($cone,$sql);
$datos=array();
if(mysqli_num_rows($resultado)>0){
    while($row = mysqli_fetch_assoc($resultado)){
           // echo " ".$row['Id']. " ". $row['Dia']." ".$row['Hora']."<br>";
            $datos[]=$row;
    }
}else{
    echo "no se encontro nada";
}
echo json_encode($datos);
mysqli_close($cone);
?>