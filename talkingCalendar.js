var convertMonth = function(string) {
  switch (parseInt(string, 10)) {
    case 1:
      return "January";
    case 2:
      return "February";
    case 3:
      return "March";
    case 4:
      return "April";
    case 5:
      return "May";
    case 6:
      return "June";
    case 7:
      return "July";
    case 8:
      return "August";
    case 9:
      return "September";
    case 10:
      return "October";
    case 11:
      return "November";
    case 12:
      return "December";
  }
};

var generateSuffix = function(number) {
  // switch (day) {
  //   case 1:
  //   case 21:
  //   case 31:
  //     daySuffix = "st";
  //     break;
  //   case 2:
  //   case 22:
  //     daySuffix = "nd";
  //     break;
  //   case 3:
  //   case 23:
  //     daySuffix = "rd";
  //     break;
  //   default:
  //     daySuffix = "th";
  //     break;
  // }
  if (number === 1 || number === 21 || number === 31) {
    return "st";
  } else if (number === 2 || number === 22) {
    return "nd";
  } else if (number === 3 || number === 23) {
    return "rd";
  } else {
    return "th";
  }
};

var talkingCalendar = function(date) {
  // Your code here
  var dateComponents = date.split("/");

  var year = dateComponents[0];
  var monthString = dateComponents[1];
  var dayString = dateComponents[2];

  var month = convertMonth(monthString);
  var day = parseInt(dayString, 10);
  var daySuffix = generateSuffix(day);

  return month + " " + day + daySuffix + ", " + year;
};

// December 2nd, 2017
console.log(talkingCalendar("2017/12/02"));
// November 11th, 2007
console.log(talkingCalendar("2007/11/11"));
// August 24th, 1987
console.log(talkingCalendar("1987/08/24"));
