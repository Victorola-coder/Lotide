// raisin.js

// Function to check for raisins in a single cookie
const raisinAlarm = function (cookie) {
  if (cookie.includes("🍇")) {
    return "Raisin alert!";
  } else {
    return "All good!";
}
};

// Testing the function with individual cookies
console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"])); // Raisin alert!
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"])); // Raisin alert!
console.log(raisinAlarm(["🍫", "🍫", "🍫"])); // All good!

// Function to check for raisins in an array of cookies
const raisinAlarmArray = function (cookies) {
  return cookies.map(raisinAlarm);
};

// Testing the function with an array of cookies
console.log(
  raisinAlarmArray([
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"],
  ])
); // ["Raisin alert!", "Raisin alert!", "All good!"]
