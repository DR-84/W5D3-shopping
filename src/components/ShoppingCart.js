import React from 'react';
import ShoppingCartItem from './ShoppingCartItem';

const ShoppingCart = props => {
	console.log(props);
	return props.items.map(item => (
		<ShoppingCartItem
			item={item}
			handleClick={props.handleClick}
			key={item.id}
			title={item.title}
			id={item.id}
		/>
	));
};

export default ShoppingCart;
