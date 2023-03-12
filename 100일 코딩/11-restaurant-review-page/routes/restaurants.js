const express = require("express");
const uuid = require("uuid"); // uuid 패키지 불러오기

const resData = require("../util/restaurant-data");

const router = express.Router(); // 라우터 객체를 생성

router.get("/restaurants", function (req, res) {
  let order = req.query.order;
  let nextOrder = "desc";

  if (order !== "asc" && order !== "desc") {
    // adc와 desc 모두 아닐때
    order = "asc"; // 기본 값
  }

  if (order == "desc") {
    nextOrder = "asc";
  }

  const storedRestaurants = resData.getStoredRestaurants();

  // 정렬
  storedRestaurants.sort(function (resA, resB) {
    if (
      (order === "asc" && resA.name > resB.name) ||
      (order === "desc" && resA.name < resB.name)
    ) {
      return 1;
    }
    return -1;
  });

  //렌더링할 ejs 파일 이름과 전달할 키와 값
  res.render("restaurants", {
    numberOfRestaurants: storedRestaurants.length,
    restaurants: storedRestaurants,
    nextOrder: nextOrder,
  });
}); // localhost:3000/restaurants

// : = 동적 경로 정의
router.get("/restaurants/:id", function (req, res) {
  const restaurantId = req.params.id; // 동적 경로의 id 값 저장

  const storedRestaurants = resData.getStoredRestaurants();

  // restaurantId와 일치하는 id를 갖는 배열을 전달
  for (const restaurant of storedRestaurants) {
    if (restaurant.id === restaurantId) {
      return res.render("restaurant-detail", { restaurant: restaurant });
    }
  }
  res.status.render("404"); // 동적 경로가 없을 때 보내는 '404'오류 페이지
});

router.get("/recommend", function (req, res) {
  res.render("recommend");
}); // get: localhost:3000/recommend

// app.get("/recommend")와 app.post("/recommend")는 같은 경로(/recommend)에
// 대한 요청 처리를 담당하지만, HTTP 메소드가 다르기 때문에 각각의 요청에 맞는 처리가 가능
// 따라서 GET 요청과 POST 요청에 대한 서로 다른 응답 처리를 구현할 수 있다.
router.post("/recommend", function (req, res) {
  const restaurant = req.body;

  // 객체에 존재하지 않는 속성에 접근하면 새로 만들어줌 => .id
  restaurant.id = uuid.v4(); // uuid 패키지로 객체에 고유한 id값 부여 => 키(id): 값(문자열)

  const restaurants = resData.getStoredRestaurants();

  restaurants.push(restaurant);

  resData.storeRestaurants(restaurants);

  //redirect : 사용자가 현재 보고 있는 웹 페이지를 다른 웹 페이지로 자동으로 전환하는 것
  res.redirect("/confirm");
}); // post: localhost:3000/recommend

router.get("/confirm", function (req, res) {
  res.render("confirm");
}); // localhost:3000/confirm

module.exports = router;
