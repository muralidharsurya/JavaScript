for(let i = 1; i<=9; i++){
    console.log(i); // 1 2 3 .....10

}

console.log("-------------");

///for .. of loops:
const array = [1,2,3,4,5,6,7,8,100];

for (const e of array ){
    console.log(e);
}

console.log("-------------");

//
 for (let i=0; i<= array.length;i++){
    console.log(array[i]);
 } 
// using while loop

let p =4;
while(p<=10){
console.log(p);
    p = p+1;

}


console.log("-------------");

let l=2;
while(l<=10){
    console.log("print even nuber only "+l);
    l=l+2;
}

console.log("-------------");
//do -while
let h=100;
  do{
    console.log(h);
    h++;

  }
  while(h<= 110);

  //break;
   

  // 1 to 100 : print th hi when you see the multiplication of 5 and break;

  let num =5;
  while(num <=100){
    console.log(num);
        if (num % 5 == 0){
            console.log("hi")
            break;
            num++;
    } 
    

  }


console.log("-----------------------");
//
const browser2 = ["chrome","edge","firefox","IE"];
for (const e of browser2){
    
    if (e == "edge"){
        console.log("lunch edge...");
        break;
    }

}



console.log("-----------------------");

// for of loop on object :
const user = {
    name : "surya",
    age : 30,
    city : "hyderabad",
}
for (const key in user){
    console.log(key + ":"+user [key]);

}

console.log("-----------------------");
// using ele represent ele 
const br =["chrome","edge","firefox","IE"];
  for(const ele in br ){
    console.log(ele +":"+br[ele]);
  }