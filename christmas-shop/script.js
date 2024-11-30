/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/Article.js":
/*!***************************!*\
  !*** ./src/js/Article.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Article: () => (/* binding */ Article)
/* harmony export */ });
class Article {
  constructor(_ref) {
    let {
      name,
      description,
      category,
      ...rest
    } = _ref;
    this.name = name;
    this.description = description;
    this.category = category;
  }

  // Article generator
  generateArticle() {
    let template = '';
    let article = document.createElement('article');
    article.className = 'card';
    let src = '';
    let alt = '';
    let tab = '';
    if (this.category === 'For Work') {
      src = 'src/img/gifts/gift-for-work.png';
      alt = 'gift-for-work';
      tab = 'for-work';
    } else if (this.category === 'For Health') {
      src = 'src/img/gifts/gift-for-health.png';
      alt = 'gift-for-health';
      tab = 'for-health';
    } else if (this.category === 'For Harmony') {
      src = 'src/img/gifts/gift-for-harmony.png';
      alt = 'gift-for-harmony';
      tab = 'for-harmony';
    }
    template += `<img src="${src}" alt="${alt}">`;
    if (this.category || this.name) {
      template += `<div class="card__container">`;
      this.category && (template += `<h4 class="card_tab ${tab}">${this.category}</h4>`);
      this.name && (template += `<h3 class="name">${this.name}</h3>`);
      template += `</div>`;
    }
    article.innerHTML = template;
    return article;
  }
}

/***/ }),

/***/ "./src/js/ArticleModal.js":
/*!********************************!*\
  !*** ./src/js/ArticleModal.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArticleModal: () => (/* binding */ ArticleModal)
/* harmony export */ });
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modal */ "./src/js/Modal.js");

class ArticleModal extends _Modal__WEBPACK_IMPORTED_MODULE_0__.Modal {
  constructor(classes, _ref) {
    let {
      name,
      description,
      category,
      superpowers
    } = _ref;
    super(classes);
    this.name = name;
    this.description = description;
    this.category = category;
    this.superpowers = superpowers;
  }
  getSnowflakes(value) {
    const totalSnowflakes = 5;
    const coloredCount = value / 100;
    const uncoloredCount = totalSnowflakes - coloredCount;
    const coloredSnowflakes = Array(coloredCount).fill(`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="snowflake" clip-path="url(#clip0_10011_840)">
<path id="Vector" d="M18.2942 14.8224L17.4727 14.3481L19.674 13.7583L19.3102 12.4006L15.7512 13.3542L14.0725 12.385C14.0957 12.26 14.1084 12.1315 14.1084 12C14.1084 11.8684 14.0957 11.7398 14.0725 11.6149L15.7512 10.6457L19.3102 11.5994L19.674 10.2416L17.4727 9.65177L18.2942 9.17747L21.8194 8.96588L22.3385 6.03095L19.5373 5.01305L17.5914 7.96016L16.7699 8.43446L17.3598 6.23317L16.002 5.86939L15.0484 9.42842L13.3687 10.3982C13.1741 10.2315 12.949 10.0997 12.7028 10.0124V8.0742L15.3082 5.46879L14.3143 4.47488L12.7028 6.08633V5.13772L14.2772 1.98876L12 0L9.72271 1.98886L11.2972 5.13782V6.08642L9.68569 4.47497L8.69178 5.46889L11.2971 8.0743V10.0125C11.051 10.0998 10.8259 10.2316 10.6312 10.3983L8.95154 9.42852L7.99792 5.86949L6.64018 6.23326L7.23003 8.43456L6.40854 7.96025L4.46269 5.01314L1.66148 6.03104L2.18058 8.96597L5.70578 9.17757L6.52727 9.65187L4.32597 10.2417L4.6898 11.5994L8.24882 10.6458L9.92746 11.615C9.90431 11.74 9.89157 11.8685 9.89157 12C9.89157 12.1316 9.90427 12.2602 9.92746 12.3851L8.24882 13.3543L4.6898 12.4006L4.32597 13.7584L6.52727 14.3482L5.70578 14.8225L2.18058 15.034L1.66148 17.969L4.46274 18.9869L6.40859 16.0397L7.23012 15.5654L6.64028 17.7667L7.99801 18.1306L8.95163 14.5715L10.6313 13.6018C10.826 13.7684 11.0511 13.9003 11.2972 13.9875V15.9258L8.69187 18.5311L9.68579 19.525L11.2973 17.9135V18.8621L9.7228 22.0111L12.0001 24L14.2774 22.0111L12.7029 18.8621V17.9135L14.3144 19.525L15.3083 18.5311L12.7029 15.9258V13.9875C12.9491 13.9003 13.1742 13.7684 13.3689 13.6018L15.0485 14.5715L16.0022 18.1306L17.3599 17.7667L16.7701 15.5654L17.5916 16.0397L19.5374 18.9869L22.3387 17.969L21.8196 15.034L18.2942 14.8224Z" fill="#FF4646"/>
</g>
<defs>
<clipPath id="clip0_10011_840">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
</svg>`).join('');
    const uncoloredSnowflakes = Array(uncoloredCount).fill(`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="snowflake" clip-path="url(#clip0_10199_58)">
<path id="Vector" d="M12.1959 9.88162L11.6482 9.56542L13.1158 9.17219L12.8732 8.26704L10.5005 8.90278L9.38146 8.25667C9.39689 8.17336 9.40538 8.08765 9.40538 7.99997C9.40538 7.91229 9.39692 7.82655 9.38146 7.74327L10.5005 7.09716L12.8732 7.7329L13.1158 6.82775L11.6482 6.43452L12.1959 6.11831L14.546 5.97725L14.8921 4.02063L13.0246 3.34203L11.7274 5.30677L11.1797 5.62297L11.5729 4.15545L10.6678 3.91293L10.032 6.28561L8.91226 6.93211C8.78247 6.82103 8.63242 6.73313 8.4683 6.67494V5.3828L10.2052 3.64586L9.5426 2.98325L8.46827 4.05755V3.42515L9.51792 1.32584L7.99976 0L6.48157 1.3259L7.53122 3.42521V4.05761L6.45689 2.98332L5.79429 3.64592L7.53119 5.38286V6.675C7.36708 6.73319 7.21702 6.82109 7.08724 6.93217L5.96746 6.28568L5.33171 3.91299L4.42656 4.15551L4.81979 5.62304L4.27213 5.30684L2.9749 3.34209L1.10742 4.02069L1.45349 5.97731L3.80362 6.11838L4.35128 6.43458L2.88375 6.82781L3.1263 7.73296L5.49898 7.09722L6.61807 7.74333C6.60264 7.82664 6.59414 7.91235 6.59414 8.00003C6.59414 8.08771 6.60261 8.17345 6.61807 8.25673L5.49898 8.90285L3.1263 8.2671L2.88375 9.17226L4.35128 9.56548L3.80362 9.88169L1.45349 10.0227L1.10742 11.9793L2.97493 12.6579L4.27216 10.6932L4.81985 10.377L4.42662 11.8445L5.33177 12.087L5.96752 9.71435L7.0873 9.06786C7.21708 9.17894 7.36714 9.26684 7.53125 9.32503V10.6172L5.79435 12.3541L6.45696 13.0167L7.53129 11.9424V12.5748L6.48163 14.6741L7.99983 16L9.51802 14.6741L8.46837 12.5748V11.9424L9.5427 13.0167L10.2053 12.3541L8.4684 10.6172V9.32503C8.63251 9.26684 8.78257 9.17894 8.91235 9.06786L10.0321 9.71435L10.6679 12.087L11.573 11.8445L11.1798 10.377L11.7275 10.6932L13.0247 12.6579L14.8922 11.9793L14.5462 10.0227L12.1959 9.88162Z" fill="#FF4646" fill-opacity="0.1"/>
</g>
<defs>
<clipPath id="clip0_10199_58">
<rect width="16" height="16" fill="white"/>
</clipPath>
</defs>
</svg>`).join('');
    return coloredSnowflakes + uncoloredSnowflakes;
  }
  // Article Modal generator
  generateArticleModal() {
    let template = '';
    let articleModal = document.createElement('div');
    articleModal.className = 'article-modal__content';
    let src = '';
    let alt = '';
    let tab = '';
    if (this.category === 'For Work') {
      src = 'src/img/gifts/gift-for-work.png';
      alt = 'gift-for-work';
      tab = 'for-work';
    } else if (this.category === 'For Health') {
      src = 'src/img/gifts/gift-for-health.png';
      alt = 'gift-for-health';
      tab = 'for-health';
    } else if (this.category === 'For Harmony') {
      src = 'src/img/gifts/gift-for-harmony.png';
      alt = 'gift-for-harmony';
      tab = 'for-harmony';
    }
    template += `<img src="${src}" alt="${alt}">`;
    template += `<div class = "card__description">`;
    if (this.category || this.name || this.description) {
      template += `<div class="card__container">`;
      this.category && (template += `<h4 class="card_tab ${tab}">${this.category}</h4>`);
      this.name && (template += `<h3 class="name">${this.name}</h3>`);
      this.description && (template += `<p class="description paragraph">${this.description}</p>`);
      template += `</div>`;
    }
    if (this.superpowers) {
      template += `<div class="superpowers__container">
      <h4>Adds superpowers to:</h4>
      <div class="container">`;
      const superpowers = Object.keys(this.superpowers).map(i => `<div class="superpower">
      <p class="superpower__name paragraph">${i.charAt(0).toUpperCase() + i.slice(1)}</p>
      <p class="paragraph">${this.superpowers[i]}</p>
      <div class="snowflake__container">
      ${this.getSnowflakes(this.superpowers[i])}
      </div>
      </div>`).join('');
      template += superpowers;
      template += `</div>
      </div>`;
    }
    template += `</div>`;
    articleModal.innerHTML = template;
    return articleModal;
  }
  renderModal() {
    let content = this.generateArticleModal();
    super.buildModal(content);
  }
}

/***/ }),

/***/ "./src/js/Hamburger.js":
/*!*****************************!*\
  !*** ./src/js/Hamburger.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hamburger: () => (/* binding */ Hamburger)
/* harmony export */ });
function Hamburger() {
  const hamburgerButton = document.querySelector('.hamburger');
  const mobileNavigation = document.querySelector('.mobile-navigation');
  const mobileNavigationLink = document.querySelectorAll('.mobile-navigation__link');
  hamburgerButton.addEventListener('click', () => {
    if (!hamburgerButton.classList.contains('close')) {
      mobileNavigation.style.left = 0;
      hamburgerButton.classList.add('close');
      document.body.style.overflow = 'hidden';
    } else {
      mobileNavigation.style.left = '769px';
      hamburgerButton.classList.remove('close');
      document.body.style.overflow = 'visible';
    }
  });
  mobileNavigationLink.forEach(nav => {
    nav.addEventListener('click', () => {
      mobileNavigation.style.left = '769px';
      hamburgerButton.classList.remove('close');
      document.body.style.overflow = 'visible';
    });
  });
}

/***/ }),

/***/ "./src/js/Modal.js":
/*!*************************!*\
  !*** ./src/js/Modal.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Modal: () => (/* binding */ Modal)
/* harmony export */ });
class Modal {
  constructor(classes) {
    this.classes = classes;
    this.modal = '';
    this.modalContent = '';
    this.modalCloseBtn = '';
    this.overlay = '';
  }
  buildModal(content) {
    //Overlay
    this.overlay = this.createDomNode(this.overlay, 'div', 'overlay', 'overlay_modal');

    //Modal
    this.modal = this.createDomNode(this.modal, 'div', 'modal', this.classes);

    //Modal content
    this.modalContent = this.createDomNode(this.modalContent, 'div', 'modal__content');

    //Close button
    this.modalCloseBtn = this.createDomNode(this.modalCloseBtn, 'span', 'modal__close-icon');
    this.modalCloseBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M30 10L10 30" stroke="#181C29" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 10L30 30" stroke="#181C29" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    this.setContent(content);
    this.appendModalElements();

    //Bind Events
    this.bindEvents();

    //Open Modal
    this.openModal();
  }
  createDomNode(node, element) {
    node = document.createElement(element);
    for (var _len = arguments.length, classes = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      classes[_key - 2] = arguments[_key];
    }
    node.classList.add(...classes);
    return node;
  }
  setContent(content) {
    if (typeof content === 'string') {
      this.modalContent.innerHTML = content;
    } else {
      this.modalContent.innerHTML = '';
      this.modalContent.appendChild(content);
    }
  }
  appendModalElements() {
    this.modal.append(this.modalCloseBtn);
    this.modal.append(this.modalContent);
    this.overlay.append(this.modal);
  }
  bindEvents() {
    this.modalCloseBtn.addEventListener('click', this.closeModal);
    this.overlay.addEventListener('click', this.closeModal);
  }
  openModal() {
    document.body.append(this.overlay);
    document.body.style.overflow = 'hidden';
  }
  closeModal(e) {
    let classes = e.target.classList;
    if (classes.contains('overlay') || classes.contains('modal__close-icon')) {
      const overlay = document.querySelector('.overlay');
      if (overlay) {
        overlay.remove();
        document.body.style.overflow = 'visible';
      } else {
        return;
      }
    }
  }
}

/***/ }),

/***/ "./src/js/Scroll.js":
/*!**************************!*\
  !*** ./src/js/Scroll.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Scroll: () => (/* binding */ Scroll)
/* harmony export */ });
function Scroll() {
  const buttonUp = document.getElementById('move-up');
  addEventListener('scroll', () => {
    window.scrollY > 300 ? buttonUp.classList.add('active') : buttonUp.classList.remove('active');
  });
}

/***/ }),

/***/ "./src/js/Slider.js":
/*!**************************!*\
  !*** ./src/js/Slider.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Slider: () => (/* binding */ Slider)
/* harmony export */ });
function Slider() {
  let shift = 0;
  const sliderWidth = 1993;
  let offset = 0;
  const slider = document.getElementById('slider');
  const buttonRight = document.getElementById('move-right');
  const buttonLeft = document.getElementById('move-left');
  function getMaxShift() {
    const windowWidth = window.innerWidth > 1440 ? 1440 : window.innerWidth;
    offset = window.innerWidth >= 1440 ? 164 : window.innerWidth > 768 ? 136 : 16;
    return sliderWidth - windowWidth + offset;
  }
  let maxShift = getMaxShift();
  let shifSize = window.innerWidth >= 768 ? Math.round(maxShift / 3) : Math.round(maxShift / 6);
  const updateButtons = () => {
    shift >= maxShift - 1 ? buttonRight.disabled = true : buttonRight.disabled = false;
    shift <= 0 ? buttonLeft.disabled = true : buttonLeft.disabled = false;
  };
  updateButtons();
  buttonRight.addEventListener('click', () => {
    if (shift < maxShift - 1) {
      let moveDistance = shifSize;
      if (shift + moveDistance > maxShift + 1) {
        offset = window.innerWidth >= 768 && window.innerWidth < 1440 ? 124 : 0;
        moveDistance = maxShift - shift - offset;
      }
      shift += moveDistance;
      slider.style.left = -shift + 'px';
      updateButtons();
    }
  });
  buttonLeft.addEventListener('click', () => {
    if (shift > 0) {
      shift -= shifSize;
      if (shift < 0) {
        shift = 0;
      }
      slider.style.left = -shift + 'px';
      updateButtons();
    }
  });
}

/***/ }),

/***/ "./src/js/Timer.js":
/*!*************************!*\
  !*** ./src/js/Timer.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Timer: () => (/* binding */ Timer)
/* harmony export */ });
function Timer() {
  const day = document.getElementById('day');
  const hrs = document.getElementById('hrs');
  const min = document.getElementById('min');
  const sec = document.getElementById('sec');
  let currentDate = new Date();
  let currentYear = currentDate.getUTCFullYear();
  let newYear = new Date(Date.UTC(currentYear + 1, 0, 1));
  let timerDiff = newYear - currentDate;
  let days = Math.floor(timerDiff / 1000 / 60 / 60 / 24);
  let hours = Math.floor(timerDiff / 1000 / 60 / 60 % 24);
  let minutes = Math.floor(timerDiff / 1000 / 60 % 60);
  let seconds = Math.floor(timerDiff / 1000 % 60);
  day.innerText = days;
  hrs.innerText = hours;
  min.innerText = minutes;
  sec.innerText = seconds;
}

/***/ }),

/***/ "./src/gifts.json":
/*!************************!*\
  !*** ./src/gifts.json ***!
  \************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('[{"name":"Bug Magnet","description":"Able to find bugs in code like they were placed there on purpose.","category":"For Work","superpowers":{"live":"+500","create":"+500","love":"+200","dream":"+400"}},{"name":"Console.log Guru","description":"Uses console.log like a crystal ball to find any issue.","category":"For Work","superpowers":{"live":"+500","create":"+500","love":"+200","dream":"+400"}},{"name":"Shortcut Cheater","description":"Knows every keyboard shortcut like they were born with them.","category":"For Work","superpowers":{"live":"+500","create":"+500","love":"+400","dream":"+200"}},{"name":"Merge Master","description":"Merges branches in Git without conflicts, like a wizard during an exam.","category":"For Work","superpowers":{"live":"+200","create":"+500","love":"+200","dream":"+300"}},{"name":"Async Tamer","description":"Handles asynchronous code and promises like well-trained pets.","category":"For Work","superpowers":{"live":"+100","create":"+400","love":"+200","dream":"+300"}},{"name":"CSS Tamer","description":"Can make Flexbox and Grid work together like they were always best friends.","category":"For Work","superpowers":{"live":"+200","create":"+500","love":"+200","dream":"+300"}},{"name":"Time Hacker","description":"Writes code at the last moment but always meets the deadline.","category":"For Work","superpowers":{"live":"+500","create":"+500","love":"+500","dream":"+200"}},{"name":"Layout Master","description":"Creates perfect layouts on the first try, like they can read the designer\'s mind.","category":"For Work","superpowers":{"live":"+500","create":"+300","love":"+200","dream":"+200"}},{"name":"Documentation Whisperer","description":"Understands cryptic documentation as if they wrote it themselves.","category":"For Work","superpowers":{"live":"+500","create":"+500","love":"+200","dream":"+100"}},{"name":"Feedback Master","description":"Accepts client revisions with the Zen calm of Buddha.","category":"For Work","superpowers":{"live":"+300","create":"+500","love":"+300","dream":"+400"}},{"name":"Code Minimalist","description":"Writes code so concise that one line does more than a whole file.","category":"For Work","superpowers":{"live":"+500","create":"+500","love":"+500","dream":"+200"}},{"name":"Pixel-Perfect Magician","description":"Aligns elements to the last pixel, even when the design looks abstract.","category":"For Work","superpowers":{"live":"+500","create":"+500","love":"+400","dream":"+400"}},{"name":"Posture Levitation","description":"Can sit for hours, but maintains perfect posture like a ballerina.","category":"For Health","superpowers":{"live":"+400","create":"+500","love":"+500","dream":"+400"}},{"name":"Step Master","description":"Gets 10,000 steps a day even while sitting at the computer.","category":"For Health","superpowers":{"live":"+400","create":"+300","love":"+500","dream":"+400"}},{"name":"Snack Resister","description":"Ignoring desktop snacks like a strict dietician.","category":"For Health","superpowers":{"live":"+400","create":"+100","love":"+200","dream":"+400"}},{"name":"Hydration Bot","description":"Drinks the recommended 2 liters of water a day like a health-programmed robot.","category":"For Health","superpowers":{"live":"+500","create":"+300","love":"+500","dream":"+500"}},{"name":"Sleep Overlord","description":"Sleeps 6 hours but feels like they had 10.","category":"For Health","superpowers":{"live":"+400","create":"+500","love":"+500","dream":"+500"}},{"name":"Break Guru","description":"Takes a stretch break every hour without forgetting, no matter how focused.","category":"For Health","superpowers":{"live":"+300","create":"+300","love":"+300","dream":"+400"}},{"name":"Eye Protector","description":"Can work all day at the monitor without feeling like their eyes are on fire.","category":"For Health","superpowers":{"live":"+100","create":"+300","love":"+500","dream":"+400"}},{"name":"Stress Dodger","description":"Masters meditation right at the keyboard.","category":"For Health","superpowers":{"live":"+100","create":"+400","love":"+200","dream":"+400"}},{"name":"Yoga Coder","description":"Easily switches from coding to yoga and back.","category":"For Health","superpowers":{"live":"+400","create":"+400","love":"+400","dream":"+400"}},{"name":"Healthy Snacker","description":"Always picks fruit, even when chocolate is within arm’s reach.","category":"For Health","superpowers":{"live":"+400","create":"+300","love":"+200","dream":"+400"}},{"name":"Chair Exerciser","description":"Manages to work out without leaving the chair.","category":"For Health","superpowers":{"live":"+500","create":"+500","love":"+500","dream":"+400"}},{"name":"Caffeine Filter","description":"Drinks coffee at night and still falls asleep with no problem.","category":"For Health","superpowers":{"live":"+400","create":"+300","love":"+500","dream":"+200"}},{"name":"Joy Charger","description":"Finds joy in the little things—even in a build that finishes unexpectedly fast.","category":"For Harmony","superpowers":{"live":"+200","create":"+200","love":"+500","dream":"+500"}},{"name":"Error Laugher","description":"Laughs at code errors like they’re jokes instead of getting angry.","category":"For Harmony","superpowers":{"live":"+300","create":"+200","love":"+500","dream":"+500"}},{"name":"Bug Acceptance Guru","description":"Accepts bugs as part of the journey to perfection — it’s just another task.","category":"For Harmony","superpowers":{"live":"+300","create":"+200","love":"+500","dream":"+400"}},{"name":"Spontaneous Coding Philosopher","description":"Philosophically accepts any client suggestion after a long refactor.","category":"For Harmony","superpowers":{"live":"+300","create":"+200","love":"+500","dream":"+400"}},{"name":"Deadline Sage","description":"Remains zen even when the deadline is close and the project manager is stressed.","category":"For Harmony","superpowers":{"live":"+200","create":"+200","love":"+300","dream":"+500"}},{"name":"Inspiration Maestro","description":"Finds inspiration on an empty screen as if masterpieces are already there.","category":"For Harmony","superpowers":{"live":"+300","create":"+200","love":"+400","dream":"+100"}},{"name":"Peace Keeper","description":"Maintains inner calm even in moments of intense crisis.","category":"For Harmony","superpowers":{"live":"+200","create":"+200","love":"+500","dream":"+500"}},{"name":"Empathy Guru","description":"Feels the team’s mood and can lift everyone’s spirits.","category":"For Harmony","superpowers":{"live":"+500","create":"+200","love":"+500","dream":"+500"}},{"name":"Laughter Generator","description":"Can lighten any tense situation with a joke that even bugs laugh at.","category":"For Harmony","superpowers":{"live":"+300","create":"+200","love":"+200","dream":"+500"}},{"name":"Pause Master","description":"Knows when to just step back from the keyboard and breathe.","category":"For Harmony","superpowers":{"live":"+300","create":"+200","love":"+100","dream":"+100"}},{"name":"Coder Healer","description":"Can support a colleague in their darkest hour, even if it’s a 500 error.","category":"For Harmony","superpowers":{"live":"+300","create":"+200","love":"+500","dream":"+500"}},{"name":"Music Code Curator","description":"Creates work playlists so good, even deadlines follow the rhythm.","category":"For Harmony","superpowers":{"live":"+300","create":"+200","love":"+300","dream":"+200"}}]');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other entry modules.
(() => {
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gifts_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gifts.json */ "./src/gifts.json");
/* harmony import */ var _js_Article__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/Article */ "./src/js/Article.js");
/* harmony import */ var _js_ArticleModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/ArticleModal */ "./src/js/ArticleModal.js");
/* harmony import */ var _js_Timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/Timer */ "./src/js/Timer.js");
/* harmony import */ var _js_Slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/Slider */ "./src/js/Slider.js");
/* harmony import */ var _js_Scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/Scroll */ "./src/js/Scroll.js");
/* harmony import */ var _js_Hamburger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/Hamburger */ "./src/js/Hamburger.js");







window.onload = function () {
  //Render Articles
  if (_gifts_json__WEBPACK_IMPORTED_MODULE_0__) {
    if (window.location.pathname.includes('christmas-shop/gifts.html')) {
      renderArticlesToDom();
    } else {
      renderArticlesToDom(4);
    }
  }

  //Tabs
  addTabsClickHandler();
  if (window.location.pathname.includes('christmas-shop/index.html')) {
    setInterval(_js_Timer__WEBPACK_IMPORTED_MODULE_3__.Timer, 1000);
    (0,_js_Slider__WEBPACK_IMPORTED_MODULE_4__.Slider)();
  } else {
    (0,_js_Scroll__WEBPACK_IMPORTED_MODULE_5__.Scroll)();
  }
  (0,_js_Hamburger__WEBPACK_IMPORTED_MODULE_6__.Hamburger)();
};
const addTabsClickHandler = () => {
  const tabs = document.querySelector('.tabs');
  tabs && tabs.addEventListener('click', e => {
    if (e.target.classList.contains('tab')) {
      let clickedTab = e.target;
      removeActiveTab();
      clickedTab.classList.add('tabs--active');
      if (clickedTab.innerText.toLowerCase() === 'all') {
        showAllCards();
      } else {
        filteredCardsByActiveTab(clickedTab.innerText);
      }
    }
  });
};
const removeActiveTab = () => {
  let tabs = document.querySelectorAll('.tabs .tab');
  tabs.forEach(tab => {
    tab.classList.remove('tabs--active');
  });
};
const showAllCards = () => {
  let cards = document.querySelectorAll('.gifts-cards .card');
  cards.forEach(card => {
    card.classList.remove('card_hidden');
  });
};
const filteredCardsByActiveTab = selected => {
  let cards = document.querySelectorAll('.gifts-cards .card');
  cards.forEach(card => {
    card.classList.add('card_hidden');
    card.querySelectorAll('.card_tab').forEach(tab => {
      if (selected.toLowerCase() === tab.innerText.toLowerCase()) {
        card.classList.remove('card_hidden');
      }
    });
  });
};
const renderArticlesToDom = limit => {
  let giftsCardsBlock = document.querySelector('.gifts-cards');
  let sortedGifts = _gifts_json__WEBPACK_IMPORTED_MODULE_0__.sort(() => Math.random() - 0.5);
  if (limit) {
    sortedGifts = sortedGifts.slice(0, limit);
  }
  generateArticles(sortedGifts).forEach(article => {
    giftsCardsBlock.append(article.generateArticle());
  });
  addGiftsCardsClickHandler();
};
const generateArticles = data => {
  let articles = [];
  data.forEach(article => {
    articles.push(new _js_Article__WEBPACK_IMPORTED_MODULE_1__.Article(article));
  });
  return articles;
};
const addGiftsCardsClickHandler = () => {
  document.querySelector('.gifts-cards').addEventListener('click', e => {
    if (e.target.closest('.card')) {
      let clickedCardName = e.target.querySelector('.name').innerText;
      let clickedGiftsData = getClickedData(clickedCardName);
      renderArticleModalWindow(clickedGiftsData);
    }
  });
};
const getClickedData = name => {
  return _gifts_json__WEBPACK_IMPORTED_MODULE_0__.find(card => card.name.toUpperCase() == name);
};
const renderArticleModalWindow = article => {
  let modal = new _js_ArticleModal__WEBPACK_IMPORTED_MODULE_2__.ArticleModal('article-modal', article);
  modal.renderModal();
};
})();

// This entry needs to be wrapped in an IIFE because it needs to be isolated against other entry modules.
(() => {
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

})();

/******/ })()
;
//# sourceMappingURL=script.js.map