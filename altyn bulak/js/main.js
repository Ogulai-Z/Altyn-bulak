
//internet explore не читает метод foreach поэтому можно добавить этот код и он будет знать об этом 
if (window.NodeList && !NodeList.prototype.forEach) {
	NodeList.prototype.forEach = function (callback, thisArg) {
		thisArg = thisArg || window;
		for (var i = 0; i < this.length; i++) {
			callback.call(thisArg, this[i], i, this);
		}
	};
}


/*Фильтр на мобильный устройствах*/
const sidebarToggleBtn = document.querySelector('.menu-icon-wrapper');
const menuIcon = document.querySelector('.menu-icon');
const sidebar = document.querySelector('.sidebar');

//Клик по кнопке для скртыия и показа фильтра и изменение кнопки 
sidebarToggleBtn.onclick = function () {
    menuIcon.classList.toggle('menu-icon-active');
    sidebar.classList.toggle('sidebar--mobile-active');
};

/*Показать еще три карточки */
const btnShowMoreCards = document.querySelector('.btn-more');
const hiddenCards = document.querySelectorAll('.card-link--hidden');

//Клик по кнопке и показ трех скрытых карточек
btnShowMoreCards.addEventListener('click', function () {
    hiddenCards.forEach(function (card) {
        card.classList.remove('card-link--hidden');

    })
    
})

/* покзаать / Скрыть  контент внурти  виджиты */
 const widgets = document.querySelectorAll('.widget');

 //Находим все виджиты  на странице
 widgets.forEach(function (widget) {

    //Слушаем клик внутри виджета 
     widget.addEventListener('click', function (e) {
        //  item.nextElementSibling.hidden = true; скрыть 
        //Если клик по заголоовке тогда скрываем показываем тело виджета 
        if (e.target.classList.contains('widget__title')) {
            e.target.classList.toggle('widget__title--active');
       e.target.nextElementSibling.classList.toggle('widget__body--hidden');
        }

     });
 });

 /*Location кнопка любая */

 const checkboxAny  = document.querySelector('#location-05');
 const topLocationCheckboxes = document.querySelector('[data-location-param]');

 //Выбор кнопки любая  и отключение других чекбоксов
 checkboxAny.addEventListener('change', function () {
     
     if (checkboxAny.checked) {
        topLocationCheckboxes.forEach(function (item) {
        item.checked = false;
    });

     } 
 })

 //отключаем кнопку Любая, при выборе других параметров.
 
//  topLocationCheckboxes.forEach(function (item) {
//     item.addEventListener('change', function () {
//         if (checkboxAny.checked) {
//         checkboxAny.checked = false;
//         }
//     })
// })

//показать еще 3  доп опции с чекбоксами в фильтре 

const showMoreOptions = document.querySelector('.widget__show-hidden');
const hiddenCheckBoxes = document.querySelectorAll('.checkbox--hidden');

showMoreOptions.onclick = function (e) {
    e.preventDefault;


    //Если блоки были скрыты значит показываем
    if (showMoreOptions.dataset.options == 'hidden') {
        hiddenCheckBoxes.forEach(function (item) {
            item.style.display = 'block';
        });
        showMoreOptions.innerText = "Скрыть дополнительные опции";
        showMoreOptions.dataset.options  = 'visible';
      } 
      //если блоки были видны значит скрываем 
      else if (showMoreOptions.dataset.options == 'visible') {
        hiddenCheckBoxes.forEach(function (item) {
            item.style.display = 'none';
        });
        showMoreOptions.innerText = "Показать еще";
        showMoreOptions.dataset.options  = 'hidden';
      }

   
    // showMoreOptions.remove();
   
}