import { formatter, convertCamel } from '../../src/utils/formatter';
import {
	formatterMockData,
	expectPercentageRes,
	expectRotationRes,
	expectConvertRes,
	expectFormattedRes
} from './formatterMockData';

describe('Test formatter', () => {
	const percentageMockData = formatterMockData.filter(({ type }) => type === 'percentage');
	const rotationMockData = formatterMockData.filter(({ type }) => type === 'rotation');
	const convertMockData = formatterMockData.filter(({ type }) => type === 'convert');
	const defaultMockData = formatterMockData.filter(({ type }) => type === 'default');
	test('Should return formatted percentage value', () => {
		const result = percentageMockData.map(item => formatter(item));
		expect(result).toEqual(expectPercentageRes);
	});
	test('Should return formatted rotation value', () => {
		const result = rotationMockData.map(item => formatter(item));
		expect(result).toEqual(expectRotationRes);
	});
	test('Should return formatted convert value', () => {
		const result = convertMockData.map(item => formatter(item));
		expect(result).toEqual(expectConvertRes);
	});
	test('Should return formatted default value', () => {
		const result = defaultMockData.map(item => formatter(item));
		expect(result).toEqual(expectFormattedRes);
	});
	test('Should convert camel string properly', () => {
		const camelStr = 'TestCamelTest';
		const expectRes = 'Test Camel Test';

		const result = convertCamel(camelStr);
		expect(result).toEqual(expectRes);
	});
	test('Should return value directly if not string', () => {
		const noString = 123;
		const expecRes = 123;
		const result = convertCamel(noString);
		expect(result).toEqual(expecRes);
	})
});