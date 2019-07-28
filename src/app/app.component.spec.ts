console.log(this);
import { AppComponent } from './app.component';

describe('app component test', () => {
  it('should succeed', () => expect(true).toEqual(true));
  it('should have a defined component', () => {
    expect(new AppComponent()).toBeDefined();
  })
  

});