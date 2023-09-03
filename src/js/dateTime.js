'use strict'

//Exercise 1 Создайте дату

let time = new Date(2012, 1, 20, 3, 12);
console.log(time);



//Exercise 2 Покажите день недели

function getWeekDay(date) {  //Можно создать массив с днями недели, и выбрать нужный индекс
    switch (date.getDay()) {
        case 0:
            return 'SUN';
        case 1:
            return 'MON';
        case 2:
            return 'TUS';
        case 3:
            return 'WEN';
        case 4:
            return 'THURS';
        case 5:
            return 'FRI';
        case 6:
            return 'SATUR';
    }
}

let date = new Date(2012, 0, 3);

console.log(getWeekDay(date));




//Exercise 3 День недели в европейской нумерации


function getLocalDay(date) {
    let day = date.getDay();
    return day === 0 ? 7 : day;
}

let date = new Date(2012, 0, 3);  // 3 января 2012 года, вторник, нужно показать 2

console.log( getLocalDay(date) );    



//Exercise 4 Какой день месяца был много дней назад?

function getDateAgo(date, days) {
    let dateClone = new Date(date);
    dateClone.setDate(dateClone.getDate() - days);
    return dateClone.getDate();
}


let date = new Date(2015, 0, 2);

console.log( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
console.log( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
console.log( getDateAgo(date, 365) ); // 2, (2 Jan 2014)




//Exercise 5 Последнее число месяца?

function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}

console.log(getLastDayOfMonth(2012, 1));



//Exercise 6 Сколько сегодня прошло секунд?

function getSecondsToday() {
    let today = new Date();
    return today.getSeconds() + today.getMinutes() * 60 + today.getHours() * 3600;
}

console.log(getSecondsToday());


//Exercise 7 Сколько секунд осталось до завтра?

function getSecondsToTomorrow() {
    let now = new Date();
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    return Math.round((tomorrow - now) / 1000);
}


console.log(getSecondsToTomorrow());


//Exercise 8 Форматирование относительной даты

function formatDate(date) {
    let now = new Date();
    let dateDifference = Math.round((now - date) / 1000);
    if (dateDifference < 1) {
        return 'Pryamo sei4as';
    } else if (dateDifference >= 1 && dateDifference < 60 ) {
        return `${dateDifference} sec nazad`;
    } else if (dateDifference >= 60 && dateDifference < 3600) {
        return `${Math.round(dateDifference / 60)} min. nazad`;
    } else {
        let arrayOfDate = [
            '0' + date.getDate(),
            '0' + (date.getMonth() + 1),
            String(date.getFullYear()),
            '0' + date.getHours(),
            '0' + date.getMinutes()
        ].map( component => component.slice(-2));
        return arrayOfDate.slice(0, 3).join('.') +' ' + arrayOfDate.slice(-2).join(':');
    }
}


console.log( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
console.log( formatDate(new Date(new Date - 86400 * 1000)) );