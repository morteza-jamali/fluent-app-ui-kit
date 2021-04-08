import React from 'react';
import { render } from '@testing-library/react';
import { BasicContextualMenu } from './contextual-menu.composition';

describe('contextual-menu', () => {

  it('should render with the correct text', () => {
    const { getByText } = render(<BasicContextualMenu />);
    const rendered = getByText('hello from ContextualMenu');
    expect(rendered).toBeTruthy();
  });

})