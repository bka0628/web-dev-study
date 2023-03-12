const path = require("path");

const express = require("express");

const defaultRoutes = require("./routes/default");
const restaurantRoutes = require("./routes/restaurants");

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

// '/'로 시작하는 모든 요청을 처리
app.use("/", defaultRoutes);
app.use("/", restaurantRoutes);

// 해당하는 경로가 없는 경우 => 상태 코드: 404
// 모든 요청에 대해 실행하는 핸들러 함수이기 때문에
// 맨 마지막에 실행해서 다른 경로에서 처리되지 않은 요청을 처리
app.use(function (req, res) {
  // status(): 응답 객체('res')의 상태 코드를 설정
  res.status(404).render("404");
});

// 서버에 문재가 생긴 경우 => 상태 코드: 500
// 오류 처리 미들웨어 함수 & 에러 핸들링 미들웨어 함수
app.use(function (err, req, res, nest) {
  res.status(500).render("500");
});

app.listen(3000);
