
import React from 'react';
import LinkComponent from '../src/components/LinkComponent';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<LinkComponent page="http://www.instagram.com">Instagram</LinkComponent>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('changes the class on hover', () => {
  const component = renderer.create(
    <LinkComponent page="http://www.facebook.com">Facebook</LinkComponent>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the cb
  tree.props.onMouseEnter();
  // re-render
  tree = component.toJSON();
  // why does the reassignment of tree result in a component
  // with the className hovered?
  // why isn't the order of line 21 & 23 reversed?
  expect(tree).toMatchSnapshot();
  // manually trigger cb
  tree.props.onMouseLeave();
  // re-render
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});