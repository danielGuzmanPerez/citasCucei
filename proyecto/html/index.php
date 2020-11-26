<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script type="text/javascript" src="http://code.jquery.com/jquery-1.7.1.min.js"></script>
    <link rel="stylesheet" href="css/style.css">
    <title>Citas Cucei</title>
</head>
<body>
    <header>
        <a href="index.html">Citas Cucei</a>
    </header class="header">
    <section class="form-register">
        <h2 class="titulo">Login</h2>
        <form  name="login" id="formulario" >
                <input class="controls" type="text" name="usuario" placeholder="Ingresa tu Nombre de usuario">
                <input class="controls" type="password" name="pass" placeholder="Ingresa tu contraseña">
        
            <a href="registro.html">Registrarse</a>
                <input  type="submit" class="botons" value="Iniciar Sesión" co>
        
        </form>
    </section>
    <script>
        var formulario = document.getElementById('formulario');
        formulario.addEventListener('submit', function(e){
            e.preventDefault();
            var datos = new FormData(formulario);
            const xhttp = new XMLHttpRequest;
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                
                    if(this.responseText=="1"){
                        $.ajax({
                            url:'home.php',
                            type:'POST',
                            data:{datos.get('usuario')},
                        })
                    }
                }
            };
            xhttp.open("GET", "loginAdministrador.php?user="+datos.get('usuario')+"&password="+datos.get('pass'), true);
            xhttp.send();
        })
    </script>
</body>
</html>