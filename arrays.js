let myArray = [];
let numbners = [1, 2, 3, 4, 5, 6,];
let lan = ["java", "python", "javascripts", "c++"];

// 1.push () method is add  multiple elements

lan.push("ruby", "HTML");
console.log(lan);

//2.pop() it means remove and  retunrs the  last item the end of array
let number = [1, 2, 3, 4, 5, 6,];
number.pop();
console.log(number);

// 3.shift ;
let fruits = ["Banana", "apple", "mango", "avacado"];
let firstFruits = fruits.shift();
console.log(firstFruits);
console.log(fruits);

//4,unshift:
let colors = ["red", "blue", "white", "yellow", "black"]
console.log(colors.length);
colors.unshift("ornge", "brown");
console.log(colors);
console.log(colors.length);

//#5. splice
//changes the contents of an array in place by removing, replacing, or adding elements, and returns an array containing the deleted items.


let animal = ['dog,', 'cat', 'bird', 'fish']
animal.splice(1, 2, 'beer', 'elephent'); // 1 mens where can start with index  and 2 is how many valused remove  
console.log(animal);

// 6.slice () , slicce function 

/*
slice() in JavaScript is a built-in method used to copy 
a specific portion of an array or string into a new array or string without 
changing the original data.
*/
let pop = [1, 2, 3, 4, 5, 6]
let newPop = pop.slice(1, 4);// it is begining value of index include and last vaule of index excluded
console.log(newPop);//opt [2,3,4]

//7.concat means combained two and more array is crate a new array 
let anima = ['dog,', 'cat', 'bird', 'fish']
let num = [1, 2, 3, 4, 5, 6]
let mixedArray = anima.concat(num);
console.log(mixedArray);
//8. indexOf 
let color = ["red", "green", "blue"];
let indexColor = color.indexOf("green");
console.log("color of index :" + indexColor); // it shows the value fo index neu
let suryaindex = color.indexOf("surya")
console.log("it doesn't have in the list thats y it shows -1 result :" + suryaindex);

//2nd red index
let color1 = ["red", "green", "blue", "black", "red"];
let redSecondIndex = color1.indexOf("red", color1.indexOf("red") + 1);
console.log(redSecondIndex);

// 9,includes  
let test = ["admin", "testing", "devoloper", "seller"];
let flag = test.includes("seller", "testing", "ram");
console.log(flag);

//forEach;
let n = [1,2,3,4,5,,6,7];
n.forEach((e)=>{
    console.log(e);})





