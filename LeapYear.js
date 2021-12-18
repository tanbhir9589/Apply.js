//const year = 1998;
//const remiender = year%4;
//if (remiender == 0) {
    //console.log('Leap year');
//} else {
  //  console.log('Not Leap year');
//}



// using function

function ialeapYear(year) {
    if ((0 == year%4) && (0!=year%100) || (0==year%400)) {
        return true;
    } else {
        return false;
    }

    
}

const check =ialeapYear(2000);
if (check == true) {
      console.log('leap yera');
} else {
     console.log('not leap tear');
}




// update condition 

// program to check leap year
function checkLeapYear(year) {

    const leap = new Date(year, 1, 29).getDate() === 29;
    if (leap) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}

// take input
//const year = prompt('Enter a year:');

checkLeapYear(2525);