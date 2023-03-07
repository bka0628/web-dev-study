// for문
for (let i = 0; i < 10; i++) {
  console.log(i);
}

// for-of문 (배열)
const users = ["Max", "Aaan", "Joel"];

for (const user of users) {
  console.log(user);
}

// for-of문을 for문으로 작성
for (let i = 0; i < users.length; i++) {
  console.log(users[i]);
} // 더 길고 복잡함

// for-in문 (객체)
const loggedInUser = {
  name: "Max",
  age: 32,
  isAdmin: true,
};

for (const key in loggedInUser) {
  console.log(key);
  console.log(loggedInUser[key]);
}

// while문
let isFinished = false;

while (!isFinished) {
  isFinished = confirm("Do you want to quit?");
}

console.log("Done!");
