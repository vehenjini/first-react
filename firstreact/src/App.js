/* eslint-disable */
// 경고창 안 뜨게 해줌
import logo from './logo.svg';
import './App.css';
import {useState} from 'react'


function App() {
  let user = 'Jihye';
  let [count, setCount] = useState(0);
  let [counter, setCounter] = useState(0);
  let [title, setTitle]  = useState(['DW마카데미 503호','DW마카데미 502호','DW마카데미 501호']);
  // [초기값 변수, 값을 변경해주는 함수]
  // useState(0) 리엑트에서 변수처럼 자료를 보관할 수 있는 State문법
  // [](대괄호) Array자료형식-> 한곳에다가 여러가지 자료를 저장하고 싶을 때 사용
  let [bgColor, setbgColor] = useState('white');
  let changeBg = () => {
    let newBg = bgColor == 'white' ? 'skyblue' : 'white';
    setbgColor(newBg)
  }

  // map함수가 array의 갯수만큼 return을 반복한다.
  // 매개변수(파라미터)를 만들어주면 함수 안의 파라미터가
  // array자료 안에 있는 데이터가 된다.
  // [1,2,3].map(function(num) {
  //   // return console.log(num);
  // })

  // let num = [1,2,3,4,5];
  // let newNum = num.map((num)=> num + 1);
  // console.log(num);
  // console.log(newNum);

  let num = [1,2,3,4,5];
  let newArr = num.map(function(element){
    return element * 3;
  })
  console.log(newArr);

  for(let i = 0; i < newArr.length; i++){
    num[i] = newArr[i] * 3;
  }


  return (
    <div className="App" style={{backgroundColor:bgColor}}>
      <h1 style={{color:"skyblue"}}>Hello, {user}!</h1>
      <p>This is a React App</p>

        <div>
          <button onClick={()=>{
          //버튼 클릭하면
            setCount(count + 1)
            // setCount함수를 호출해서 count값을 +1 해라
          }}>Click Me</button>
        </div>
        <p>클릭 시 + {count}</p>

      <div className="list">
        <h4 style={{color:"blue"}}>{title[0]}</h4>
        <div>
        <span onClick={()=>{
          setCounter(counter + 1)
        }}>👍 {counter}</span>
        </div>
        <p>안녕안녕~ 나는 김지혜야.</p>
      </div>
      <button onClick={()=>{
          let copy = [...title];
          copy[0] = "리액트 너무 재밌어요!";
          setTitle(copy);
          }}>글 제목 변경</button>

      <div className="list">
        <h4 style={{color:"pink"}}>{title[1]}</h4>
        <div>
        <span onClick={()=>{
          setCounter(counter + 1)
        }}>👍 {counter}</span>
        </div>
        <p>안녕하세요 배현진입니다.</p>
      </div>

      <button onClick={()=>{
          let copy = [...title];
          // ...문자를 사용하여 spread 연산자 사용
          // 변수 copy에 title의 Array자료(여러자료)가 들어감
          copy[1] = "오늘은 비가 오지 않아요";
          setTitle(copy);
          }}>글 제목 변경</button>

      <div className="list">
        <h4 style={{color:"skyblue"}}>{title[2]}</h4>
        <div>
        <span onClick={()=>{
          setCounter(counter + 1)
        }}>👍 {counter}</span>
        </div>
        <p>안녕안녕~ 나는 김지혜야.</p>
      </div>

        <button onClick={()=>{
          let copy = [...title];
          copy[2] = "하지만 오늘은 바람이 불어요";
          setTitle(copy);
          }}>글 제목 변경</button>

         <button onClick={() => {
          // 버튼을 틀릭했을 때
          let Copy = [...title];
          Copy = Copy.sort();
          // sort() -> 오름차순 정렬
          setTitle(Copy);
          }}>글 정렬</button>

          <button onClick={() => {
            //setbgColor(bgcolor === "" ? "skyblue" : "");
            //setbgColor의 bgcolor 색이 없는게 맞으면 skyblue색을 넣어주고 색이 들어가 있으면 없애라.
            changeBg()
          }}>배경색 변경</button>

    </div>
  );
}

export default App;