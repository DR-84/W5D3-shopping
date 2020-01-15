import React from 'react';

const GroceryItem = function(props) {
	console.log(props);
	return (
		<div>
			<p>{props.title}</p>
		</div>
	);
};

export default GroceryItem;
