import React from 'react';

const GroceryItem = props => (
	<button onClick={() => props.handleClick(props.title)}>{props.title}</button>
);

export default GroceryItem;
