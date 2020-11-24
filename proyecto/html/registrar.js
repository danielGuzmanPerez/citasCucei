var formulario = document.getElementById('formulario');
formulario.addEventListener('submit', function(e){
    e.preventDefault();
    console.log("click");
    var datos = new FormData(formulario);
    console.log(datos.get('usuario'));
    fetch('https://danielguzman27.000webhostapp.com/altaAdministrador.php', {
        method: 'POST',
        body:datos
    })
    .then(Response => Response())
    .then(data => {
        console.log(data);
    } )
})