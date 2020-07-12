import { OwnerFilterPipe } from './owner-filter.pipe';

describe('OwnerFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new OwnerFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
