//FOR MODEL WINDOW
const model = document.querySelector('.model');
const model_2 = document.querySelector('.model-2');
const login = document.querySelector('#log-in');

const book = document.querySelector('.fa-calendar-check');
book.addEventListener('click', e => {
  model.style.display = 'block';
});

model.addEventListener('click', e => {
  if (e.target == model) {
    model.style.display = 'none';
  }
});

login.addEventListener('click', e => {
  model_2.style.display = 'block';
});

model_2.addEventListener('click', e => {
  if (e.target == model_2) {
    model_2.style.display = 'none';
  }
});

$(document).ready(function() {
  var scrollLink = $('.scroll');

  // Smooth scrolling
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate(
      {
        scrollTop: $(this.hash).offset().top
      },
      1000
    );
  });
});
