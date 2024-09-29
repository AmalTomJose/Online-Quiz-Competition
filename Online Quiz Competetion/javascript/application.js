//selecting all the required elements
const elem = document.documentElement;
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = document.querySelector(".buttons .quit");
const continue_btn = document.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");


// if startQuiz button clicked
start_btn.onclick = (e) => {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  }

  info_box.classList.add("activeInfo"); //show info box
  prevent();
};
// if exitQuiz button clicked
exit_btn.onclick = () => {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  }
  window.location.reload(); //reload the current window
};

// if continueQuiz button clicked
continue_btn.onclick = () => {
  info_box.classList.remove("activeInfo"); //hide info box
  quiz_box.classList.add("activeQuiz"); //show quiz box
  showQuetions(0); //calling showQestions function
  queCounter(1); //passing 1 parameter to queCounter
  timerTime.classList.add("activeTimer");
  startCountdown();
  timerInterval = setInterval(startCountdown, 1000);
};

const quit_quiz = result_box.querySelector(".buttons .quit");


// if quitQuiz button clicked
quit_quiz.onclick = () => {
  window.location.reload(); //reload the current window
};


const prev_btn=document.querySelector("footer .prev_btn");
const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

// if Next Que button clicked
next_btn.onclick = () => {

  if (que_count < questions.length - 1) {
    //if question count is less than total question length
    que_count++; //increment the que_count value
    que_numb++; //increment the que_numb value
    showQuetions(que_count); //calling showQestions function
    queCounter(que_numb); //passing que_numb value to queCounter
    prev_btn.classList.remove("show");
    next_btn.classList.remove("show"); //hide the next button
  } else {
    endCountdown();
    // showResult(); //calling showResult function
  }
};
//if previous Que button clicked
prev_btn.onclick=()=>{
  
  if(que_count<questions.length ){
    que_count--;
    que_numb--;
    showQuetions(que_count);
    queCounter(que_numb) 
    prev_btn.classList.remove("show");
    next_btn.classList.remove("show"); //hide the next button
  }
};

