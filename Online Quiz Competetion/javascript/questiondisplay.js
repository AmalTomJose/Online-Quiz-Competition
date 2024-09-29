let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
const radioButtons = document.querySelectorAll('input[name="option"]');

// getting questions and options from array
function showQuetions(index) {
  const que_text = document.querySelector(".que_text");

  //creating a new span and div tag for question and option and passing the value using array index
  let que_tag =
    "<span>" +
    questions[index].numb +
    ". " +
    questions[index].question +
    "</span>";
  let option_tag =
    '<div class="option" ><span>' +
    questions[index].options[0] +
    "</span></div>" +
    '<div class="option"><span>' +
    questions[index].options[1] +
    "</span></div>" +
    '<div class="option"><span>' +
    questions[index].options[2] +
    "</span></div>" +
    '<div class="option"><span>' +
    questions[index].options[3] +
    "</span></div>";
  que_text.innerHTML = que_tag; //adding new span tag inside que_tag
  option_list.innerHTML = option_tag; //adding new div tag inside option_tag

  const option = option_list.querySelectorAll(".option");

  // set onclick attribute to all available options
  for (i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick", "optionSelected(this)");
  }
}
//if user clicked on option
function optionSelected(answer) {
  //check whether username is there ornot
  questions[que_count].userAnswer = answer.textContent; //adding userclicked answer to the array userAnswer
  let userAns = questions[que_count].userAnswer; //getting user answer from the array
  // let userAns = answer.textContent; //getting user selected option
  let correcAns = questions[que_count].answer; //getting correct answer from array
  const allOptions = option_list.children.length; //getting all option items

  // if (questions[que_count].in('userAnswer')) {
  //   console.log('dhhfuia');  -
  if (questions[que_count].userScore == 1) {
    console.log("already checked");
  } else if (userAns == correcAns) {
    userScore += 1; //upgrading score value with 1.
    questions[que_count].userScore = 1;
    console.log("Correct Answer");
    console.log("Your correct answers = " + userScore);
  } else {
    console.log("wrong Answer");
  }
  for (i = 0; i < allOptions; i++) {
    option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options.
  }
  if (que_count == 0) {
    next_btn.classList.add("show");
  } else {
    next_btn.classList.add("show");
    prev_btn.classList.add("show");

    //show the next button if user selected any option
  }
}
