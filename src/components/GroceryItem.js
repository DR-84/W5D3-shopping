import React from 'react';

const GroceryItem = props => {
	//console.log(props);
	return (
		<button
			onClick={props.handleClick}
			id={props.id}
			title={props.title}
			article={props.article}
		>
			{props.title}
		</button>
	);
};
export default GroceryItem;
