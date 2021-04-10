/**
 * Obtiene las imagenes segun la categoria indicada.
 * retorna un aray de imagenes: id, title, url
 * @param category
 * @returns {Promise<*>}
 */

export const getGifs = async (category) => {
	const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=WzhKHycWp9racCy0ebJgQzAZ8msYvcwm`;

	const respuesta = await fetch( url )
	const { data }  = await respuesta.json()
	// console.log( data )
	return data.map( img => {
		return {
			id: img.id,
			title: img.title,
			url: img.images?.downsized_medium.url
		}
	} );
}

// otro get sin async
export const getGifs3 = (category) => {
	const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=WzhKHycWp9racCy0ebJgQzAZ8msYvcwm`;

	return fetch( url )
	.then(res =>res.json())
	.then(data =>{
		const imgs = {data}
		return imgs.map( img => {
			return {
				id: img.id,
				title: img.title,
				url: img.images?.downsized_medium.url
			}
		} );
	})
	.catch(e=> console.log(`Error no se pudo obtener la informacion, error: ${e}`))
}