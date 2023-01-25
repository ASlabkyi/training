// const all = ["Galina", "George", "Yana", "Vlad", "Volodymyr", "Vlad", "Jaroslava", "Dmytro"];
// const boys = ["George", "Volodymyr", "Dmytro", "Vlad"]

// for (let i = 0; i < all.length; i+= 1) {
//   const name = all[i];
//   if (boys.includes(name)) {
//     all.splice(i, 1)
//     i -= 1;
//   }
// }
// console.log(all);

// Беремо масив людей, які поставили лайки, Вона повинна повернути текст, як вказано у прикладах
// []                               --> "No one likes this"
// ["Peter"]                        --> "Peter likes this"
// ["Jacob", "Alex"]                --> "Jacob and Alex like this"
// ["Max", "John", "Mark"]          --> "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"] --> "Alex, Jacob and 2 others like this"

// const likes = ["Petrer", "Max", "John", "Mark", "Alex", "Jacob"];
// const likesLength = likes.length;

// switch (likesLength) {

//   case 0:
//     console.log("No one likes this");
//     break;

//   case 1:
//     console.log(`${likes[0]} likes this`)
//     break;

//   case 2:
//     console.log(`${likes[0]} and ${likes[1]} like this`)
//     break;

//   case 3:
//     console.log(`${likes[0]}, ${likes[1]} and ${likes[2]} like this`)
//     break;

//   default:
//     console.log(`${likes[0]}, ${likes[1]} and ${likesLength -2} others like this`)
//     break;
// }

// Потрібно мутувати масив так щоб залишились тільки імена.

// const names = ["Anna", 2, "Roman", 12, "144", "Kate", "Max"];

// for (let i = 0; i < names.length; i += 1) {
//   if (!isNaN(Number(names[i]))) {
//     names.splice(i, 1);
//     i -= 1
//   }
// }

// console.log(names);


// Вивести найкоротше ім'я
const all = ["Galina", "George", "Yana", "Volodymyr", "Jaroslava", "Dmytro"];
let result;

for (const name of all) {
  if (name.length < result.length) {
    result = name;
  }
}
console.log(result);