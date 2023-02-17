const formatterMockData = [
	{
		name: 'lineHeight',
		value: 1,
		type: 'percentage',
	}, {
		name: 'paragraphSpacing',
		value: 0.2,
		type: 'percentage',
	}, {
		name: 'paragraphIndent',
		value: 0,
		type: 'percentage'
	}, {
		name: 'textDirection',
		value: 'LTR',
		type: 'default'
	}, {
		name: 'textDirection',
		value: 'YYY',
		type: 'default',
	}, {
		name: 'x',
		value: 1123,
		type: 'default',
	}, {
		name: 'fontSize',
		value: 1123,
		unit: 'em',
		type: 'default',
	}, {
		name: 'rotation',
		value: 0.174532925199433,
		type: 'rotation',
	}, {
		name: 'rotation',
		value: 0,
		type: 'rotation',
	}, {
		name: 'rotation',
		value: 'rotate',
		type: 'rotation',
	}, {
		name: 'textCases',
		value: 'testTEST',
		type: 'convert',
	}, {
		blendMode: 'textCases',
		value: 'test_TEST',
		type: 'convert',
	}, {
		blendMode: 'X',
		value: 123,
		type: 'convert',
	}
];

const expectPercentageRes = [
	'100%',
	'20%',
	'0%',
];

const expectRotationRes = [
	'10º',
	'0º',
	'rotate',
];

const expectConvertRes = [
	'Testtest',
	'Test Test',
	123,
];


const expectFormattedRes= [
	'Left to Right',
	'YYY',
	'1123px',
	'1123em',
];


export {
	formatterMockData,
	expectPercentageRes,
	expectRotationRes,
	expectConvertRes,
	expectFormattedRes
};