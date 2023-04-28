class ChatBot {
  constructor(arrOfAnswers, ball) {
    this.answers = arrOfAnswers;
    this.ball = ball;
  }

  async getRandomAnswerWithDelay() {
    const randomIndex = getRandomNumber(0, this.answers.length);
    const randomDelay = getRandomNumber(0, 3000);
   
    this.ball.deacivatedView();
    
    this.ball.activateAnimation();
    await wait(randomDelay);
    this.ball.deactivateAnimation();
    const answer = this.answers[randomIndex];
    this.ball.activatedView(answer);

    return "Magic Ball: " + answer;
  }

  answerOn() {
    return this.getRandomAnswerWithDelay();
  }
}

function getRandomNumber(start, end) {
  return Math.floor(Math.random() * (end - start) + start);
}
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
