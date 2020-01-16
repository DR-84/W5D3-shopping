import React from 'react';
import ShoppingCart from './components/ShoppingCart';
import GroceryList from './components/GroceryList';
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
			],
			shoppingListItems: []
		};
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(event) {
		console.log('clicked e.target.id', event.target.title);
		this.setState(prevState => {
			const updatedShoppinglistItems = prevState.shoppingListItems;
			updatedShoppinglistItems.push(event.article);
			return {
				shoppingListItems: updatedShoppinglistItems
			};
		});
	}

	render() {
		return (
			<div>
				<h2>Shopping List:</h2>
				<div>
					<GroceryList
						handleClick={this.handleClick}
						items={this.state.groceryItems}
					/>
				</div>
				<h2>Shopping Cart:</h2>
				<ShoppingCart items={this.state.shoppingListItems} />
			</div>
		);
	}
}

export default Container;
