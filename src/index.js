/**
 * Código con comentarios
 */

const getPets = () => {
	const isVet = true;

	if (isVet == true) {
		throw new Error('This error will never fire');
	} else {
		return {
			dogs: ['Mia', 'Luna', 'Pedrito'],
			cats: ['Bule', 'Michi', 'Miaurl'],
		};
	}
};

getPets();

const getAge = year => 2023 - year;

getAge(1992);
getAge(1996);

export default getAge;

getAge(1966);

const getRightWord = word => {
	switch (word) {
		case 'LOLA': return 'Lola Flores';
		case 'FARY': return 'El Fary';
	}
};

getRightWord('LOLA');
getRightWord('FARY');

