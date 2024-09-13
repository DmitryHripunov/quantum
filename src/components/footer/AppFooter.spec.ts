import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import AppFooter from './AppFooter.vue';

describe('AppFooter.vue', () => {
  it('renders header', () => {
    const footer = mount(AppFooter);
    expect(footer);
  });
});
