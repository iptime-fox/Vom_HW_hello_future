const preHeader = document.querySelector('.pre-header');
const mainHeader = document.querySelector('.main-header');
const toTop = document.querySelector('#top');
const toBottom = document.querySelector('#bottom');
const preHeaderHeight = preHeader.offsetHeight;
// console.log(preHeaderHeight);

window.addEventListener('scroll', function () {
  const scrY = window.scrollY;
  // console.log(scrY);
  if (scrY > preHeaderHeight) {
    // preHeader.style.display = 'none';
    mainHeader.style.top = '0';
    mainHeader.style.position = 'fixed';
    // toTop.style.display = 'flex';
  } else {
    // preHeader.style.display = 'block';
    mainHeader.style.top = '';
    mainHeader.style.position = 'relative';
    // toTop.style.display = 'none';
    // toBottom.style.display = 'flex';
  }
});

toTop.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

toBottom.addEventListener('click', function () {
  window.scroll(0, 4000);
});
