$(document).ready(function() {
    $('#contacto').submit(function(e) {
        var nombre = $('#form-nombre').val();
        var mail = $('#form-mail').val();
        var consulta = $('#form-consulta').val();
        $('#primero').hide();
        $('#gracias').slideDown();
        $('#return-mail').text(mail);
        e.preventDefault();
    })
})
