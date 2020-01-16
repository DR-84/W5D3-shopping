import React from 'react';
import GroceryList from './GroceryList';
import GroceryItem from './GroceryItem';
//import ShoppingCart from './ShoppingCart';

class ShoppingCart extends React.Component {
	constructor(props) {
		super(props);
		console.log(props);
		this.state = {
			shoppingListItems: []
		};
		console.log(this.state.title);
	}

	render() {
		return <div>{this.state.title}</div>;
	}
}

export default ShoppingCart;
