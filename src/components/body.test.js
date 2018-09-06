import React from 'react';
import Body from './body';
import renderer from 'react-test-renderer';

describe('Body Component', () => {
  it('matches Snapshot', () => {
    const tree = renderer.create(<Body/>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
