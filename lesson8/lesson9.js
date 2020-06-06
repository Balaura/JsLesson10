
// Какое будет выведено значение: let x = 5; alert( x++ ); ?
// 5

// Чему равно такое выражение: [ ] + false - null + true ?
// nan

// Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?
// 2

// Чему равна сумма [ ] + 1 + 2?
// 12

// Что выведет этот код: alert( "1"[0] )?
// 1
// Чему равно 2 && 1 && null && 0 && undefined ?false
// Есть ли разница между выражениями? !!( a && b ) и (a && b)?
// net
// Что выведет этот код: alert( null || 2 && 3 || 4 ); ?
// 3
// a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?
// net
// Что выведет этот код: alert( +"Infinity" ); ?
// Infinity
// Верно ли сравнение: "ёжик" > "яблоко"?
// da

// Чему равно 0 || "" || 2 || undefined || true || falsе 2 ?

"use strict";

let money, time;

function start () {
     money = prompt('Ваш бюджет на месяц?', '');
     time = prompt('Введите дату в формате YYYY-MM-DD', '');
     
     while(isNaN(money) || money == '' || money == null) {
          money = prompt('Ваш бюджет на месяц?', '');
     }
}
start ();

let  AppData = {
     budget: money,
     timeData: time,
     expenses: {},
     optionalExpenses: {},
     income: [],
     savings: true
};
// let i = 0;
// while (i < 2) {
//      let a = +prompt('Введите обязательную статью расходов в этом месяце', ''),
//           b = prompt('Во сколько обойдется?', ''); 
//      if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.lenght < 50) {
//           console.log("done");
//           AppData.expenses[a] = b;
//      } else {

//      }
//      i++; 
// }
// let i = 0;
// do {
//      i++; 
// }
// while (i < 2) {
//      let a = +prompt('Введите обязательную статью расходов в этом месяце', ''),
//           b = prompt('Во сколько обойдется?', ''); 
//      if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.lenght < 50) {
//           console.log("done");
//           AppData.expenses[a] = b;
//      } else {
          
//      }
// }
function chooseExpenses () {
     for (let i = 0; i < 2; i++) {
          let  a = +prompt('Введите обязательную статью расходов в этом месяце', ''),
               b = prompt('Во сколько обойдется?', '');
          if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.lenght < 50) {
               console.log("done");
               AppData.expenses[a] = b;
          } else {
     
          }
     }
}
chooseExpenses();

function detectDayBudget () {
     AppData.moneyPerDay = (AppData.budget / 30).toFixed();
     alert ('Бюджет на один день ' + AppData.moneyPerDay + 'руб.');
}
detectDayBudget();

function detectLevel () {
     if(AppData.moneyPerDay <100) {
          console.log("Минимальный уровень достатка");
     } else if (AppData.moneyPerDay > 100 && AppData.moneyPerDay < 2000) {
          console.log("Средний уровень достатка");
     } else if (AppData.moneyPerDay < 2000) {
          console.log("Максимаьный уровень достатка");
     } else {
          console.log("Error");
     }
}
detectLevel();

function checkSavings() {
     if (AppData.savings == true) {
          let save = +prompt('Какова сумма накопления?'),
               percent = +prompt('Какой процент?');
          AppData.monthIncome = save/100/12*percent;
          alert('Доход в месяц с вашего депозита: ' + AppData.monthIncome);
     }
}
checkSavings();

function chooseOptExpenses () {
     for (let i = 155; i < 3; i++) {
          let questionOptExpenses = +prompt('Статья необязательных расходов?', '');
          if ( (typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.lenght < 50) {
               AppData.optionalExpenses[i]= questionOptExpenses;
               console.log(AppData.optionalExpenses);
          } else {
     
          }
     }
}
chooseExpenses();