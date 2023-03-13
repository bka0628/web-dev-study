// 기본 매개변수 (default parameter)
function greetUser(greetingPrefix, userName = "user") {
  // 매개변수에 기본값을 설정할 때는 맨 뒤에 정의해야 한다.
  // 필수 매개변수를 생략할 경우 undefined가 할당되기 때문
  console.log(greetingPrefix + " " + userName + "!");

  // 템플릿 리터널 작업 => ``: 역따음표(백틱)
  console.log(`${greetingPrefix} ${userName}!`);
}

greetUser(); // 매개변수를 전달하지 않고 기본값을 정의하지 않으면 undefined가 할당
greetUser("Hi", "Max"); // 매개변수를 전달하면 기본값을 재정의한다.
greetUser("Hello");

// ==================================================================
// 나머지 매개변수(Rest Parameters)와 스프레드 연산자(Spread Operator)

// 나머지 매개변수(Rest Parameters)
// 함수 표현식의 매개변수 이름 앞에 세 개의 점을 붙여 정의 => ...numvers
function sumUp(...numbers) {
  // 함수로 전달되는 모든 인자가 배열에 담겨진다.
  // ...numbers => 배열
  let result = 0;

  for (const number of numbers) {
    result += number;
  }

  return result;
}

console.log(sumUp(10, 20, 5, 4, 1));

// 스프레드 연산자(Spread Operator)
// 배열을 분리하여 각각의 인자로 전달한다.
const inputNumbers = [10, 20, 5, 4, 1];
console.log(sumUp(...inputNumbers));
