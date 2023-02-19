const PANT_TYPE = {
	SOLID: 'SOLID',
	GRADIENT: 'GRADIENT',
	IMAGE: 'IMAGE',
};

const GRADIENT_TYPE = {
	LINEAR: 'linearGradient',
	RADIAL: 'radialGradient',
};

const GRADIENT_OBJ = {
	GradientType: 'gradientType',
	GradientSpots: 'gradientStops'
};

const STYLE_VALUE_TYPE = {
	STRING: 'STRING',
	...PANT_TYPE,
};

const FONT_OBJ = {
	FONT_SIZE: 'fontSize',
	FONT_UNIT: 'fontSizeUnit'
};

const EXCLUD_LIST = [
	'color',
	'paintType',
	'fontSizeUnit',
	GRADIENT_OBJ.GradientSpots,
	GRADIENT_OBJ.GradientType,
];

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

const ABBREVIATION = {
	textDirection: 'textDirection'
};

const ABB_VALUE_MAP = {
	RTL: 'Right to Left',
	LTR: 'Left to Right',
};

const ROTATION = {
	rotation: 'rotation'
};

export {
	GRADIENT_OBJ,
	GRADIENT_TYPE,
	STYLE_VALUE_TYPE,
	FONT_OBJ,
	EXCLUD_LIST,
	PERCENTAGE,
	PX,
	ABBREVIATION,
	ABB_VALUE_MAP,
	ROTATION
};
