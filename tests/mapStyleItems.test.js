import { mapStyleItems } from '../src/containers/StyleView/utils';
import { GRADIENT_TYPE } from '../src/utils/constants';
describe('Test mapStyleItems', () => {
	test('Should return gradient items', () => {
		const mockData = {
			paintType: 'GRADIENT',
			gradientType: 'LINEAR',
			gradientStops: [
					{ color: [0.9961, 0.5059, 0.5059, 1], position: 0 },
					{ color: [1, 0.6941, 0.4118, 1], position: 0.3 },
					{ color: [1, 0.9412, 0.4118, 0.7], position: 1 }
			],
		};

		const result = mapStyleItems(mockData);
		expect(result[0].name).toEqual(GRADIENT_TYPE.LINEAR);
		expect(result[0].value.length).toEqual(3);
	});
	test('Should return image items with url', () => {
		const url = 'test.jpg'
		const mockData = {
			paintType: 'IMAGE',
			url,
		};
		const result = mapStyleItems(mockData);
		expect(result[0].value).toEqual(url);
	}),
	test('Should return image items with url undefind if url not provided', () => {
		const mockData = {
			paintType: 'IMAGE',
		};
		const result = mapStyleItems(mockData);
		expect(result[0].value).toBeUndefined();
	});
	test('Should return solid paint items', () => {
		const mockData = {
			paintType: 'SOLID',
			color: [0.149, 0.6941, 1, 1],
		};
		const result = mapStyleItems(mockData);
		expect(result[0].name).toEqual('');
	});
	test('Should return font size with unit', () => {
		const unit = 'em'
		const mockData = {
			fontSize: 24,
			fontSizeUnit: unit,
		};
		const result = mapStyleItems(mockData);
		expect(result[0].value).toEqual('24em');
	})
})
