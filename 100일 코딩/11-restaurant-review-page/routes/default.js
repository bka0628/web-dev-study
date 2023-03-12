const express = require("express");

const router = express.Router(); // 라우터 객체를 생성

router.get("/", function (req, res) {
  res.render("index"); // 뷰 템플릿을 렌더링하는 메서드
}); // localhost:3000/

router.get("/about", function (req, res) {
  res.render("about");
}); // localhost:3000/about

// 라우터 객체를 내보낸다.
module.exports = router;
