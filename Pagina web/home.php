<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <link rel="stylesheet" href="css/style.css">
<!-- jQuery and JS bundle w/ Popper.js -->
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
    <title>Citas Cucei</title>
</head>
<body>
    <header>
        <a href="index.html">Citas Cucei</a>
    </header class="header">
    <script type="text/javascript">
        var usuario='<?php echo $_GET["usuario"]; ?>';
        var carrera;
        const xhttp = new XMLHttpRequest();
        const xhttp2 = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                carrera= this.responseText;
            }
        };
        xhttp.open("GET", "comprobarUsuario.php?user="+usuario, true);
        xhttp.send();
        //traer citas
       
       
    </script>
    <section>
        <form id="formDiaSemana">
            <select name="DiaSemana" class="selectpicker show-menu-arrow">
                <option value="Mon">Lunes</option>
                <option value="Tue">Martes</option>
                <option value="Wed">Miercoles</option>
                <option value="Thu">Jueves</option>
                <option value="Fri">Viernes</option>
            </select>
            <input type="submit"class="btn btn-success" value="Filtrar">
        </form>
    </section>

    <section>
        <form id="formDiaMes" class="container">
            <select name="Dia" class="selectpicker show-menu-arrow">
                <option selected hidden>Día</option>
                <option value="1">1</option> 
                <option value="2">2</option> 
                <option value="3">3</option> 
                <option value="4">4</option> 
                <option value="5">5</option> 
                <option value="6">6</option> 
                <option value="7">7</option> 
                <option value="8">8</option> 
                <option value="9">9</option> 
                <option value="10">10</option> 
                <option value="11">11</option> 
                <option value="12">12</option> 
                <option value="13">13</option> 
                <option value="14">14</option> 
                <option value="15">15</option> 
                <option value="16">16</option> 
                <option value="17">17</option> 
                <option value="18">18</option> 
                <option value="19">19</option> 
                <option value="20">20</option> 
                <option value="21">21</option> 
                <option value="22">22</option> 
                <option value="23">23</option> 
                <option value="24">24</option> 
                <option value="25">25</option> 
                <option value="26">26</option> 
                <option value="27">27</option> 
                <option value="28">28</option> 
                <option value="29">29</option> 
                <option value="30">30</option> 
                <option value="31">31</option> 
            </select>
            <select name="Mes" class="selectpicker show-menu-arrow">
                <option selected hidden>Mes</option> 
                <option value="Jan">Enero</option> 
                <option value="Feb">Febrero</option> 
                <option value="Mar">Marzo</option> 
                <option value="Apr">Abril</option> 
                <option value="May">Mayo</option> 
                <option value="Jun">Junio</option> 
                <option value="Jul">Julio</option> 
                <option value="Aug">Agosto</option> 
                <option value="Sep">Septiembre</option> 
                <option value="Oct">Octubre</option> 
                <option value="Nov">Noviembre</option> 
                <option value="Dec">Diciembre</option> 
            </select>
            <input type="submit" class="btn btn-success" value="Filtrar">
        </form>
    </section>



    <div class="row container d-flex">
        <h2 class="text-center">Busqueda</h2>
        <div class="col-sm-12 ">
            <table id="tabla" class="table table-hover table-condensed table-bordered">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Dia semana</th>
                        <th>Mes</th>
                        <th>Dia</th>
                        <th>Hora</th>
                        <th>Codigo</th>
                        <th>Nombre</th>
                        <th>Carrera</th>
                        <th>Acción</th>
                    </tr>
                    <tbody id="busqueda"></tbody>
                </thead>
            </table>
        </div>
    </div>    
   
    <div class="row container d-flex">
        <h2 class="text-center">Citas Ingeniería informática </h2>
        <div class="col-sm-12 ">
            <table id="tabla" class="table table-hover table-condensed table-bordered">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Dia semana</th>
                        <th>Mes</th>
                        <th>Dia</th>
                        <th>Hora</th>
                        <th>Codigo</th>
                        <th>Nombre</th>
                        <th>Carrera</th>
                        <th>Acción</th>
                        
                        
                    </tr>
                    <tr id="valor"></tr>
                    <?php
                        $server = "localhost";
                        $usuario="id14883820_daniel";
                        $pass=">X_0@0i)~^)<(2RV";
                        $bd="id14883820_citas";
                        //conectar a server
                        $cone = mysqli_connect($server,$usuario,$pass,$bd);
                        $sql = "SELECT * FROM DatosCitas WHERE `Carrera`='INNI'";
                        $resultado=mysqli_query($cone,$sql);
                        
                        
                            while($row = mysqli_fetch_row($resultado)){
                                // echo " ".$row['Id']. " ". $row['Dia']." ".$row['Hora']."<br>";
                                    $datos=$row[0] ;
                        
                    ?>
                    
                        <td><?php echo $row[0] ?></td>
                        <td><?php echo $row[1] ?></td>
                        <td><?php echo $row[2] ?></td>
                        <td><?php echo $row[3] ?></td>
                        <td><?php echo $row[4] ?></td>
                        <td><?php echo $row[5] ?></td>
                        <td><?php echo $row[6] ?></td>
                        <td><?php echo $row[7] ?></td>
                        <td>
                            <button class="btn btn-danger glyphicon glyphicon-pencil" onclick="EliminarDatos(<?php echo $row[0]?>)">Eliminar</button>
                        </td>
                        
                    </tr>
                    <?php } 
                // mysqli_close($cone);
                    ?>
                    <tbody id="res"></tbody>
                </thead>
            </table>
        </div>
    </div>        

     
    <script>
         xhttp2.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
               
               // console.log(this.responseText);
                let datos=JSON.parse(this.responseText);
                //console.log(datos);
                let res=document.querySelector('#busqueda');
                res.innerHTML='';
                for(let item of datos){
                    res.innerHTML += `
                    <tr> 
                        <td>${item.id}</td>
                        <td>${item.DiaSemana}</td>  
                        <td>${item.Mes}</td>
                        <td>${item.Dia}</td>  
                        <td>${item.Hora}</td>
                        <td>${item.Codigo}</td>
                        <td>${item.Nombre}</td>
                        <td>${item.Carrera}</td>
                        <td> <button class="btn btn-danger glyphicon glyphicon-pencil" value=${item.id} onclick="EliminarDatos()">Eliminar</button></td>
                    </tr>
                    `
                }
            }
        };
        
        
        var formulario = document.getElementById('formDiaSemana');
            formulario.addEventListener('submit', function(e){
                e.preventDefault();
                var datosDiaSemana = new FormData(formulario);
                
                xhttp2.open("GET", "filtrarDiaSemana.php?carrera="+carrera+"&DiaSemana="+datosDiaSemana.get('DiaSemana'), true);
                xhttp2.send();
            })
    </script>

    <script>
        var formulario2 = document.getElementById('formDiaMes');
            formulario2.addEventListener('submit', function(e){
                e.preventDefault();
                var datosDiaMes = new FormData(formulario2);
                xhttp2.open("GET", "filtrarDiaMes.php?carrera="+carrera+"&Dia="+datosDiaMes.get('Dia')+"&Mes="+datosDiaMes.get('Mes'), true);
                xhttp2.send();
            })
        function EliminarDatos(id){
            //console.log(id);
            const xhttp3 = new XMLHttpRequest();
            xhttp3.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                if(this.responseText==1 ){
                  location.reload();
                    
                }
            }
             };
             xhttp3.open("GET", "BajaCitas.php?id="+id, true);
            xhttp3.send();
        }
        function Preguntar(id){
            alertify.confirm('Eliminar', '¿Estas seguro de eliminar este', function(){ alertify.success('Ok') }
                , function(){ alertify.error('Cancel')});
        }
    </script>
</body>
</html>