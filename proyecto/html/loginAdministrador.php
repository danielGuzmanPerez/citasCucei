<?php 
//datos de conexión al servidor de base de datos
$server="localhost";
$usuario="id14883820_daniel";
$pass=">X_0@0i)~^)<(2RV";
$bd="id14883820_citas";
//datos enviados para insertar
//$user=$_GET["user"];
//$password=$_GET["password"];
$user= filter_input(INPUT_POST,'usuario');
$password= filter_input(INPUT_POST,'pass');


//conexion con el servidor
$cone= mysqli_connect($server,$usuario,$pass,$bd);

$sqli = "SELECT `Pass` FROM `Administrador` WHERE `Usuario`='$user' ";
$resultado=mysqli_query($cone,$sqli);

if(mysqli_num_rows($resultado)>0  ){
    $row = mysqli_fetch_assoc($resultado);
    if(password_verify($password,$row['Pass'])==true){
        echo "si";
    }else{
        echo "contraseña invalida";
    }
}else{
    echo "no se encontro nada";
}
mysqli_close($cone);
?>