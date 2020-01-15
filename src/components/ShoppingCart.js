import React from 'react';
import GroceryList from './GroceryList';
//import GroceryList from './GroceryList';
//import ShoppingCart from './ShoppingCart';

class ShoppingCart extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div>
				<h2>Shopping Cart:</h2>
				<GroceryList />
			</div>
		);
	}
}

export default ShoppingCart;
