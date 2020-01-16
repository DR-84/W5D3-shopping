import React from 'react';
import ShoppingCartItem from './ShoppingCartItem';

const ShoppingCart = function(props) {
	const inCart = props.items.map(item => (
		<ShoppingCartItem
			item={item}
			handleClick={props.handleClick}
			key={item.id}
			title={item.title}
			id={item.id}
		/>
	));

	return (
		<div>
			<h2>Shopping Cart:</h2>
			{inCart}
			<hr></hr>
			<button onClick={props.emptyCartClick}>EMPTY CART!!</button>
		</div>
	);
};

export default ShoppingCart;
