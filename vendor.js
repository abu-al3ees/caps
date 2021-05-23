/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'use strict';

require('dotenv').config();

const storeName=process.env.STORE_NAME;
const faker=require('faker');
const events=require('./events');


function Orders(){
  const payload = {
    storeName: process.env.STORE_NAME || storeName,
    orderId: faker.random.uuid(),
    customerName: faker.name.findName(),
    address: faker.address.city(),
  };
  return payload;
}
function thankYou(payload) {
  payload.event = 'delivered';
  console.log(`VENDOR: Thank you for delivering ${payload.payload.orderId}`);
  console.log('EVENT ', payload);
}
module.exports={
  Orders,
  thankYou
};
