"use strict";

//###############Carousels##################
//First-screen Carousel
(function () {
  var carousel = document.querySelector('.first-screen__carousel');
  var track = carousel.querySelector('.carousel__track');
  var items = carousel.querySelectorAll('.carousel__item');
  var carouselRange = carousel.querySelector('.carousel-bar__range');
  var trackStep = initTrackStep();
  var trackStart = trackStep; //track default position is on the 2nd slide

  var sliderDisplay = initSliderDisplay();
  var trackOffset = 0;
  var activeItemIndex = 1;
  items.forEach(function (item, index) {
    return item.dataset.index = index;
  });
  carouselRange.max = items.length - 1;
  carouselRange.addEventListener('input', function (e) {
    var target = e.target.value;
    slideTo(target);
  });
  carousel.addEventListener('click', function (e) {
    var clickedItem = e.target.dataset.index;

    if (!clickedItem) {
      return;
    }

    slideTo(clickedItem);
  });

  function initSliderDisplay() {
    var display = carousel.querySelector('.carousel-bar__display');
    display.innerHTML = display.innerHTML.replace(/\d{2}$/, items.length < 10 ? '0' + items.length : items.length);
    return display;
  }

  function initTrackStep() {
    var itemWidth;

    for (var i = 0; i < items.length; i++) {
      if (!items[i].classList.contains('active')) {
        itemWidth = items[i].offsetWidth;
        break;
      }
    }

    var itemMarginLeft = +window.getComputedStyle(items[0]).marginLeft.replace('px', '');
    var itemMarginRigt = +window.getComputedStyle(items[0]).marginRight.replace('px', '');
    return itemMarginLeft + itemWidth + itemMarginRigt; //side-margin + width + side-margin
  }

  function slideTo(target) {
    if (target > activeItemIndex) {
      do {
        nextSlide();
      } while (activeItemIndex != target);
    } else if (target < activeItemIndex) {
      do {
        prevSlide();
      } while (activeItemIndex != target);
    }

    setSliderDisplay(Number(target) + 1);
  }

  function setSliderDisplay(n) {
    sliderDisplay.innerHTML = sliderDisplay.innerHTML.replace(/\d{2}/, n < 10 ? '0' + n : n);
  }

  function prevSlide() {
    items[activeItemIndex].classList.remove('active');
    trackOffset += trackStep;
    --activeItemIndex;

    if (activeItemIndex < 0) {
      activeItemIndex = items.length - 1;
      trackOffset = trackStep * -(activeItemIndex - 1);
    }

    carouselRange.value = activeItemIndex;
    items[activeItemIndex].classList.add('active');
    track.style.transform = "translateX(".concat(trackOffset, "px)");
  }

  function nextSlide() {
    items[activeItemIndex].classList.remove('active');
    trackOffset -= trackStep;
    ++activeItemIndex;

    if (activeItemIndex >= items.length) {
      activeItemIndex = 0;
      trackOffset = trackStart;
    }

    carouselRange.value = activeItemIndex;
    items[activeItemIndex].classList.add('active');
    track.style.transform = "translateX(".concat(trackOffset, "px)");
  }
})(); //How-it-works Carousel


(function () {
  var carousel = document.querySelector('.how-it-works__carousel');
  var track = carousel.querySelector('.carousel__track');
  var items = carousel.querySelectorAll('.carousel__item');
  var carouselRange = carousel.querySelector('.carousel-bar__range');
  var trackStep = initTrackStep();
  var trackStart = 0; //track default position is on the 2nd slide

  var sliderDisplay = initSliderDisplay();
  var trackOffset = 0;
  var activeItemIndex = 0;
  slideTo(1); //start from panda 

  items.forEach(function (item, index) {
    return item.dataset.index = index;
  });
  carouselRange.max = items.length - 1;
  carouselRange.addEventListener('input', function (e) {
    var target = e.target.value;
    slideTo(target);
  });
  carousel.addEventListener('click', function (e) {
    var clickedItem = e.target.dataset.index;

    if (!clickedItem) {
      return;
    }

    slideTo(clickedItem);
  });

  function initSliderDisplay() {
    var display = carousel.querySelector('.carousel-bar__display');
    display.innerHTML = display.innerHTML.replace(/\d{2}$/, items.length < 10 ? '0' + items.length : items.length);
    return display;
  }

  function initTrackStep() {
    var itemWidth;

    for (var i = 0; i < items.length; i++) {
      if (!items[i].classList.contains('active')) {
        itemWidth = items[i].offsetWidth;
        break;
      }
    }

    var itemMarginLeft = +window.getComputedStyle(items[0]).marginLeft.replace('px', '');
    var itemMarginRigt = +window.getComputedStyle(items[0]).marginRight.replace('px', '');
    return itemMarginLeft + itemWidth + itemMarginRigt; //side-margin + width + side-margin
  }

  function slideTo(target) {
    if (target > activeItemIndex) {
      do {
        nextSlide();
      } while (activeItemIndex != target);
    } else if (target < activeItemIndex) {
      do {
        prevSlide();
      } while (activeItemIndex != target);
    }

    setSliderDisplay(Number(target) + 1);
  }

  function setSliderDisplay(n) {
    sliderDisplay.innerHTML = sliderDisplay.innerHTML.replace(/\d{2}/, n < 10 ? '0' + n : n);
  }

  function prevSlide() {
    items[activeItemIndex].classList.remove('active');
    trackOffset += trackStep;
    --activeItemIndex;

    if (activeItemIndex < 0) {
      activeItemIndex = items.length - 1;
      trackOffset = trackStep * -(activeItemIndex - 1);
    }

    carouselRange.value = activeItemIndex;
    items[activeItemIndex].classList.add('active');
    track.style.transform = "translateX(".concat(trackOffset, "px)");
  }

  function nextSlide() {
    items[activeItemIndex].classList.remove('active');
    trackOffset -= trackStep;
    ++activeItemIndex;

    if (activeItemIndex >= items.length) {
      activeItemIndex = 0;
      trackOffset = trackStart;
    }

    carouselRange.value = activeItemIndex;
    items[activeItemIndex].classList.add('active');
    track.style.transform = "translateX(".concat(trackOffset, "px)");
  }
})(); //Pets-in-zoo Carousel


(function () {
  var carousel = document.querySelector('.pets-in-zoo__carousel');
  var track = carousel.querySelector('.carousel__track');
  var items = carousel.querySelectorAll('.carousel__item');
  var carouselRange = carousel.querySelector('.carousel-bar__range');
  var trackStep = initTrackStep();
  var trackStart = trackStep; //track default position is on the 2nd slide

  var sliderDisplay = initSliderDisplay();
  console.log(carousel);
  var trackOffset = 0;
  var activeItemIndex = 1;
  track.style.transform = "translateX(-".concat(trackStart, "px)");
  items.forEach(function (item, index) {
    return item.dataset.index = index;
  });
  carouselRange.max = items.length - 1;
  carouselRange.addEventListener('input', function (e) {
    var target = e.target.value;
    slideTo(target);
  });
  carousel.addEventListener('click', function (e) {
    var clickedItem = e.target.dataset.index;

    if (!clickedItem) {
      return;
    }

    slideTo(clickedItem);
  });

  function initSliderDisplay() {
    var display = carousel.querySelector('.carousel-bar__display');
    display.innerHTML = display.innerHTML.replace(/\d{2}$/, items.length < 10 ? '0' + items.length : items.length);
    return display;
  }

  function initTrackStep() {
    var itemWidth;

    for (var i = 0; i < items.length; i++) {
      if (!items[i].classList.contains('active')) {
        itemWidth = items[i].offsetWidth;
        break;
      }
    }

    var itemMarginLeft = +window.getComputedStyle(items[0]).marginLeft.replace('px', '');
    var itemMarginRigt = +window.getComputedStyle(items[0]).marginRight.replace('px', '');
    return itemMarginLeft + itemWidth + itemMarginRigt; //side-margin + width + side-margin
  }

  function slideTo(target) {
    if (target > activeItemIndex) {
      do {
        nextSlide();
      } while (activeItemIndex != target);
    } else if (target < activeItemIndex) {
      do {
        prevSlide();
      } while (activeItemIndex != target);
    }

    setSliderDisplay(Number(target) + 1);
  }

  function setSliderDisplay(n) {
    sliderDisplay.innerHTML = sliderDisplay.innerHTML.replace(/\d{2}/, n < 10 ? '0' + n : n);
  }

  function prevSlide() {
    items[activeItemIndex].classList.remove('active');
    trackOffset += trackStep;
    --activeItemIndex;

    if (activeItemIndex < 0) {
      activeItemIndex = items.length - 1;
      trackOffset = trackStep * -(activeItemIndex - 1);
    }

    carouselRange.value = activeItemIndex;
    items[activeItemIndex].classList.add('active');
    track.style.transform = "translateX(".concat(trackOffset, "px)");
  }

  function nextSlide() {
    items[activeItemIndex].classList.remove('active');
    trackOffset -= trackStep;
    ++activeItemIndex;

    if (activeItemIndex >= items.length) {
      activeItemIndex = 0;
      trackOffset = trackStart;
    }

    carouselRange.value = activeItemIndex;
    items[activeItemIndex].classList.add('active');
    track.style.transform = "translateX(".concat(trackOffset, "px)");
  }
})(); //##############End of Carousels############