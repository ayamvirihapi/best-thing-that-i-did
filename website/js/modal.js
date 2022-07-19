/* Редирект */
function redirect() {
  window.location = 'http://artemsashcheka.ru/site/site/news.html';
}

function services__redirect() {
  window.location = 'http://artemsashcheka.ru/site/site/services.html';
}

$(document).ready(function() {

  /* Маска для телефона */
  $('.phone').mask("+7(999)999-99-99",{placeholder:"+7(___)___-__-__"});

  var modal = $('#modal');
  var phone = $('#phone');
  var close = $('#close');
  var contacts = $('.contacts');
  var footer__contacts = $('#footer__contacts');
  var button__call = $('#button__call');
  var button__reception = $('#button__reception');
  var news__button1 = $('#news__button1');
  var news__button2 = $('#news__button2');
  var question__link1 = $('#question__link1');
  var question__link2 = $('#question__link2');
  var question__link3 = $('#question__link3');
  var main__button = $('#main__button');
  var alert__button = $('#alert__button');
  var services__item1 = $('.services-list__item1');
  var services__item2 = $('.services-list__item2');
  var services__item3 = $('.services-list__item3');
  var footer__contacts1 = $('.footer__contacts1');
  var footer__contacts2 = $('.footer__contacts2');
  var footer__contacts3 = $('.footer__contacts3');
  var overlay = $('.overlay');
  var navBurger = $('.navBurger');

  /* Закрытие overlay при нажатии на пункт "Контакты" */

  contacts.on('click', function() {
    navBurger.removeClass('active');
    overlay.removeClass('open');
    return false;
  });

  /* Footer__contacts */

  footer__contacts1.on('click', function() {
    services__item1.addClass('services__active');
    services__item2.removeClass('services__active');
    services__item3.removeClass('services__active');
  });

  footer__contacts2.on('click', function() {
    services__item2.addClass('services__active');
    services__item1.removeClass('services__active');
    services__item3.removeClass('services__active');
  });

  footer__contacts3.on('click', function() {
    services__item3.addClass('services__active');
    services__item2.removeClass('services__active');
    services__item1.removeClass('services__active');
  });

  /* Services-list__item */

  services__item1.on('click', function() {
    services__item1.addClass('services__active');
    services__item2.removeClass('services__active');
    services__item3.removeClass('services__active');
  });

  services__item2.on('click', function() {
    services__item2.addClass('services__active');
    services__item1.removeClass('services__active');
    services__item3.removeClass('services__active');
  });

  services__item3.on('click', function() {
    services__item3.addClass('services__active');
    services__item2.removeClass('services__active');
    services__item1.removeClass('services__active');
  });

  /* Кнопки */

  alert__button.on('click', function() {
    modal.addClass('modal_active');
    return false;
  });

  main__button.on('click', function() {
    modal.addClass('modal_active');
    return false;
  });

  question__link1.on('click', function() {
    modal.addClass('modal_active');
    return false;
  });

  question__link2.on('click', function() {
    modal.addClass('modal_active');
    return false;
  });

  question__link3.on('click', function() {
    modal.addClass('modal_active');
    return false;
  });

  news__button2.on('click', function() {
    modal.addClass('modal_active');
  });

  news__button1.on('click', function() {
    modal.addClass('modal_active');
  });

  button__call.on('click', function() {
    modal.addClass('modal_active');
  });

  button__reception.on('click', function() {
    modal.addClass('modal_active');
  });

  phone.on('click', function() {
    modal.addClass('modal_active');
  });

  contacts.on('click', function() {
    modal.addClass('modal_active');
    return false;
  });

  footer__contacts.on('click', function() {
    modal.addClass('modal_active');
    return false;
  });

  close.on('click', function() {
    $('#box')[0].reset();
    modal.removeClass('modal_active');
  });

  /* Валидация формы mail */


});