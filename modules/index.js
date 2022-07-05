import { listBtn as list, addNewBtn as addNew, contactUs as contact } from './spa.js';
import { DateTime } from './luxon.js';
import './book.js';

setInterval(() => {
  const date = DateTime.now();
  document.getElementById('date').innerHTML = date.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
}, 1000);

const listBtn = document.querySelector('#list');
const addNewBtn = document.querySelector('#addNew');
const contactUs = document.querySelector('#contact');
listBtn.addEventListener('click', () => {
  list(listBtn, addNewBtn, contactUs);
});
addNewBtn.addEventListener('click', () => {
  addNew(listBtn, addNewBtn, contactUs);
});
contactUs.addEventListener('click', () => {
  contact(listBtn, addNewBtn, contactUs);
});
// // first page load