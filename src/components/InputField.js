import React from 'react';

const InputField = () => {
	//console.log(props);
	return (
		<form onSubmit="">
			<label>
				Add to List:
				<input type={'text'} value="--add item here--" />
			</label>
			<input type="submit" value="Submit" />
		</form>
	);
};
export default InputField;
