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
		//console.log('clicked e.target', event.target.id);
		let targetId = event.target.id;
		let targetTitle = event.target.title;

		this.setState(prevState => {
			const updatedShoppinglistItems = prevState.shoppingListItems;
			updatedShoppinglistItems.push({
				id: targetId,
				title: targetTitle
			});
			return {
				shoppingListItems: updatedShoppinglistItems
			};
		});
	}
	emptyCart = () => {
		//console.log('emptycart button', e);
		this.setState(prevState => {
			return {
				shoppingListItems: []
			};
		});
	};

	render() {
		return (
			<div>
				<h2>Shopping List:</h2>
				<div class="shopping-list">
					<GroceryList
						handleClick={this.handleClick}
						items={this.state.groceryItems}
					/>
				</div>
				<div class="shopping-cart">
					<ShoppingCart
						emptyCartClick={this.emptyCart}
						items={this.state.shoppingListItems}
					/>
				</div>
			</div>
		);
	}
}

export default Container;
