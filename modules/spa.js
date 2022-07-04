const pageTitle = document.querySelector('#pageTitle');
const listView = document.querySelector('#listView');
const newBookAdd = document.querySelector('#newBookAdd');
const contactInfo = document.querySelector('#contactInfo');

export function listBtn(btn1, btn2, btn3) {
  pageTitle.innerHTML = 'All awesome books';
  if (btn1.classList.contains('active') === false) {
    btn1.classList.add('active');
    listView.classList.add('displayOn');
  }
  if (btn2.classList.contains('active') === true) {
    btn2.classList.remove('active');
    newBookAdd.classList.remove('displayOn');
  }
  if (btn3.classList.contains('active') === true) {
    btn3.classList.remove('active');
    contactInfo.classList.remove('displayOn');
  }
}

export function addNewBtn(btn1, btn2, btn3) {
  pageTitle.innerHTML = 'Add new book';
  if (btn1.classList.contains('active') === true) {
    btn1.classList.remove('active');
    listView.classList.remove('displayOn');
  }
  if (btn2.classList.contains('active') === false) {
    btn2.classList.add('active');
    newBookAdd.classList.add('displayOn');
  }
  if (btn3.classList.contains('active') === true) {
    btn3.classList.remove('active');
    contactInfo.classList.remove('displayOn');
  }
}

export function contactUs(btn1, btn2, btn3) {
  pageTitle.innerHTML = 'Contact Information';
  if (btn1.classList.contains('active') === true) {
    btn1.classList.remove('active');
    listView.classList.remove('displayOn');
  }
  if (btn2.classList.contains('active') === true) {
    btn2.classList.remove('active');
    newBookAdd.classList.remove('displayOn');
  }
  if (btn3.classList.contains('active') === false) {
    btn3.classList.add('active');
    contactInfo.classList.add('displayOn');
  }
}