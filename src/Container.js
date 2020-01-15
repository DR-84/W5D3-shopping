import React from 'react';
import ShoppingCart from './components/ShoppingCart';
import Grocerylist from './components/GroceryList';
import GroceryItem from './components/GroceryItem';
/* function Container() {
	return (
		<div>
			<Grocerylist />
			<ShoppingCart />
		</div>
	);
}

export default Container; */

class Container extends React.Component {
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
		));
		return (
			<div>
				<Grocerylist />
				{items}
				<ShoppingCart />
			</div>
		);
	}
}

export default Container;
