"use strict";

class Chat {
  constructor() {
    this.mainContainer = document.createElement("div");
    this.mainContainer.classList.add("main_container");
    document.body.appendChild(this.mainContainer);
    
    this.form = new Form(this.mainContainer);
    this.ball = new Ball(this.mainContainer);
    this.chatMessage = new ChatMessage();
    this.chatWindow = this.form.chatWindow;
    this.answer = new ChatBot([
      "It is certain",
      "Without a doubt",
      "You may rely on it",
      "Yes, definitely",
      "It is decidedly so",
      "As I see it, yes ",
      "Most likely",
      "Outlook good",
      "Yes",
      "Signs point to yes",
      "Reply hazy, try again",
      "Better not tell you now",
      "Ask again later",
      "Cannot predict now",
      "Concentrate and ask again",
      "Don't count on it",
      "Outlook not so good",
      "Very doubtful",
      "My sources say no",
      "Signs point to no"
    ],this.ball);
    
  }
  activateChat() {
    const formElement = this.form.getFormElement();
    formElement.addEventListener("submit", async (event) => {
      this.form.onSubmit(event);
      const answerMessage = new ChatMessage(
        await this.answer.answerOn(),
        this.chatWindow
      );
      answerMessage.init();
    });
  }
}

const chat = new Chat();
chat.activateChat();

