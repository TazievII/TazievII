class CardList {
  constructor(container) {
    this.container = container;
    this.cards = [];
    //Исправлено
  }

  addCard(name, link) {
    this.cards.push(cardElement);
    this.container.appendChild(cardElement.createCard(name, link));
  }

  render(Array) {
    for (let i = 0; i < Array.length; i++) {
      let name, link;
      let arrI = Array[i];
      name = arrI['name'];
      link = arrI['link'];

      this.cards.push(cardElement.createCard(name, link));
      Card.listeners;
    }
  }
}