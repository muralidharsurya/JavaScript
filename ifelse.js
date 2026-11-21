function checkAge(age ){
    if (age >= 18) {
        console.log("elogible   voater for voting ");

    }
    else{
        console.log("your not eligabl  voter for voting ");

    }

}
checkAge(12);
checkAge(23);
checkAge(0);

// using- if esle else condistion

function checkNumber(number){
if (number > 0 ){
    console.log("numbrt is +ve ");
  }
else if (number<0){
    console.log("numbrt is ve ");   
  }
else{
    console.log("Zero number  find");
  }
}
checkNumber(10);
checkNumber(0);
checkNumber(-43);


/// Nested if else ;
function checkgrade(score ){
    let grade;
    if (score >= 90){
        grade ='A';   
    }
    else{
        if(score >= 80){
            grade ='B';
    
        }
        else if(score >=70){
            grade='c';
        }
        else if(score >=65){
            grade = 'D';
         }
         else if(score >= 40)
         {
        grade="fail";
         
         }     
         else{
            grade= 'F';
         }
}
 console.log(grade);
}
checkgrade(95);
checkgrade(84);
checkgrade(76);
checkgrade(65);
checkgrade(65);
checkgrade(39);
