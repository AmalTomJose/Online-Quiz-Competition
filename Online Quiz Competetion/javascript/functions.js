function showResult() {
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
    result_box.classList.add("activeResult"); //show result box
    const scoreText = result_box.querySelector(".score_text");
    if (userScore > 3) {
      // if user scored more than 3
      //creating a new span tag and passing the user score number and total question number
      let scoreTag =
        "<span>and congrats! , You got <p>" +
        userScore +
        "</p> out of <p>" +
        questions.length +
        "</p></span>";
      scoreText.innerHTML = scoreTag; //adding new span tag inside score_Text
    } else if (userScore > 1) {
      // if user scored more than 1
      let scoreTag =
        "<span>and nice , You got <p>" +
        userScore +
        "</p> out of <p>" +
        questions.length +
        "</p></span>";
      scoreText.innerHTML = scoreTag;
    } else {
      // if user scored less than 1
      let scoreTag =
        "<span>and sorry , You got only <p>" +
        userScore +
        "</p> out of <p>" +
        questions.length +
        "</p></span>";
      scoreText.innerHTML = scoreTag;
    }
  }
  
  function queCounter(index) {
    //creating a new span tag and passing the question number and total question
    let totalQueCounTag =
      "<span><p>" +
      index +
      "</p> of <p>" +
      questions.length +
      "</p> Questions</span>";
    bottom_ques_counter.innerHTML = totalQueCounTag; //adding new span tag inside bottom_ques_counter
  }
  