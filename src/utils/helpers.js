export const isJSON = (val) => {

	try {

		JSON.parse(val);
	} catch (e) {

		return false;
	}

	return true;
};

export const getJSON = (val) => JSON.parse(val);

export const errMessage = (type) => {

	switch (type) {

		case 'URI':
			return 'empty URI';

		case 'TABLE':
			return 'empty TABLE';

		default:
			return 'empty type error message';
	}
};

export const findById = (array, findKey, id) => (
	array.filter(item => item[findKey] === id)[0]
);

export const inArray = (haystack, needle) => {

	let isMatch = false;

	try {

		haystack.forEach(function (item) {

			if(item[key] === needle) {

			}
		});
	} catch (e) {

		return 'Haystack is not array'
	}

	return isMatch;
};