import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import AppHeader from './AppHeader.vue';

describe('AppHeader.vue', () => {
  it('renders header', () => {
    const header = mount(AppHeader);
    expect(header);
  });
});
