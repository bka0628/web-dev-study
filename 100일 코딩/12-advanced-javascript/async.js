// const fs = require("fs");
// 파일 시스템 프로미스 버전
const fs = require("fs/promises");

async function readFile() {
  let fileData;

  // Sync가 붙은건 동기식으로 처리를 한다는 뜻
  // const fileData = fs.readFileSync("data.json");

  // 비동기 처리
  // 작업이 완료되면 함수를 호출하기 때문에 콜백 함수라고한다.
  // 불러온 데이터는 변수에는 저장하지 못하고 함수 안에서만 사용이 가능
  //   fs.readFile("data.txt", function (error, fileData) {
  //     if (error) {
  //        오류처리...
  //     }
  //     console.log("File parsing done!");
  //     console.log(fileData.toString());
  //   });

  // 프로미스 => 비동기 작업 처리 방법 중 하나
  fileData = await fs
    .readFile("data.txt")
    .then(function (fileData) {
      console.log("File parsing done!");
      console.log(fileData.toString());
      // return anotherAsyncOperation;
    })
    .then(function () {
      // 프로미스 체인
    })
    .catch(function (error) {
      // 오류 처리
      console.log(error);
    });

  console.log("Hi there!");
}

readFile();
