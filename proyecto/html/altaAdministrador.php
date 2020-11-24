<?php 
//datos de conexión al servidor de base de datos
$server="localhost";
$usuario="id14883820_daniel";
$pass=">X_0@0i)~^)<(2RV";
$bd="id14883820_citas";
//datos enviados para insertar
//$user=$_POST["user"];
//$password=$_POST["pass"];
//$carrera=$_POST["carrera"];

$user= filter_input(INPUT_POST,'usuario');
$password= filter_input(INPUT_POST,'pass');
$carrera= filter_input(INPUT_POST,'carrera');


//conexion con el servidor
$cone= mysqli_connect($server,$usuario,$pass,$bd);
$sqli = "SELECT `Usuario` FROM `Administrador` WHERE `Usuario`='$user' ";
$respuesta = mysqli_query($cone,$sqli);
if(mysqli_num_rows($respuesta)>0){
    echo"2";
}else{
    $pass_cifrado= password_hash($password,PASSWORD_DEFAULT);
    $sql = "INSERT INTO `Administrador` (`Usuario`, `Pass`,`Carrera`) VALUES ('$user', '$pass_cifrado', '$carrera')";
    
    if(mysqli_query($cone,$sql)){
        echo"1";
        
    }
}
mysqli_close($cone);
?>