const preHeader = document.querySelector('.pre-header');
const mainHeader = document.querySelector('.main-header');
const toTop = document.querySelector('#top');
const toBottom = document.querySelector('#bottom');

window.addEventListener('scroll', function () {
  const scrY = window.scrollY;
  console.log(scrY);
  if (scrY > 100) {
    preHeader.style.display = 'none';
    mainHeader.style.top = '0';
    toTop.style.display = 'flex';
  } else {
    preHeader.style.display = 'block';
    mainHeader.style.top = '';
    toTop.style.display = 'none';
    toBottom.style.display = 'flex';
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
