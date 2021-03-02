import Swal from 'sweetalert2';

export function basicAlert() {
    Swal.fire({
        title: 'Su correo ha sido enviado con éxito',
        icon: 'success',
        confirmButtonText: 'Ok',
        toast: true
      })
}