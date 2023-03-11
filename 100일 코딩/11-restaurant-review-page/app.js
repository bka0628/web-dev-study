const fs = require("fs");
const path = require("path");

const express = require("express");

//uuid 패키지 불러오기
const uuid = require("uuid");

const app = express();

// app.set : express 앱의 설정을 구성하는 메서드
// 뷰 템플릿은 서버에서 HTML, CSS, JavaScript를 렌더링해서 정적 파일로 클라이언트에게 제공한다.
app.set("views", path.join(__dirname, "views")); // 뷰 템플릿이 위치하는 디렉토리 설정
app.set("view engine", "ejs"); // 사용할 뷰 템를릿 엔진을 설정하는 코드

// 미들웨어, 정적 파일 제공
// 모든 요청에 대해 public 파일 안에 정적 파일을 요청하는지 확인 후 제공
// 예) http://localhost:3000/images/logo.png => public/images/logo.png
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.get("/", function (req, res) {
  res.render("index"); // 뷰 템플릿을 렌더링하는 메서드
}); // localhost:3000/

app.get("/restaurants", function (req, res) {
  const filePath = path.join(__dirname, "data", "restaurants.json");

  const fileData = fs.readFileSync(filePath);
  const storedRestaurants = JSON.parse(fileData);

  //렌더링할 ejs 파일 이름과 전달할 키와 값
  res.render("restaurants", {
    numberOfRestaurants: storedRestaurants.length,
    restaurants: storedRestaurants,
  });
}); // localhost:3000/restaurants

// : = 동적 경로 정의
app.get("/restaurants/:id", function (req, res) {
  const restaurantId = req.params.id; // 동적 경로의 id 값 저장

  const filePath = path.join(__dirname, "data", "restaurants.json");

  const fileData = fs.readFileSync(filePath);
  const storedRestaurants = JSON.parse(fileData);

  // restaurantId와 일치하는 id를 갖는 배열을 전달
  for (const restaurant of storedRestaurants) {
    if (restaurant.id === restaurantId) {
      return res.render("restaurant-detail", { restaurant: restaurant });
    }
  }
});

app.get("/recommend", function (req, res) {
  res.render("recommend");
}); // get: localhost:3000/recommend

// app.get("/recommend")와 app.post("/recommend")는 같은 경로(/recommend)에
// 대한 요청 처리를 담당하지만, HTTP 메소드가 다르기 때문에 각각의 요청에 맞는 처리가 가능
// 따라서 GET 요청과 POST 요청에 대한 서로 다른 응답 처리를 구현할 수 있다.
app.post("/recommend", function (req, res) {
  const restaurant = req.body;

  // 객체에 존재하지 않는 속성에 접근하면 새로 만들어줌 => .id
  restaurant.id = uuid.v4(); // uuid 패키지로 객체에 고유한 id값 부여 => 키(id): 값(문자열)

  const filePath = path.join(__dirname, "data", "restaurants.json");

  const fileData = fs.readFileSync(filePath); // 원시 텍스트
  const storedRestaurants = JSON.parse(fileData); // 원시 텍스트 => 자바스크립트 배열

  storedRestaurants.push(restaurant);

  fs.writeFileSync(filePath, JSON.stringify(storedRestaurants)); // 자바스크립트 배열 => 원시 텍스트 => 저장

  //redirect : 사용자가 현재 보고 있는 웹 페이지를 다른 웹 페이지로 자동으로 전환하는 것
  res.redirect("/confirm");
}); // post: localhost:3000/recommend

app.get("/confirm", function (req, res) {
  res.render("confirm");
}); // localhost:3000/confirm

app.get("/about", function (req, res) {
  res.render("about");
}); // localhost:3000/about

app.listen(3000);
