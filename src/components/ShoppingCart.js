import React from 'react';
//import GroceryItem from './GroceryItem';
//import ShoppingCart from './ShoppingCart';

class ShoppingCart extends React.Component {
	constructor() {
		super();
		this.state = {
			shoppingListItems: []
		};
	}

	render() {
		return (
			<div>
				<h2>Shopping cart:</h2>
			</div>
		);
	}
}

export default ShoppingCart;
