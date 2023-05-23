$(document).ready(function() {
    $('#contacto').submit(function(event) {
      event.preventDefault();
  
      var nombre = $('#form-nombre').val();
      var mail = $('#form-mail').val();
      var consulta = $('#form-consulta').val();
  
      var errors = {};
  
      if (!nombre) {
        errors.nombre = 'Por favor, ingresa tu nombre';
      }
  
      if (!mail) {
        errors.mail = 'Por favor, ingresa tu correo electrónico';
      } else if (!isValidEmail(mail)) {
        errors.mail = 'Por favor, ingresa un correo electrónico válido';
      }
  
      if (!consulta) {
        errors.consulta = 'Por favor, ingresa una consulta';
      }
  
        //Si no hay errores manda el form
      if (Object.keys(errors).length === 0) {
        sendForm(mail);
      }

    $('.error').empty();

    // Mostrar mensajes de error
    if (errors.nombre) {
      $('#error-nombre').text(errors.nombre);
    }

    if (errors.mail) {
      $('#error-mail').text(errors.mail);
    }

    if (errors.consulta) {
      $('#error-consulta').text(errors.consulta);
    }

    });
  
    function isValidEmail(email) {
        var emailChar = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailChar.test(email);
    }
  
    function sendForm(mail) {
        $('#primero').hide();
        $('#gracias').slideDown();
        $('#return-mail').text(mail);
        setTimeout(function() {
            window.location.href = 'index.html'; 
          }, 10000); // 10000 milisegundos = 10 segundos
    }
  });