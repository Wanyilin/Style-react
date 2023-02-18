import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import ColorGradient from '../src/components/ColorGradient';


jest.mock('../src/utils/utils', () => ({
	convertColorSet: jest.fn((value) => value),
}))


describe('Test ColorGradient', () => {
	test('Should match snapshot', () => {
		const value = ['color1', 'color2'];
		const component = renderer.create(
			<ColorGradient type="type" value={value} name="name" />
		);
		let tree = component.toJSON();
		expect(tree).toMatchSnapshot();
	});
	test('Should display context as expect', () => {
		const value = ['color1', 'color2'];
		const { container } = render(
			<ColorGradient type="type" value={value} name="name" />
		);
		const lineNode = container.getElementsByClassName('line');
		const circleNode = container.getElementsByClassName('circle');
		expect(lineNode.length).toEqual(1);
		expect(circleNode.length).toEqual(2);
	})
 });
 
