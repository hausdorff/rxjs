import { expect } from 'chai';
import * as Rx from '../src/internal/Rx';

describe('Root Module', () => {
  it('should contain exports from commonjs modules', () => {
    expect(Rx.Observable).to.be.a('function');
  });
});
