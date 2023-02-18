import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import ListItem from '../src/components/ListItem';

describe('Testt ListItem', () => {
   test('Should match snapshot', () => {
    const component = renderer.create(
			<ListItem type="type" value="value" name="name" />
		);
		let tree = component.toJSON();
  	expect(tree).toMatchSnapshot();
  });
  test('Should display context as expect', () => {
		const { getByText } = render(
			<ListItem type="type" value="value" name="name" />
		);
		expect(getByText('Name')).toBeInTheDocument();
		expect(getByText('Value')).toBeInTheDocument();
  })
});
