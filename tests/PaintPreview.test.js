import { render } from '@testing-library/react';
import PaintPreview from '../src/components/PaintPreview';
import { rgbaToHexObj } from '../src/utils/utils';


jest.mock('../src/utils/utils', () => ({
	rgbaToHexObj: jest.fn(() => ({ hexText: 'test' })),
}));


describe('Test PaintPreview', () => {
  test('Should render image', () => {
		const props = {
			name: 'IMAGE',
			type: 'IMAGE',
			value: 'url.jpg',
		};
		const { container, getByText } = render(
			<PaintPreview {...props} />
		);
		
		const imageElems = container.getElementsByClassName('color-box');
		expect(imageElems.length).toEqual(1);
		expect(getByText('url.jpg')).toBeInTheDocument();
	});

	test('Should render gradient', () => {
		const props = {
			name: 'linearGradient',
			type: 'GRADIENT',
			value: [
				{ hexText: 'testHex', position: 0.2 }
			],
		};
		const { container, getByText } = render(
			<PaintPreview {...props} />
		);
		const gradientElems = container.getElementsByClassName('color-box');
		expect(gradientElems.length).toEqual(1);
		expect(getByText('Linear Gradient')).toBeInTheDocument();
	});
	test('Should render gradient', () => {
		const props = {
			name: '',
			type: 'SOLID',
			value: [255, 255, 255],
		};
		const { container, getByText } = render(
			<PaintPreview {...props} />
		);
		const gradientElems = container.getElementsByClassName('color-box');
		expect(gradientElems.length).toEqual(1);
		expect(rgbaToHexObj).toBeCalledWith([255, 255, 255]);
		expect(getByText('test')).toBeInTheDocument();
	});
})
