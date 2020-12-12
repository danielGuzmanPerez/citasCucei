<?php 
            $server="localhost";
            $usuario="id14883820_daniel";
            $pass=">X_0@0i)~^)<(2RV";
            $bd="id14883820_citas";
            $user=$_GET["user"];
            $cone= mysqli_connect($server,$usuario,$pass,$bd);

            $sqli = "SELECT `Carrera` FROM `Administrador` WHERE `Usuario`='$user' ";
            $resultado=mysqli_query($cone,$sqli);

            if(mysqli_num_rows($resultado)>0  ){
                $row = mysqli_fetch_assoc($resultado);
                echo $row['Carrera'];
            }else{
                echo "no se encontro nada";
            }
            mysqli_close($cone);
            ?>
   