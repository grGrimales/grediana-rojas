import Swal from 'sweetalert2';
import { TYPE_ALERT } from './values.config';



export function basicAlert(icon = TYPE_ALERT.SUCCESS ){
    Swal.fire({
        title: 'Su correo ha sido enviado con éxito',
        text: '¡Gracias'!,
        icon,
        position: 'top-start',
        confirmButtonText: 'X',
        toast: true
      });
}