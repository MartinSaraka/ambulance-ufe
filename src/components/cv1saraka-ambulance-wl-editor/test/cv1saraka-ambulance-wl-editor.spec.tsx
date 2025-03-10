import { newSpecPage } from '@stencil/core/testing';
import { Cv1sarakaAmbulanceWlEditor } from '../cv1saraka-ambulance-wl-editor';

describe('cv1saraka-ambulance-wl-editor', () => {
  it('buttons shall be of different type', async () => {
    const page = await newSpecPage({
      components: [Cv1sarakaAmbulanceWlEditor],
      html: `<cv1saraka-ambulance-wl-editor entry-id="@new"></cv1saraka-ambulance-wl-editor>`,
    });
    let items: any = await page.root.shadowRoot.querySelectorAll("md-filled-button");
    expect(items.length).toEqual(1);
    items = await page.root.shadowRoot.querySelectorAll("md-outlined-button");
    expect(items.length).toEqual(1);

    items = await page.root.shadowRoot.querySelectorAll("md-filled-tonal-button");
    expect(items.length).toEqual(1);
  });
});
