import React from 'react';

const ShoppingCartItem = props => {
	//console.log(props);
	return (
		<button onClick={props.handleClick} id={props.id} title={props.title}>
			{props.title}
		</button>
	);
};
export default ShoppingCartItem;
