import { newSpecPage } from '@stencil/core/testing';
import { Cv1sarakaAmbulanceWlList } from '../cv1saraka-ambulance-wl-list';

describe('cv1saraka-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Cv1sarakaAmbulanceWlList],
      html: `<cv1saraka-ambulance-wl-list></cv1saraka-ambulance-wl-list>`,
    });
    const wlList = page.rootInstance as Cv1sarakaAmbulanceWlList;
      const expectedPatients = wlList?.waitingPatients?.length

      const items = page.root.shadowRoot.querySelectorAll("md-list-item");
      expect(items.length).toEqual(expectedPatients);

  });
});
