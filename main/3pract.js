'use srtict'
// первое задание

let price = prompt('стоимость товара');
let money = prompt('количество денег');

if (isNaN(price) || isNaN(money) || price < 0 || money < 0) {
    alert('неверный формат ввода.')
} else if (price == money) {
    alert('покупка совершена')
} else if (price > money) {
    alert(`для покупки не хватает ${price - money} р.`)
} else if (price < money) {
    alert(`ваша сдача ${money - price} р.`)
}

// второе задание

let a = 2;
let b = 2;

let result = (a + b < 4) ? 'мало' : 'много';
alert(result);

// третье задание

let login = 'Привет';
let message = (login === 'Сотрудник') ? 'Привет' :
(login === 'Директор') ? 'Здравствуйте' :
(login === '') ? 'Нет логина' : '';
alert(message); 

// четвертое задание

let login2 = prompt('Введите логин', '');

if (login2 === null || login2 === '') {
  alert('Отменено');
} else if (login2 === 'Админ') {
  let password = prompt('Введите пароль', '');
  if (password === null || password === '') {
    alert('Отменено');
  } else if (password === 'Я главный') {
    alert('Здравствуйте!');
  } else {
    alert('Неверный пароль');
  }
} else {
  alert('Я вас не знаю');
}
