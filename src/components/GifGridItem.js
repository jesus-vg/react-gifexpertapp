import React from 'react';

export const GifGridItem = ({ id, title, url }) => {

	return (
		<div className="masonry-item">
			<div className="masonry-content">
				<figure>
					<img src={ url } alt={ title } className=''/>
					<figcaption className="masonry-title">
						{ title }
					</figcaption>
				</figure>
				{/*<div className="masonry-title">
					{ title }
				</div>
				<div className="masonry-description">
					{ title }
				</div>
				<div className="masonry-footer">
					{ title }
				</div>*/}
			</div>
		</div>
	)
}

export default GifGridItem;