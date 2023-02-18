import { render } from '@testing-library/react';
import StylesList from '../../src/containers/StyleView/StylesList';

const mockChild = jest.fn();

jest.mock('../../src/components/ListItem', () => (props) => {
	mockChild(props);
	return (
		'ListItem'
	)
});
jest.mock('../../src/components/ColorGradient', () => (props) => {
	mockChild(props);
	return (
		'ColorGradient'
	)
});
jest.mock('../../src/components/PaintPreview', () => (props) => {
	mockChild(props);
	return (
		'PaintPreview'
	)
});

describe('Test StylesList', () => {
	afterEach(() => {
		mockChild.mockReset();
	});
  test('Should render List Item', () => {
		const stylesList = {
			fontSize: 24,
			fontSizeUnit: 'px',
		};
		const { container, queryAllByText } = render(
			<StylesList stylesList={stylesList} className="Test" />
		);
		const listItemElems = container.getElementsByClassName('Test');
		expect(listItemElems.length).toEqual(1);
		expect(mockChild).toHaveBeenCalledWith(
			{ name: 'fontSize', type: undefined, value: '24px' }
		);
		expect(queryAllByText('ListItem')[0]).toBeInTheDocument();
	});
	test('Should render Paint Preview', () => {
		const stylesList = {
			paintType: 'SOLID',
			color: [0.149, 0.6941, 1, 1],
		};
		const { container, queryAllByText } = render(
			<StylesList stylesList={stylesList} className="Paint" />
		);
		const PaintPreviewElems = container.getElementsByClassName('Paint');
		expect(PaintPreviewElems.length).toEqual(1);
		expect(mockChild).toHaveBeenCalledWith(
			{ name: '', type: 'SOLID', value: [0.149, 0.6941, 1, 1]}
		);
		expect(queryAllByText('PaintPreview')[0]).toBeInTheDocument();
	});
	test('Should render Color Gradient', () => {
		const stylesList = {
			paintType: 'GRADIENT',
			gradientType: 'LINEAR',
			gradientStops: [
				{ color: [0.9961, 0.5059, 0.5059, 1], position: 0 },
				{ color: [1, 0.6941, 0.4118, 1], position: 0.3 },
				{ color: [1, 0.9412, 0.4118, 0.7], position: 1 },
			],
		};
		const { container, queryAllByText } = render(
			<StylesList stylesList={stylesList} className="Paint" />
		);
		const colorGradientElems = container.getElementsByClassName('Paint');
		expect(colorGradientElems.length).toEqual(1);
		expect(mockChild).toHaveBeenCalledWith(
			{
				name: 'linearGradient',
				type: 'GRADIENT',
				value: [
					{ color: [0.9961, 0.5059, 0.5059, 1], position: 0 },
					{ color: [1, 0.6941, 0.4118, 1], position: 0.3 },
					{ color: [1, 0.9412, 0.4118, 0.7], position: 1 },
				],
			}
		);
		expect(queryAllByText('ColorGradient')[0]).toBeInTheDocument();
	})
})