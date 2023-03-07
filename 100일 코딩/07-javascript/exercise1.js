// Exercise Time!

// 1) Create three new variables:
//    - A variable that stores the name of an online course of your choice
//    - A variable that stores the price of that course
//    - A variable that stores the three main goals that you have, when taking this course
let courseName = "100일 코딩 챌린지";
let coursePrice = 59000;
let mainGoals = ["css", "HTML", "Javascript"];

// 2) Output ("alert") the three variable values
alert(courseName);
alert(coursePrice);
alert(mainGoals);

// 3) Try "grouping" the three variables together and still output their values thereafter
let Course = {
  name: "100일 코딩 챌린지",
  price: 59000,
  goals: ["css", "HTML", "Javascript"],
};

alert(Course.name);
alert(Course.price);
alert(Course.goals);

// 4) Also output the second element in your "main goals" variable
alert(Course.goals[1]);

// 5) Add a custom command that does the following:
//    - Use your "main goals" variable and access an element by its identifier
//    - The concrete identifier value should be dynamic / flexible
//      (i.e. the command can be executed for different identifier)
//    - The "main goals" variable should also be dynamic: The command should work
//      with ANY list of values
//    - The custom command should provide the accessed value (i.e. the list element)
/**
 * @param {array} arr
 * @param {int} index
 * @returns 배열과 index를 넣으면 해당하는 값을 내보낸다.
 */
function getValue1(arr, index) {
  return arr[index];
}

// 기능은 동일하나 아래가 더 가독성이 좋음
function getValue2(arr, index) {
  let arrayElement = arr[index];
  return arrayElement;
}

// 6) Execute your custom command from (5) and output ("alert") the result
alert(getValue1(goals, 2));

let dummyArray = ["apple", "banana", "cherry", "date", "elderberry"];

alert(getValue2(dummyArray, 3));
