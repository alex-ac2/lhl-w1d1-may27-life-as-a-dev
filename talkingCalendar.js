let talkingCalendar = function(date) {
  // Your code here
  var dateComponents = date.split("/");

  var year = dateComponents[0];
  var monthString = dateComponents[1];
  var dayString = dateComponents[2];

  return year;
};

// December 2nd, 2017
console.log(talkingCalendar("2017/12/02"));
// November 11th, 2007
console.log(talkingCalendar("2007/11/11"));
// August 24th, 1987
console.log(talkingCalendar("1987/08/24"));
