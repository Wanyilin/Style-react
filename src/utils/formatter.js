const PERCENTAGE = {
	lineHeight: 'lineHeight',
	paragraphSpacing: 'paragraphSpacing',
	characterSpacing: 'characterSpacing',
	wordSpacing: 'wordSpacing',
	paragraphIndent: 'paragraphIndent',
	opacity: 'opacity',
	offset: 'offset',
};

const PX = {
	x: 'x',
	y: 'y',
	width: 'width',
	height: 'height',
};
const UNIT = {
	fontSize: 'fontSize'
};
const ABBREVIATION = {
	textDirection: 'textDirection'
};

const ABB_VALUE_MAP = {
	RTL: 'Right to Left',
	LTR: 'Left to Right',
};

const ROTATION = {
	rotation: 'rotation'
}

const firstCharUpperCase = str => {
	const strSplit = str.split(' ');
	const finalStr = strSplit.reduce((acc, curr) => {
		let string = acc;
		let words = curr.split('');
		words[0] = words[0].toUpperCase();
		string = string.length ? `${string} ${words.join('')}` : words.join('');
		return string;
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
}

const formatter = ({
	name,
	value,
	unit = 'px',
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
		case UNIT.fontSize:
			formattedValue = `${value}${unit}`;
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

export { formatter, convertCamel, toPercentage }
