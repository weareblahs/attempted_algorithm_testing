// https://leetcode.com/problems/my-calendar-i

function inRange(start, end, target) {
  return target > start && target < end;
}
// works locally, but not leetcode
function myCalendar1(start, end) {
  // check if start and end matches condition (according to instructions, start must be "MyCalendar" and first item of end must be a blank array)
  // also checks if start length equals to end length so all commands can run accordingly
  if (start[0] != "MyCalendar" || end[0].length > 0)
    return "Fail to initialize";
  if (start.length !== end.length) return "Fail to initialize";
  // good. now stuff below happens after calendar is initialized
  // .shift() does not work for me so I have to do it the hard way
  let data = [];
  data.push(null);
  let command = [];
  let time = [];
  for (i = 1; i < start.length; i++) {
    command.push(start[i]);
    time.push(end[i]);
  }

  for (i = 0; i < time.length; i++) {
    if (i != 0 && inRange(start[i - 1][0], start[i - 1][1], start[i][0])) {
      data.push(false);
    } else if (
      i != 0 &&
      inRange(start[i - 1][0], start[i - 1][1], start[i][1])
    ) {
      data.push(false);
    } else if (i == 0) {
      data.push(true);
    } else {
      data.push(true);
    }
  }
  return data;
}

console.log(
  myCalendar1(
    ["MyCalendar", "book", "book", "book"],
    [[], [10, 20], [15, 25], [20, 30]]
  )
);

// the following code only works via leetcode. see
var MyCalendar = function () {
  this.calendar = [];
};
MyCalendar.prototype.book = function (start, end) {
  for (let x of this.calendar) {
    if (
      (start < x[0] && end > x[0]) ||
      start == x[0] ||
      (start > x[0] && start < x[1])
    )
      return false;
  }
  this.calendar.push([start, end]);
  return true;
};
var obj = new MyCalendar();
console.log(obj.book([10, 25], [15, 25]));
