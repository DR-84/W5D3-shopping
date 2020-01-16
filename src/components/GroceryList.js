import React from 'react';
import GroceryItem from './GroceryItem';

const GroceryList = props => {
	//console.log(props);
	return props.items.map(item => (
		<GroceryItem
			article={item}
			handleClick={props.handleClick}
			key={item.id}
			title={item.title}
			id={item.id}
		/>
	));
};

export default GroceryList;
