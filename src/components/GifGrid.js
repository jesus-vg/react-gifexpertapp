import GifGridItem from "./GifGridItem";
import '../masonry.css';
import '../animations.css';
import {useFetchGifs} from "../hooks/useFetchGifs";
import ProgressBar from "./loading/ProgressBar";

export const GifGrid = ({ category }) => {

	const { data: images, loading, estado } = useFetchGifs( category );

	return (
		<>
			{ loading && <ProgressBar/> }
			{ estado !== '' && estado }
			<h2 className='text-center'>{ category }</h2>
			<div className='masonry-wrapper'>
				<div className="masonry">
					{
						images.map( img =>
							<GifGridItem key={ img.id } { ...img } />
						)
					}
				</div>
			</div>
			<hr/>
		</>
	)
}

export default GifGrid;