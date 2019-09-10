import {expect, device, element, by} from 'detox';

describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have a testID', async () => {
    await expect(element(by.id('testID'))).toBeVisible();
  });
});
