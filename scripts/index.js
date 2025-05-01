const cardTemplate = document.querySelector('#card-template').content;
const formButton = document.querySelector('.card_create');
const placesList = document.querySelector('.places__list');

function render() {
  initialCards.forEach((cardData) => {
    const cardElement = createCard(cardData, deleteCard);
    placesList.append(cardElement);
  });
}


// Функция создания карточки
function createCard(cardData, deleteCallback) {
  // Клонируем шаблон
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  
  // Находим элементы
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  const deleteButton = cardElement.querySelector('.card__delete-button');
  const likeButton = cardElement.querySelector('.card__button-like');

  // Заполняем данные
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardTitle.textContent = cardData.name;

  // Обработчик удаления 
  deleteButton.addEventListener('click', () => {
    deleteCallback(cardElement); 
  });




  return cardElement;
}

// Функция удаления карточки
function deleteCard(card) {
  card.remove();
}


render();