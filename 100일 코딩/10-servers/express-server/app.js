// Express 패키지를 사용한 서버

// 타사 패키지를 요청하기 전에 노드js에 내장된 패키지를 먼저 요청하는 것이 관례이다.
const fs = require("fs"); // 파일 시스템 패키지
const path = require("path"); // 경로 패키지 : 다양한 운영체제에서 일관된 파일 경로 처리를 제공

// express 모듈 요청
const express = require("express");

// 객체 생성
const app = express();

// 모든 요청 처리
// 하나 이상의 유형의 요청에 적용되는 일반 핸들러 함수를 미들웨어 함수라고 한다.
app.use(express.urlencoded({ extended: false })); // 들어온 데이터를 자바스크립트 코드로 바꿔줌

app.get("/currenttime", function (req, res) {
  res.send("<h1>" + new Date().toISOString() + "</h1>");
}); // localhost:3000/currenttime

app.get("/", function (req, res) {
  res.send(
    '<form action="/store-user" method="POST"><label>Your Name: </label><input type="text" name="username"><button>Submit</button></form>'
  );
}); // localhost:3000

app.post("/store-user", function (req, res) {
  const userName = req.body.username; // 요청에서 전달된 데이터

  const filePath = path.join(__dirname, "data", "users.json"); // json 파일 경로

  const fileData = fs.readFileSync(filePath); // 파일 읽기
  const existingUsers = JSON.parse(fileData); // 기존 데이터 파싱

  existingUsers.push(userName); // 새로운 데이터 추가

  fs.writeFileSync(filePath, JSON.stringify(existingUsers)); // 추가된 데이터를 저장

  res.send("<h1>Username stored!</h1>");
}); // localhost:3000/store-user

app.get("/users", function (req, res) {
  const filePath = path.join(__dirname, "data", "users.json"); // users.json 파일 경로

  const fileData = fs.readFileSync(filePath); // 파일 읽기
  const existingUsers = JSON.parse(fileData); // 기존 데이터 파싱

  // 응답할 HTML 코드 
  let responseData = "<ul>"; 

  for (const user of existingUsers) {
    responseData += "<li>" + user + "</li>"; // 응답할 HTML 코드에 데이터 추가
  }

  responseData += "</ul>";

  // 생성된 HTML 코드를 응답으로 전송
  res.send(responseData);
}); // localhost:3000/users

// 3000 포트에서 수신 대기
app.listen(3000);
