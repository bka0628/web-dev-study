// 원시 값 (Primitive values): 숫자, 문자열, 논리값, undefined 등

// 참조 값 (Reference values): 객체(Objects)

const hobbies = ["Sports", "Cooking"]; // 배열의 대한 포인터(주소)가 저장
const age = 32; // 값 자체가 저장

hobbies.push("Reading"); // 배열의 포인터(주소)가 바뀌는게 아니기 때문에 가능하다.
// hobbies = ['Coding', 'Sleeping']; // 새로운 주소가 저장되기 때문에 불가능하다.

console.log(hobbies);

const person = { age: 32 };

/*
function getAdultYears(p) {
  p.age -= 18;
  return p.age;
}

console.log(getAdultYears(person)); 
console.log(person); => age 속성의 값도 같이 바뀐다. 
*/

function getAdultYears(p) {
  p.age -= 18;
  return p.age;
  // return p.age - 18; 값을 속성에 저장하지 않고 return
}

console.log(getAdultYears({ ...person }));// 새로운 객체에 저장
console.log(person);
