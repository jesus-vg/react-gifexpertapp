import Swal from 'sweetalert2'

export const Modals = (title = 'No title', message = '', icon = 'warning')=> {
	Swal.fire( {
		title: title,
		icon: icon,
		html:message,
		showCloseButton: true,
		showCancelButton: false,
		focusConfirm: false,
		confirmButtonText: 'OK', // <i class="fa fa-thumbs-up"></i> Great!
		// cancelButtonText: '<i class="fa fa-thumbs-down">Cancel</i>',
		// cancelButtonAriaLabel: 'Thumbs down'
	} ).then( r  =>'' )
}

export const ModalInfo = (title = 'No title', message = '', icon = 'warning')=>{
	const Toast = Swal.mixin({
		toast: true,
		position: 'top-end',
		showConfirmButton: false,
		timer: 3000,
		timerProgressBar: true,
		didOpen: (toast) => {
			toast.addEventListener('mouseenter', Swal.stopTimer)
			toast.addEventListener('mouseleave', Swal.resumeTimer)
		}
	})

	Toast.fire( {
		icon: icon,
		title: title,
		html: message
	} ).then( r  => '')
}

export default Modals;