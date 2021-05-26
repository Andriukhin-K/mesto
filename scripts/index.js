let editProfile = document.querySelector('.profile__edit');
let popup = document.querySelector('body > .popup');
let closePopup = document.querySelector('.popup__close');

editProfile.addEventListener('click', function() {
    popup.classList.add('popup_opened');
})

closePopup.addEventListener('click', function() {
    popup.classList.remove('popup_opened');  
})




function formPopup() {} // Находим форму в DOM
const containerPopup = document.querySelector(".popup__container");
const savePopup = containerPopup.querySelector('.popup__save'); // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
const nameInput = containerPopup.querySelector(".input_name"); // Воспользуйтесь инструментом .querySelector()
const jobInput = containerPopup.querySelector(".input_job"); // Воспользуйтесь инструментом .querySelector()
const nameProfile = document.querySelector(".profile__name");
const textProfile = document.querySelector(".profile__text");
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
nameInput.value = nameProfile.textContent;
jobInput.value = textProfile.textContent;

function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    // Так мы можем определить свою логику отправки.
    // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    
    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent
    nameProfile.textContent = nameInput.value;
    textProfile.textContent = jobInput.value;
};

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
popup.addEventListener('submit', formSubmitHandler);

savePopup.addEventListener('click', function() {
    popup.classList.remove('popup_opened');  
})


/*let likeElement = ducument.querySelector('.element__like');

likeElement.addEventListener()*/