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

var talkingCalendar = function(date) {
  // Your code here
  var dateComponents = date.split("/");

  var year = dateComponents[0];
  var monthString = dateComponents[1];
  var dayString = dateComponents[2];

  var month = convertMonth(monthString);

  return month + " " + year;
};

// December 2nd, 2017
console.log(talkingCalendar("2017/12/02"));
// November 11th, 2007
console.log(talkingCalendar("2007/11/11"));
// August 24th, 1987
console.log(talkingCalendar("1987/08/24"));
