import { newE2EPage } from '@stencil/core/testing';

describe('cv1saraka-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cv1saraka-ambulance-wl-list></cv1saraka-ambulance-wl-list>');

    const element = await page.find('cv1saraka-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
