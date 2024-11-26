export class Modal {
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

  createDomNode(node, element, ...classes){
    node = document.createElement(element);
    node.classList.add(...classes);
    return node;
  };

  setContent(content) {
    if(typeof content === 'string') {
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
    this.modalCloseBtn.addEventListener('click', this.closeModal)
    this.overlay.addEventListener('click', this.closeModal)
  }

  openModal() {
    document.body.append(this.overlay);
    document.body.style.overflow = 'hidden';
  }

  closeModal(e) {
    let classes = e.target.classList
    if (classes.contains('overlay') || classes.contains('modal__close-icon')) {
      const overlay = document.querySelector('.overlay');
      if (overlay) { 
        overlay.remove();
        document.body.style.overflow = 'visible';
      } else {
        return
      }
    }
  }
}