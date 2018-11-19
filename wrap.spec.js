const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
  it('Returns empty string if empty string was provided', () => {
    expect(wrap('', 10)).to.equal('');
  });
  it('Returns the input string if its length is less than or equal to the max length', () => {
    expect(wrap('short input string', 20)).to.equal('short input string');
    expect(wrap('longer input string!', 20)).to.equal('longer input string!');
  });
  it('Inserts line breaks in the right places', () => {
    expect(
      wrap(
        'Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.',
        20
      )
    ).to.equal(
      'Lorem ipsum dolor\n sit eu amet, elit na\n magna sem amet nulla\n vel purus ac ligula.'
    );
  });
});
