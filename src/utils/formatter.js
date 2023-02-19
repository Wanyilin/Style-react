import {
	PERCENTAGE,
	PX,
	ABBREVIATION,
	ABB_VALUE_MAP,
	ROTATION
} from './constants';

const firstCharUpperCase = str => {
	const strSplit = str.split(' ');
	const finalStr = strSplit.reduce((acc, curr) => {
		let words = `${curr[0].toUpperCase()}${curr.slice(1)}`
		return acc.length ? `${acc} ${words}` : words;;
	}, '');
	return finalStr;
};
const convertCamel = str => {
	if (typeof str !== 'string') return str;
	const replaceUpperCase = str.replace(/[A-Z]/g, letter => ` ${letter}`).trim();
	const title = firstCharUpperCase(replaceUpperCase);
	return title;
};

const convertScreamSnake = str => {
	if (typeof str !== 'string') return str;
	const replaceDash = str.replace(/([-_])/ig, ' ').toLowerCase().trim();
	const title = firstCharUpperCase(replaceDash);
	return title;
};

const toPercentage = value => {
	if (isNaN(value)) return value;
	if (value === 0) return '0%';
	return `${value * 100}%`
};

const toRoatation = value => {
	if (isNaN(value)) return value;
	if (value === 0) return '0º';
	return `${Math.round(value * 180 / Math.PI)}º`;
};

const toRgbNum = value => {
	if (isNaN(value)) return '';
	if (value === 0) return 0;
	return Math.round(value * 255);
}
const formatter = ({
	name,
	value,
}) => {
	let formattedValue;
	switch (name) {
		case PERCENTAGE.lineHeight:
		case PERCENTAGE.paragraphSpacing:
		case PERCENTAGE.characterSpacing:
		case PERCENTAGE.wordSpacing:
		case PERCENTAGE.paragraphIndent:
		case PERCENTAGE.opacity:
		case PERCENTAGE.offset:
			formattedValue = toPercentage(value);
			break;
		case PX.x:
		case PX.y:
		case PX.width:
		case PX.height:
			formattedValue = `${value}px`;
			break;
		case ABBREVIATION.textDirection:
			formattedValue = ABB_VALUE_MAP[value] ?? value;
			break;
		case ROTATION.rotation:
			formattedValue = toRoatation(value);
			break;
		default:
			formattedValue = convertScreamSnake(value);
			break;
	}
	return formattedValue;
}

export { formatter, convertCamel, toPercentage, toRgbNum }
