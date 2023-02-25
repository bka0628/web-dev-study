let courseName = "100일 코딩 챌린지";
let coursePrice = 59000;
let mainGoals = ["css", "HTML", "Javascript"];

alert(courseName);
alert(coursePrice);
alert(mainGoals);

let myCourse = {
  courseName: "100일 코딩 챌린지",
  coursePrice: 59000,
  mainGoals: ["css", "HTML", "Javascript"],
};

alert(myCourse.courseName);
alert(myCourse.coursePrice);
alert(myCourse.mainGoals);
alert(myCourse.mainGoals[1]);

function getlistByIdentifier(list, index) {
  return list[index];
}

alert(getlistByIdentifier(mainGoals, 2));
