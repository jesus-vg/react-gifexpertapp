import React, {useState} from 'react';
import AddCategory from "./AddCategory";
import GifGrid from "./GifGrid";

export const GifExpertApp = () => {
	// const categories = ['One Punch', 'Samurai X', 'Dragon Ball']
	const [categories, setCategories] = useState( ['One Punch'] )

	return (
		<>
			<h2>GifExpertApp</h2>
			<br/>
			<AddCategory setCategories={setCategories}/>
				{
					categories.map( (category) =>
						<GifGrid key={category} category={category}/>
					 )
				}
		</>
	)
}

export default GifExpertApp