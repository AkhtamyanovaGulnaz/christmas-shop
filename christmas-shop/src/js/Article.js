export class Article {
  constructor({ name, description, category, ...rest }) {
    this.name = name;
    this.description = description;
    this.category = category;
  }

  // Article generator
  generateArticle() {
    let template = '';
    let article = document.createElement('article');
    article.className ='card';

    let src = '';
    let alt = '';
    let tab = '';
    if (this.category === 'For Work') {
      src = 'src/img/gifts/gift-for-work.png'
      alt = 'gift-for-work'
      tab = 'for-work'
    } else if (this.category === 'For Health') {
      src = 'src/img/gifts/gift-for-health.png'
      alt = 'gift-for-health'
      tab = 'for-health'
    } else if (this.category === 'For Harmony') {
      src = 'src/img/gifts/gift-for-harmony.png'
      alt = 'gift-for-harmony'
      tab = 'for-harmony'
    }
    template += `<img src="${src}" alt="${alt}">`

    if (this.category || this.name) {
      template += `<div class="card__container">`

      this.category &&
      (template += `<h4 class="card_tab ${tab}">${this.category}</h4>`)

      this.name &&
      (template += `<h3 class="name">${this.name}</h3>`)

      template += `</div>`
    }

    article.innerHTML = template;
    return article;
  }
}