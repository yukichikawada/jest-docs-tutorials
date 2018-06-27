
import React from 'react';
import LinkComponent from '../src/components/LinkComponent';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<LinkComponent page="http://www.facebook.com">Facebook</LinkComponent>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});