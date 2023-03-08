// Express 패키지를 사용한 서버

// express 모듈 요청
const express = require("express");

// 객체 생성
const app = express();

app.get("/currenttime", function (req, res) {
  res.send("<h1>" + new Date().toISOString() + "</h1>");
}); // localhost:3000/currenttime

app.get("/", function (req, res) {
  res.send("<h1>Hello World!</h1>");
}); // localhost:3000

// 3000 포트에서 수신 대기
app.listen(3000);
