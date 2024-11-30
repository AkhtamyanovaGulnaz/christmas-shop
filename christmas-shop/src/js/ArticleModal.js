import { Modal } from './Modal'

export class ArticleModal extends Modal {
  constructor(classes, { name, description, category, superpowers }) {
    super(classes);
    this.name = name;
    this.description = description;
    this.category = category;
    this.superpowers = superpowers;
  }

  getSnowflakes(value) {
    const totalSnowflakes = 5;
    const coloredCount = value / 100
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
  };

  // Article Modal generator
  generateArticleModal() {
    let template = '';
    let articleModal = document.createElement('div');
    articleModal.className ='article-modal__content';

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
    template += `<div class = "card__description">`

    if (this.category || this.name || this.description) {
      template += `<div class="card__container">`

      this.category &&
      (template += `<h4 class="card_tab ${tab}">${this.category}</h4>`)

      this.name &&
      (template += `<h3 class="name">${this.name}</h3>`)

      this.description &&
      (template += `<p class="description paragraph">${this.description}</p>`)

      template += `</div>`
    }

    if (this.superpowers) {
      template += `<div class="superpowers__container">
      <h4>Adds superpowers to:</h4>
      <div class="container">`

      const superpowers = Object.keys(this.superpowers).map(i => `<div class="superpower">
      <p class="superpower__name paragraph">${i.charAt(0).toUpperCase() + i.slice(1)}</p>
      <p class="paragraph">${this.superpowers[i]}</p>
      <div class="snowflake__container">
      ${this.getSnowflakes(this.superpowers[i])}
      </div>
      </div>`).join('');

      template += superpowers;

      template += `</div>
      </div>`
    }

    template += `</div>`

    articleModal.innerHTML = template;
    return articleModal;
  }
  
  renderModal() {
    let content = this.generateArticleModal();
    super.buildModal(content)
  }
}