function initFullpage() {
  const fullpageConfig = {
    scrollBar: true,
    sectionSelector: '.fullpage-section',
  };
  $('#fullpage').fullpage(fullpageConfig);
  return
};

function initObjectFitPolyfill() {
  /* https://github.com/bfred-it/object-fit-images */
  const $imagesToApplyOn = $('.background-image');
  return objectFitImages($imagesToApplyOn);
};

function initWow() {
  return new WOW().init();
};

function hideBlackCard() {
  $('#black-card').on('animationend', function(e) {
    e.target.style.display = 'none'
  })
}

$(document).ready(function start() {
  initFullpage();
  initObjectFitPolyfill();
  initWow();
  hideBlackCard();
});
