/* eslint-disable no-undef */
'use strict';

const driver = require('./driver');
const vendor = require('./vendor');
console.log = jest.fn();


describe('Testing the vendor module', () => {
  const payload = {
    event: 'pickup',
    time: '2019-2-27',
    payload: {
      store: '1-206-flowers',
      orderId: '2bd5d698-217d-4ef2-a707-da5d61112664',
      customer: 'mohammad',
      address: 'Wilfridshire, HI',
    },
  };
  it('vendor should console log some output', () => {
    vendor.thankYou(payload);
    expect(console.log).toHaveBeenCalled();
  });
  it('driver picked up should console log some output', () => {
    driver.pickUp(payload);
    expect(console.log).toHaveBeenCalled();
  });
  it('driver delivered should console log some output', () => {
    driver.delivered(payload);
    expect(console.log).toHaveBeenCalled();
  });
});
