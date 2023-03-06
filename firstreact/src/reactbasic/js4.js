// ES6 문법은 아니지만, 리액트에서 많이 사용하는 삼항연산자
let person = {
  name : 'hyunjin',
  age : 20
}

// 조건문
// preson이라는게 존재한다면 preson, name, 없다면 '없다'(if ~ else)
if (person) { // 객체 person이 존재하는 경우
  console.log(person.name); // hyunjin
} else { // 객체 person이 존재하지 않는 경우
  console.log('없다');
}

// 삼항연산자
// 조건 ? 참일 때 실행할 코드 : 거짓일 때
console.log(person ? person.name : '없다'); // hyunjin
// let result = person ? person.name : '없다';


// 1.
// age가 18살 이상이라면 '성인입니다' 아니라면, '미성년자 입니다'

// if ~ else
if (person.age >= 18) {
  console.log('성인입니다');
} else {
  console.log('미성년자입니다');
} // 성인입니다

// 삼항연산자
console.log(person.age >= 18 ? '성인입니다' : '미성년자입니다'); // 성인입니다


// 2
// 아무 배열이나 만들고, 그 배열의 길이가 5이상일 경우 '길다' 아니라면 '짧다'
let arr = [1,2,3,4,5,6,7,8,9,10];
let colors = ['red', 'green', 'blue', 'white', 'black'];

// if ~ else
if (arr.length >= 5) {
  console.log('길다');
} else {
  console.log('짧다');
} // 길다

if (colors.length >= 5) {
  result1 = '길다'
} else {
  result1 = '짧다'
} // 길다
console.log(result1); // 길다

// 삼항연산자
console.log(arr.length >= 5 ? '길다' : '짧다'); // 길다
let result2 = colors.length >= 5 ? '길다' : '짧다'
console.log(result2); // 길다


// 3
// age가 65세 이상일 경우 '노인입니다', 18세 이상 '성인입니다'
// 그 이하일 경우 '미성년자입니다'
// 삼항 연산자 다중 조건
let age = 8;

// if ~ else
if (age >=65) {
  console.log('노인입니다')
} else if (age >= 18) {
  console.log('성인입니다')
} else {
  console.log('미성년자입니다')
} // 성인입니다

if (person.age >=65) {
  console.log('노인입니다')
} else if (person.age >= 18) {
  console.log('성인입니다')
} else {
  console.log('미성년자입니다')
} // 성인입니다

// 삼항연산자
// 삼항 연산자로 다중 조건을 작성할 경우엔 조건을 소괄호로 묶어준다.
console.log(age >= 65 ? '노인입니다' : age >= 18 ? '성인입니다' : '미성년자입니다'); // 성인입니다
console.log(person.age >= 65 ? '노인입니다' : person.age >= 18 ? '성인입니다' : '미성년자입니다'); // 성인입니다


// 4
// 삼항 연산자 다중조건
// num1 num2보다 큰 경우, 'num1 > num2'
// num2 num3보다 큰 경우, 'num2 > num3'
// num3이 제일 큰 경우, '숫자가 같거나 num3이 가장 크다'

let num1 = 10;
let num2 = 2;
let num3 = 3;

// if ~ else
if (num1 > num2) {
  console.log('num1 > num2');
} else if (num2 > num3) {
  console.log('num2 > num3');
} else {
  console.log('숫자가 같거나 num3이 가장 크다');
} // num1 > num2

// 삼항연산자
console.log(num1 > num2 ? 'num1 > num2' : num2 > num3 ? 'num2 > num3' : '숫자가 같거나 num3이 가장 크다');
// num1 > num2

// 삼항 연산자 논리 계산(true, false)
// person perso.name 없다면 '이름이 없다'
if (person) {
  console.log(person.name);
} else {
  console.log('이름이 없다');
} // hyunjin

console.log(person ? person.name : '이름이 없다'); // hyunjin
console.log(person.name ? "이름" + person.name : "이름이 없다"); // 이름hyunjin
console.log(person.name == ''? "이름이 없다" : "이름" + person.name); // 이름hyunjin