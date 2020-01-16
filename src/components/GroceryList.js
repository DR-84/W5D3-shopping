import React from 'react';
import GroceryItem from './GroceryItem';
import InputField from './InputField';

const GroceryList = props => {
	const inList = props.items.map(item => (
		<GroceryItem
			article={item}
			handleClick={props.handleClick}
			key={item.id}
			title={item.title}
			id={item.id}
		/>
	));
	return (
		<div>
			{inList}

			<InputField />
		</div>
	);
};

export default GroceryList;
