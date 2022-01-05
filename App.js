/* eslint-disable */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬독학']);
let [따봉, 따봉변경] = useState(0);
let [modal, modal변경] = useState(false); // 모달창을 켜고 닫는 스위치
let posts = '강남 고기 맛집';
function 제목바꾸기() {
  var newArray = [...글제목];
  newArray[0] = '여자코트 추천';
  글제목변경(newArray);
}

return (
   <div className="App">
     <div className="black-nav">
       <div>개발 Blog</div>
     </div>

     {  //이렇게 map을 이용하면 위의 글제목 태그들 모두 지워도 됨
       글제목.map(function(글){
         return (
         <div className="list">
          <h3> { 글 } <span onClick={()=>{ 따봉변경(따봉 + 1)}}>👍</span> {따봉} 
          </h3>
           <p>2월 18일 발행</p>
           <hr/>
         </div>  
         )
       })
     }

     <button onClick={()=>{mpdal변경(!modal)}}>열고닫기</button>

     {
       modal === true  //3항연산, 만약 모달창이 true라면
       ? <Modal></Modal>
       : null
     }

   </div>  
  );
}

function Modal () {
  return (
    <div className="modal">
       <h2>제목</h2>
       <p>날짜</p>
       <p>상세내용</p>   
    </div>
  )
}

export default App;
