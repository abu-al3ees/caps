/* eslint-disable no-undef */

'use strict';

const events = require('./events');
const vendor = require('./vendor');
const driver = require('./driver');



// const orderintering = new vendor.Vendor();

setInterval(() => {
  events.emit('pickup', { event: 'pickup', time: `${new Date().toString()}`, payload: vendor.order()});
}, 5000);

events.on('pickup', driver.pickUp);
events.on('in-transit', driver.delivered);
events.on('delivered', vendor.thankYou);
