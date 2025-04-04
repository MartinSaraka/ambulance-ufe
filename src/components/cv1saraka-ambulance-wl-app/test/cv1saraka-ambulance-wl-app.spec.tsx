import { newSpecPage } from '@stencil/core/testing';
import { Cv1sarakaAmbulanceWlApp } from '../cv1saraka-ambulance-wl-app';

describe('cv1saraka-ambulance-wl-app', () => {

  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [Cv1sarakaAmbulanceWlApp],
      html: `<cv1saraka-ambulance-wl-app base-path="/"></cv1saraka-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual ("cv1saraka-ambulance-wl-editor");

  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [Cv1sarakaAmbulanceWlApp],
      html: `<cv1saraka-ambulance-wl-app base-path="/ambulance-wl/"></cv1saraka-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual("cv1saraka-ambulance-wl-list");
  });
});
