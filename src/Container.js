import React from 'react';
import ShoppingCart from './components/ShoppingCart';
//import Grocerylist from './components/GroceryList';
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
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(event) {
		const { title, value } = event.target;
		console.log(title, value);
		this.setState({ [title]: value });
	}

	render() {
		return (
			<div>
				<h2>Shopping List:</h2>
				<div>
					{this.state.groceryItems.map(item => (
						<GroceryItem
							handleClick={this.handleClick}
							key={item.id}
							title={item.title}
						/>
					))}
				</div>
				<h2>Shopping Cart:</h2>
				<ShoppingCart title={this.state.content} />
			</div>
		);
	}
}

export default Container;
