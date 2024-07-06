document.addEventListener('DOMContentLoaded', () => {

    let form = document.querySelector('#form');
    let mensaje = document.querySelector('#mensaje'); // Se necesita agregar el selector #

    // Capturar la información que escribe el 
    // cliente en el form. Solamente se utiliza cuando quiero capturar
    // información de un input.
    // nombre.value

    // Para frenar el envío del formulario sin información.
    // a la función anónima le paso el atributo event(e) que pertenece
    // a los formularios y a cada uno de los input.

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        let nombre = document.querySelector('#nombreusuario').value;
        let email = document.querySelector('#email').value;
        let contraseña = document.querySelector('#password').value;
        let confirmarContraseña = document.querySelector('#confirm-password').value;

        let esValido = validarForm(nombre, email, contraseña, confirmarContraseña);
        if (esValido) {
            mensaje.style.color = 'green';
            mensaje.textContent = 'Registro exitoso';
        }
    });

    function validarForm(nombre, email, contraseña, confirmarContraseña) {
        if (!nombre || !email || !contraseña || !confirmarContraseña) {
            mensaje.style.color = 'red'; // Para dar feedback visual
            mensaje.textContent = 'Por favor, complete todos los datos';
            return false;
        }
        if (contraseña.length < 6) {
            mensaje.style.color = 'red'; // Para dar feedback visual
            mensaje.textContent = 'La contraseña tiene que tener al menos 6 caracteres';
            return false;
        }
        if (contraseña !== confirmarContraseña) {
            mensaje.style.color = 'red'; // Para dar feedback visual
            mensaje.textContent = 'Las contraseñas no coinciden';
            return false;
        }
        return true;
    }
});
