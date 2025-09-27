//---------------------------Task 1.------------------------------------------ 
// Bir ədəd daxil et. Əgər ədəd müsbətdirsə "Müsbət", mənfidirsə "Mənfi", 0-dırsa "Sıfır" yazdır.

// let number = Number(prompt("Bir ədəd daxil edin:"));

// if (number > 0) {
//     console.log("Müsbet");
// } else if (number < 0) {
//     console.log("Menfi");
// } else {
//     console.log("Sifir");
// }




//---------------------------Task 2------------------------------------------
// İstifadəçidən rəng adını soruş. Switch-case ilə həmin rəngin "Əla seçimdir!" mesajını yazdır. 
// Əgər tanınmırsa "Naməlum rəng" yazdır.

// let color = prompt("Rəng adını daxil edin:");

// switch (color) { 
//     case "ag":
//         console.log("Əla seçimdir!");
//         break;
//     case "qara":
//         console.log("Əla seçimdir!");
//         break;
//     case "qirmizi":
//         console.log("Əla seçimdir!");
//         break;
//     case "mavi":
//         console.log("Əla seçimdir!");
//         break;
//     case "boz":
//         console.log("Əla seçimdir!");
//         break;
//     case "yasil":
//         console.log("Əla seçimdir!");
//         break;
//     case "sari":
//         console.log("Əla seçimdir!");
//         break;
//     default:
//         console.log("Namelum reng");
//         break;
// }


//---------------------------Task 3------------------------------------------
// Istifadəçidən avtomobil markası daxil etməsini istə. 
// Switch-case ilə həmin markanın hansı ölkəyə məxsus olduğunu göstər.

// let carBrand = prompt("Avtomobil markasını daxil edin:");

// switch (carBrand) {
//     case "BMW":
//     case "Audi":
//     case "Mercedes":
//         console.log("Sizin secdiyiniz avtomobil Almaniyada istehsal olunur.");
//         break;
//     case "Toyota":
//     case "Honda":
//         console.log("Sizin secdiyiniz avtomobil Yaponiyada istehsal olunur.");
//         break;
//     case "Ford":
//     case "Chevrolet":
//     case "Tesla":
//         console.log("Sizin secdiyiniz avtomobil Amerikada istehsal olunur.");
//         break;
//     case "Fiat":
//     case "Ferrari":
//     case "Lamborghini":
//         console.log("Sizin secdiyiniz avtomobil İtaliyada istehsal olunur.");
//         break;
//     default:
//         console.log("Namelum avtomobil markasi daxil etmisiniz.");
//         break;
// }




// ---------------------------Task 4------------------------------------------
// for dövrü ilə 1-dən 100-ə qədər cüt ədədləri çap et.
// for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }



//---------------------------Task 5------------------------------------------
// 1-dən 10-a qədər ədədlərin kvadratını while dövrü ilə çap et.
// let i = 1;
// while (i <= 10) {
//     console.log(i * i);
//     i++;
// }





//---------------------------Task 6------------------------------------------
//  Funksiya yaz: String qəbul edib həmin stringin tərsini qaytarsın.

// function reverseString(str) {
//     return str.split("").reverse().join("");
// }
// console.log(reverseString("Salam")); // "malaS"
// console.log(reverseString("Baku")); // "ukaB"
// console.log(reverseString("1004")); // "4001"




//---------------------------Task 7------------------------------------------
// Funksiya yaz: Bir obyekt qəbul etsin və onun bütün key:value cütlərini konsola çıxarsın.

// function showObject(obj) {
//     for (let key in obj) {
//         console.log(`${key}: ${obj[key]}`);
//     }
// }
// let person = { name: "Fidan", age: 25, city: "Turin" };
// showObject(person);


//---------------------------Task 8------------------------------------------
//  Bir kitab obyektində bu məlumatlar olsun:
// let book = {
//   title: "",
//   author: "",
//   year: 0,
//   pages: 0
// };

// functions:
// setBookInfo(obj) – istifadəçidən kitab məlumatlarını alıb obyektə yazır.
// showBookInfo(obj) – kitab məlumatlarını göstərir.
// calculateBookAge(obj) – kitabın neçə il əvvəl çap olunduğunu qaytarır.


// if-else 
// Əgər kitabın səhifə sayı <= 0 olarsa, "Səhifə sayı düzgün deyil!" yazdır.
// Əgər kitab 2000-ci ildən köhnədirsə, "Köhnə kitab" əks halda "Yeni kitab" yazdır.

// let book = {
//     title: "",
//     Author: "",
//     year: 0,
//     pages: 0
// };
// function setBookInfo(obj) {
//     obj.title = prompt("Kitabın adını daxil edin:");
//     obj.Author = prompt("Müəllifin adını daxil edin:");
//     obj.year = Number(prompt("Çap olunma ilini daxil edin:"));
//     obj.pages = Number(prompt("Səhifə sayını daxil edin:"));
// }
// function showBookInfo(obj) {
//     console.log(`Kitabın adı: ${obj.title}`);
//     console.log(`Müəllif: ${obj.Author}`);
//     console.log(`Çap olunma ili: ${obj.year}`);
//     console.log(`Səhifə sayı: ${obj.pages}`);
// }
// function calculateBookAge(obj) {
//     let currentYear = new Date().getFullYear();
//     return currentYear - obj.year;
// }
// setBookInfo(book);
// showBookInfo(book);
// let age = calculateBookAge(book);
// console.log(`Kitabın yaşı: ${age} il`);
// if (book.pages <= 0) {
//     console.log("Səhifə sayı düzgün deyil!");
// }
// else if (book.year < 2000) {
//     console.log("Köhnə kitab");
// }
// else {
//     console.log("Yeni kitab");
// }
//---------------------------Task 9------------------------------------------

