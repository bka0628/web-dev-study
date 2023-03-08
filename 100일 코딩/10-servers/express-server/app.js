// Express 패키지를 사용한 서버

// http 모듈 요청
const http = require("http");

// 요청을 처리하는 함수
function handleRequest(request, response) {
  // request : 요청, response : 응답

  if (request.url === "/currenttime") {
    // localhost:3000/currenttime
    response.statusCode = 200;
    response.end("<h1>" + new Date().toISOString() + "</h1>");
  } else if (request.url == "/") {
    // localhost:3000
    response.statusCode = 200;
    response.end("<h1>Hello World!</h1>");
  }
}

// 서버 객체 생성, 첫번쩨 매개변수 : 요청을 처리하는 함수 전달
const server = http.createServer(handleRequest);

// 서버가 3000번 포트에서 수신 대기
server.listen(3000);
