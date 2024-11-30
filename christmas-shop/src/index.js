import gifts from './gifts.json';
import { Article } from './js/Article'
import { ArticleModal } from './js/ArticleModal'
import { Timer } from './js/Timer';
import { Slider } from './js/Slider';
import { Scroll } from './js/Scroll';
import { Hamburger } from './js/Hamburger';

window.onload = function() {
  //Render Articles
  if (gifts) {
    if (window.location.pathname.includes('christmas-shop/gifts.html')) {
      renderArticlesToDom();
    } else {
      renderArticlesToDom(4);
    }
  }

  //Tabs
  addTabsClickHandler();

  if (window.location.pathname.includes('christmas-shop/index.html')) {
    setInterval(Timer, 1000);
    Slider();
  } else {
    Scroll();
  }

  Hamburger();
}

const addTabsClickHandler = () => {
  const tabs = document.querySelector('.tabs');

  tabs &&
  tabs.addEventListener('click', (e) => {
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
  })
}

const removeActiveTab = () => {
  let tabs = document.querySelectorAll('.tabs .tab');
  tabs.forEach(tab => {
    tab.classList.remove('tabs--active');
  })
}

const showAllCards = () => {
  let cards = document.querySelectorAll('.gifts-cards .card')
  cards.forEach(card => {
    card.classList.remove('card_hidden');
  })
}

const filteredCardsByActiveTab = (selected) => {
  let cards = document.querySelectorAll('.gifts-cards .card')
  cards.forEach(card => {
    card.classList.add('card_hidden');
    card.querySelectorAll('.card_tab').forEach(tab => {
      if (selected.toLowerCase() === tab.innerText.toLowerCase()) {
        card.classList.remove('card_hidden');
      }
    })
  })
}

const renderArticlesToDom = (limit) => {
  let giftsCardsBlock = document.querySelector('.gifts-cards');

  let sortedGifts = gifts.sort(() => Math.random() - 0.5);
  if(limit) {
    sortedGifts = sortedGifts.slice(0, limit);
  }
  
  generateArticles(sortedGifts).forEach(article => {
    giftsCardsBlock.append(article.generateArticle());
  })

  addGiftsCardsClickHandler();
}

const generateArticles = (data) => {
  let articles = [];
  data.forEach(article => {
    articles.push(new Article(article))
  });
  return articles;
}

const addGiftsCardsClickHandler = () => {
  document.querySelector('.gifts-cards').addEventListener('click', (e) => {
    if (e.target.closest('.card')) {
      let clickedCardName = e.target.querySelector('.name').innerText
      let clickedGiftsData = getClickedData(clickedCardName);

      renderArticleModalWindow(clickedGiftsData);
    }
  })
}

const getClickedData = (name) => {
  return gifts.find(card => card.name.toUpperCase() == name)
}

const renderArticleModalWindow = (article) => {
  let modal = new ArticleModal('article-modal', article)
  modal.renderModal();
}


