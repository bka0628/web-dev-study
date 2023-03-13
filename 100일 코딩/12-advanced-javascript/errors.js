const fs = require("fs");

// try / catch를  사용한 사용자 지정 오류 처리
function readFile() {
  try {
    const fileData = fs.readFileSync("data.json");
  } catch (error) {
    // error => 발생한 오류에 대한 정보
    // try에서 오류가 발생하면 실행
    console.log("An error occurred!");
    // error에 저장된 오류 내용 출력
    console.log(error.message);
  }
  console.log("Hi there!");
}

readFile();
