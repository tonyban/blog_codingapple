/* eslint-disable */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
let [title, titleChange] = useState(['자바스크립트 독학법', '코딩부트캠프 추천', '비전공자 개발자 현황']);
let [like, likeChange] = useState(0);
let [modal, modalChange] = useState(true); // 모달창을 켜고 닫는 스위치
let [secondTitle, secondTitleChange] = useState(0);
let [inputValue, inputValueChange] = useState('');

return (
   <div className="App">
     <div className="black-nav">
       <h1>삼빛나 선익의 개발 Blog</h1>
     </div>

     {  //이렇게 map을 이용하면 위의 글제목 태그들 모두 지워도 됨
       title.map(function(title, i){
         return (
         <div className="list">
          <h3 onClick={()=>{ secondTitle(i) }}> { title } <span onClick={()=>{ likeChange(like + 1)}}>👍</span> {like} 
          </h3>
           <p>2022년 1월 2일 발행</p>
           <hr/>
         </div>  
         )
       })
     }

     {/* <button onClick={()=>{ 누른제목변경(0) }}>버튼1</button>
     <button onClick={()=>{ 누른제목변경(1) }}>버튼2</button>
     <button onClick={()=>{ 누른제목변경(2) }}>버튼3</button> */}
   
     <div className="publish">
       <input onChange={(e)=>{inputValueChange(e.target.value)}}/>
       <button onClick={()=>{
         var arrayCopy = [...title];
         arrayCopy.unshift(inputValue);
         titleChange(arrayCopy);
       }}>저장</button>
     </div>

     <button onClick={()=>{modalChange(!modal)}}>열고닫기</button>

     {
       modal === true  //3항연산, 만약 모달창이 true라면
       ? <Modal title={title} secondTitle={secondTitle}></Modal>
       : null
     }

   </div>  
  );
}

function Modal(props){
  return (
    <div className="modal">
       <h2> {props.title[props.secondTitle]} </h2>
       <p>날짜</p>
       <p>상세내용</p>   
    </div>
  )
}

export default App;
