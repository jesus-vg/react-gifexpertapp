import Imagesloaded from 'imagesloaded';

/**
 * requiere
 * reset.css
 * npm install imagesloaded
 * Doc imagesloaded -> https://imagesloaded.desandro.com/
 *
 * masonry.css
 * https://w3bits.com/tools/masonry-generator/
 *
 *
 * doc
 * https://w3bits.com/css-grid-masonry/
 */


/**
 * Set appropriate spanning to any masonry item
 *
 * Get different properties we already set for the masonry, calculate
 * height or spanning for any cell of the masonry grid based on its
 * content-wrapper's height, the (row) gap of the grid, and the size
 * of the implicit row tracks.
 *
 * @param item Object A brick/tile/cell inside the masonry
 * @link https://w3bits.com/css-grid-masonry/
 */
function resizeMasonryItem(item) {
	/* Get the grid object, its row-gap, and the size of its implicit rows */
	const grid = document.getElementsByClassName( 'masonry' )[0];
	if (grid) {
		const rowGap              = parseInt( window.getComputedStyle( grid ).getPropertyValue( 'grid-row-gap' ) ),
			  rowHeight           = parseInt( window.getComputedStyle( grid ).getPropertyValue( 'grid-auto-rows' ) ),
			  gridImagesAsContent = item.querySelector( '.masonry-content' );

		/*
		 * Spanning for any brick = S
		 * Grid's row-gap = G
		 * Size of grid's implicitly create row-track = R
		 * Height of item content = H
		 * Net height of the item = H1 = H + G
		 * Net height of the implicit row-track = T = G + R
		 * S = H1 / T
		 */
		const rowSpan = Math.ceil( (item.querySelector( '.masonry-content' ).getBoundingClientRect().height + rowGap) / (rowHeight + rowGap) );
		// console.log(2222)
		/* Set the spanning as calculated above (S) */
		item.style.gridRowEnd = 'span ' + rowSpan;
		if (gridImagesAsContent) {
			item.querySelector( '.masonry-content' ).style.height = "auto";
			item.classList.add('animate__zoomIn')
		}
	}
}

let idTemporizador;

/**
 * Apply spanning to all the masonry items
 *
 * Loop through all the items and apply the spanning to them using
 * `resizeMasonryItem()` function.
 *
 * @uses resizeMasonryItem
 * @link https://w3bits.com/css-grid-masonry/
 */
function resizeAllMasonryItems() {
	clearTimeout( idTemporizador ); // reset timer

	idTemporizador = setTimeout( () => {
		// Get all item class objects in one list
		const allItems = document.querySelectorAll( '.masonry-item' );

		/*
		 * Loop through the above list and execute the spanning function to
		 * each list-item (i.e. each masonry item)
		 */
		if (allItems) {
			for (let i = 0; i < allItems.length; i++) {
				resizeMasonryItem( allItems[i] );
			}
		}
	}, 200 );
}

/**
 * Resize the items when all the images inside the masonry grid
 * finish loading. This will ensure that all the content inside our
 * masonry items is visible.
 *
 * @uses ImagesLoaded
 * @uses resizeMasonryItem
 * @link https://w3bits.com/css-grid-masonry/
 */
export const waitForImages = () => {
	const allItems = document.querySelectorAll( '.masonry-item' );

	if (allItems) {
		for (let i = 0; i < allItems.length; i++) {
			Imagesloaded( allItems[i], function (instance) {
				const item = instance.elements[0];
				resizeMasonryItem( item );
			} );
		}
	}
}

/* Resize all the grid items on the load and resize events */
const masonryEvents = ['load', 'resize'];
masonryEvents.forEach( function (event) {
	window.addEventListener( event, resizeAllMasonryItems );
} );

/* Do a resize once more when all the images finish loading */
// waitForImages();