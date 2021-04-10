import {useEffect, useState} from "react";
import {getGifs} from "../helpers/getGifs";
import {waitForImages} from "../mansory";

export const useFetchGifs = (category) => {
	const [state, setState] = useState( {
		data: [],
		loading: true,
		estado: ''
	} );

	useEffect( () => {
		getGifs( category )
		.then(
			imgs => {
				setState( {
					data: imgs,
					loading: false,
					estado: ''
				} )
			}
		).then(
			waitForImages
		)
		.catch(evt =>{
			console.log(`No se pudo obtener la información ${evt}`)
			setState( {
				data: [],
				loading: false,
				estado: `No se pudo obtener la información ${evt}`
			} )
		})
	}, [category] );

	return state;
}