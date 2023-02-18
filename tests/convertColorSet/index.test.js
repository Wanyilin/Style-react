jest.mock('hex-and-rgba/esm', () => ({
	rgbaToHex: jest.fn(),
}));
// mock modules first preventing for getting origin module

import { convertColorSet } from '../../src/utils/utils';
const { rgbaToHex } = require('hex-and-rgba/esm');


describe('Test ConverColorSet', () => {
	rgbaToHex.mockImplementation((data) => data.join(''));
	test('should convert array of rgba to hex color set', () => {
		const rgbaList = [
			{
				color: [1, 1, 1, 0.3],
				position: 0.2,
			}, {
				color: [0, 0, 0, 0.1],
				position: 1,
			}
		];

		const expectRes = [
			{
				color: [1, 1, 1, 0.3],
				position: '20%',
				hexText: '255255255',
				alpha: '30%',
			}, {
				color: [0, 0, 0, 0.1],
				position: '100%',
				hexText: '000',
				alpha: '10%',
			}
		];

		const result = convertColorSet(rgbaList);
		expect(result).toEqual(expectRes);
		expect(rgbaToHex).toBeCalledTimes(2);
	})
})
