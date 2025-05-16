import { ICustomWorld } from '../support/custom-world';
//import { compareToBaseImage, getImagePath } from '../utils/compareImages';
import { Given, Then } from '@cucumber/cucumber';

Then('Snapshot', async function (this: ICustomWorld) {
  const { page } = this;
  const image = await page?.screenshot();
  if (image) {
    this.attach(image, 'image/png');
  }
});

Then('debug', function () {
  debugger;
});
