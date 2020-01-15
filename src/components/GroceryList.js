import React from 'react';
import GroceryItem from './GroceryItem';

/* class GroceryList extends React.Component {
	constructor() {
		super();
		this.state = {
			groceryItems: [
				{ id: 1, title: 'Kaas' },
				{ id: 2, title: 'Brood' },
				{ id: 3, title: 'Bier' },
				{ id: 4, title: 'Thee' },
				{ id: 5, title: 'Worteltjestaart' }
			]
		};
	}

	render() {
		const items = this.state.groceryItems.map(item => (
			<GroceryItem key={item.id} title={item.title} />
		)) return (
			<div>
				<GroceryItem />
				<h2>Shopping list:</h2>
				{items}
			</div>
		);
	}
} */

const GroceryList = function() {
	return (
		<ul>
			<GroceryItem />
		</ul>
	);
};

export default GroceryList;
