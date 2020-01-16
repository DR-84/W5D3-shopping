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
			shoppingListItems: [{ id: 1, title: 'Kaas' }]
		};
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(e) {
		console.log('clicked e', e);
		console.log('clicked e.target', e.target.title);
		this.setState(prevState => {
			return {
				shoppingListItems: prevState.shoppingListItems
			};
		});
	}

	/* handleClick() {
        this.setState(prevState => {
            return {
                count: prevState.countTwo + 2,
                countTwo: prevState.count + 1
            }
        
        })
    } */

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
