function checkDayWeek(dayNumber){
    let day;
    
    switch(dayNumber){
        case 0:
        day = " sunday";
        break;
        case 1:
        day = " monday";
        break;
        case 2:
        day = "Tusday";
        break;
        case 3:
        day = "wednesday";
        break;
        case 4:
        day = "Thursday";
        break;
        case 5:
        day = "Friday";
        break;
        case 6:
        day = "Suterday";
        break;

        default:
            console.log("invalida day");
           break;

    }
    return day;
}
console.log(checkDayWeek(0));
//console.log(checkDayWeek(0));
//console.log(checkDayWeek(3));
//consonsole.log(checkDayWeek(1));
//ole.log(checkDayWeek(4));
//console.log(checkDayWeek(5));
//console.log(checkDayWeek(6));

let browser = "chrmoe";
switch (browser) {
    case "chrome":
        console.log ("Lunch chrome");
        
        break;
    case "firefox":

        console.log("Lumch Firefox");
    case ("edge"):
        console.log("lumch edge");

    default:
        console.log("plz pass right Browser..."+ browser)
        break;

}