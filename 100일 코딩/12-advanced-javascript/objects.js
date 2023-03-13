// const job = {
//     title: 'Debeloper',
//     location: 'New York',
//     salary: 50000,
// }

// console.log(new Date().toISOString());
// // new 키워드는 클래스와 생성자 함수를 호출하여 새로운 객체를 생성할 때 사용

// // job의 형식을 갖는 객체를 생성할려고 다시 만드는건 비효율적
// const job2 = {
//     title: 'Cook',
//     location: 'Munich',
//     salary: 35000,
// }

// 클래스와 생성자 함수는 객체를 생성하는 데 필요한 속성과
// 메서드의 기본 형태와 구조를 정의한 블루프린트 역할을 합니다.
// 클래스 이름은 대문자로 시작
class Job {
  constructor(jobTitle, place, salary) {
    this.title = jobTitle;
    this.location = place;
    this.salary = salary;
  }

  //메소드
  describe() {
    console.log(
      `I'm a ${this.title}, I work in ${this.location} and I earn ${this.salary}.`
    );
  }
}

const developer = new Job("Debeloper", "New York", 50000);
const Cook = new Job("Cook", "Munich", 35000);

console.log(developer);
developer.describe();

console.log(Cook);
Cook.describe();