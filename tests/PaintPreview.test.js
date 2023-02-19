import { render } from '@testing-library/react';
import PaintPreview from '../src/components/PaintPreview';
import { rgbaToHexObj } from '../src/utils/utils';

jest.mock('hex-and-rgba/esm', () => ({
	isValidHex: jest.fn(),
}));
jest.mock('../src/utils/utils', () => ({
	rgbaToHexObj: jest.fn(() => ({ hexText: '#RGBAOBG' })),
}));
const mockChild = jest.fn();
jest.mock('styled-components', () => ({
	span: () => (props) => {
		mockChild(props);
		return ('StyledComponent');
	},
}));


describe('Test PaintPreview', () => {
	afterEach(() => {
		mockChild.mockReset();
	});

  test('Should render image', () => {
		const props = {
			name: 'IMAGE',
			type: 'IMAGE',
			value: 'url.jpg',
		};
		const { getByText } = render(
			<PaintPreview {...props} />
		);

		expect(rgbaToHexObj).not.toBeCalled();
		expect(mockChild).toBeCalledWith({
			background: 'url(url.jpg)',
			className: 'color-box',
		});
		expect(getByText('url.jpg')).toBeInTheDocument();
		expect(getByText('StyledComponent')).toBeInTheDocument();
	});

	test('Should render gradient', () => {
		const props = {
			name: 'linearGradient',
			type: 'GRADIENT',
			value: [
				{ hexText: '#FFF', position: 0.2 },
				{ hexText: '#000', position: 0.3 }
			],
		};
		const { getByText } = render(
			<PaintPreview {...props} />
		);
		expect(mockChild).toBeCalledWith({
			background: `linear-gradient(180deg, #FFF 0.2,#000 0.3)`,
			className: 'color-box',
		});
		expect(rgbaToHexObj).not.toBeCalled();
		expect(getByText('Linear Gradient')).toBeInTheDocument();
		expect(getByText('StyledComponent')).toBeInTheDocument();
	});
	test('Should render paint preview with expecting value', () => {
		const props = {
			name: '',
			type: 'SOLID',
			value: [255, 255, 255],
		};
		const { getByText } = render(
			<PaintPreview {...props} />
		);

		expect(mockChild).toBeCalledWith({
			background: '#RGBAOBG',
			className: 'color-box',
		});
		expect(rgbaToHexObj).toBeCalledWith([255, 255, 255]);
		expect(getByText('#RGBAOBG')).toBeInTheDocument();
		expect(getByText('StyledComponent')).toBeInTheDocument();
	});
})
