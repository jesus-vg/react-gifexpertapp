import React, {useState} from 'react';
import PropTypes from 'prop-types';

import Modals, {ModalInfo} from "./Modals";

const AddCategory = ({ setCategories }) => {

	const [inputValue, setInputValue] = useState( '' );

	const handleOnChange = (e) => {
		setInputValue( e.target.value )
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if (inputValue.trim().length > 2) {
			setCategories( cat => {
				const valorRepetido = cat.find( r => r === inputValue.trim() )

				if (valorRepetido) {
					ModalInfo( 'Error', 'Categoria repetido', 'warning' )
					return [...cat]
				} else {
					ModalInfo( 'OK', 'Mostrando imagenes', 'success' )
					return [inputValue, ...cat]
				}
			} )
			setInputValue( '' )

		} else {
			Modals( 'Error', 'Debe Ingresar una categoria mas de dos letras', 'warning' )
		}
	}

	return (
		<form onSubmit={ handleSubmit }>
			<input
				type="text"
				id="inputAdd"
				placeholder='Agregar categoria'
				value={ inputValue }
				onChange={ handleOnChange }
			/>
			<button type="submit">Agregar</button>
		</form>
	);
}

AddCategory.propTypes = {
	setCategories: PropTypes.func.isRequired
};

export default AddCategory;
