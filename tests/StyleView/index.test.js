import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import StyleView from '../../src/containers/StyleView';

jest.mock('../../src/containers/StyleView/StylesList', () => () => (
	'Styles List'
));

describe('StyleView', () => {
	test('Should match snapshot', () => {
		const component = renderer.create(<StyleView />);
		let tree = component.toJSON();
  	expect(tree).toMatchSnapshot();
	});
	test('Should render Style view correctly', () => {
		const { container, getByText } = render(
			<StyleView />,
		);
		const categoriesElems = container.getElementsByClassName('category-title');
		expect(categoriesElems.length).toEqual(3);
		expect(getByText('Styles List')).toBeInTheDocument();
	})
});
