import { render } from '@testing-library/react';
import ColorGradient from '../src/components/ColorGradient';

jest.mock('../src/components/PaintPreview', () => () => ('PaintPreview'));
jest.mock('../src/utils/utils', () => ({
	convertColorSet: jest.fn((value) => value),
}))


describe('Test ColorGradient', () => {
	test('should render color set properly', () => {
		const props = {
			name: 'name',
			value: [
				{ hexText: '#FFF', position: 0.2, alpha: 100 },
				{ hexText: '#000', position: 0.2, alpha: 100 }
			],
			type: 'type'
		};
		const { container, getAllByText } = render(<ColorGradient {...props} />);
		expect(getAllByText('PaintPreview').length).toEqual(3);
		const positionSpotComp = container.getElementsByClassName('color-position-spot');
		expect(positionSpotComp.length).toEqual(2);
	});
 });
 
