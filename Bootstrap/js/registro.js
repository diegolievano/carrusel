$(document).ready(function () {
    $('#enviar').click(function (e) { 
        e.preventDefault();
        console.log($('input:text[name=nombre]').val());
        console.log($('input:text[name=apellidoPaterno]').val());
        console.log($('input:text[name=apellidoMaterno]').val());
        console.log($('input:text[name=Contraseña').val());
        console.log($('input:text[name=Confirmarcontraseña]').val());
        
    });
});