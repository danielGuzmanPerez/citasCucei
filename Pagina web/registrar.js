var formulario = document.getElementById('formulario');
formulario.addEventListener('submit', function(e){
    e.preventDefault();
    var datos = new FormData(formulario);
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var carrera= datos.get("usuario")
            if(this.responseText=="1"){
               var usuario=datos.get('usuario');
                window.location.href="home.php?usuario="+usuario;
            }
        }
    };
    xhttp.open("GET", "loginAdministrador.php?user="+datos.get('usuario')+"&password="+datos.get('pass'), true);
    xhttp.send();
})