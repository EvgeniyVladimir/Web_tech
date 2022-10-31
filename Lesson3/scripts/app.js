// function hello(){
//     let userName = prompt("Введите имя", "Имя");
//     alert(`Привет, ${userName}!`)
// }
// hello();

// let result = confirm("Вы уверены?");
// if (result) {
//     alert("Хорошо что вы уверены!");
//     }
//     else {
//         alert("Жаль что вы не уверены");
//     }

// let age = prompt("Введите возраст");
// if (age == 18) {
//     alert("Вы совершеннолетний, все можно!");
// }  else if (age == 10) {
//     alert("Вам надо учить уроки!");
// }  else if (age == 30) {
//     alert("Ложитесь спать, завтра на работу!");
// }  else {
//     alert("Мы не знаем, что Вам делать");
// }   

// let age = 18;
// let age = prompt("Введите возраст");

// switch (age) {
//     case 18:
//         alert("Вы совершеннолетний, все можно!");
//         break;
//     case 10:
//         alert("Вам надо учить уроки!");
//         break
//     case 30:
//         alert("Ложитесь спать, завтра на работу!");
//         break;
//     default:
//         alert("Мы не знаем, что Вам делать :)")
// }

let day = prompt("Введите день недели: ").toLowerCase();
switch (day) {
    case "понедельник":
    case "вторник":
    case "среда":
    case "четверг":
    case "пятница":
        alert("Рабочий день!");
        break;
    case "суббота":
    case "воскресенье":
        alert("Выходной день!");
    default:
        alert("Вы не знаете дней недели?");
}

 
