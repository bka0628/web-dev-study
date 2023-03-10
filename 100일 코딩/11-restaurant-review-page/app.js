const fs = require("fs");
const path = require("path");

const express = require("express");

const app = express();

// 미들웨어, 정적 파일 제공
// 모든 요청에 대해 public 파일 안에 정적 파일을 요청하는지 확인 후 제공
// http://localhost:3000/images/logo.png => public/images/logo.png
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.get("/", function (req, res) {
  const htmlFilePath = path.join(__dirname, "views", "index.html");
  res.sendFile(htmlFilePath);
}); // localhost:3000/

app.get("/restaurants", function (req, res) {
  const htmlFilePath = path.join(__dirname, "views", "restaurants.html");
  res.sendFile(htmlFilePath);
}); // localhost:3000/restaurants

app.get("/recommend", function (req, res) {
  const htmlFilePath = path.join(__dirname, "views", "recommend.html");
  res.sendFile(htmlFilePath);
}); // get: localhost:3000/recommend

// app.get("/recommend")와 app.post("/recommend")는 같은 경로(/recommend)에
// 대한 요청 처리를 담당하지만, HTTP 메소드가 다르기 때문에 각각의 요청에 맞는 처리가 가능
// 따라서 GET 요청과 POST 요청에 대한 서로 다른 응답 처리를 구현할 수 있다.
app.post("/recommend", function (req, res) {
  const restaurant = req.body;

  const filePath = path.join(__dirname, "data", "restaurants.json");

  const fileData = fs.readFileSync(filePath); // 원시 텍스트
  const storedRestaurants = JSON.parse(fileData); // 원시 텍스트 => 자바스크립트 배열

  storedRestaurants.push(restaurant);

  fs.writeFileSync(filePath, JSON.stringify(storedRestaurants)); // 자바스크립트 배열 => 원시 텍스트 => 저장

  //redirect : 사용자가 현재 보고 있는 웹 페이지를 다른 웹 페이지로 자동으로 전환하는 것
  res.redirect("/confirm");
}); // post: localhost:3000/recommend

app.get("/confirm", function (req, res) {
  const htmlFilePath = path.join(__dirname, "views", "confirm.html");
  res.sendFile(htmlFilePath);
}); // localhost:3000/confirm

app.get("/about", function (req, res) {
  const htmlFilePath = path.join(__dirname, "views", "about.html");
  res.sendFile(htmlFilePath);
}); // localhost:3000/about

app.listen(3000);
