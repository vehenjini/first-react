/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import Comment from './component/Comment';
import CommentList from './component/CommentList'
import AddPractice from './component/AddPractice';
import back from './이미지1.jpg'

function App() {
  return (
    <div className='App'>
      <CommentList/>
      {/* <div className='back'></div> */}

      {/* <img src={process.env.PUBLIC_URL + '이미지3.jpg'} />; */}

      {/* <div style={{backgroundImage : 'url()'}}></div>
      <img src={process.env.PUBLIC_URL + '/img/logo.png'} />; */}
      <img src={back} alt="이미지" />
    </div>
  );
}

export default App;