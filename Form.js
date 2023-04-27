class Form {
  constructor(parent) {
    this.parent = parent;
    this.mainContainer = document.createElement("div");
    this.ChatContainer = document.createElement("div");
    this.chatWindow = document.createElement("div");
    this.formElement = document.createElement("form");
    this.input = new Input(this.formElement);
    this.button = new Button(this.formElement);

    this.ChatContainer.classList.add("chat_container");
    this.chatWindow.classList.add("chatWindow");
    this.chatWindow.dataset.atribute = "chatWindow";
    this.mainContainer.classList.add("main_container");

    this.parent.appendChild(this.ChatContainer);
    this.ChatContainer.appendChild(this.chatWindow);
    this.ChatContainer.appendChild(this.formElement);
  }

  onSubmit(event) {
    event.preventDefault();
    let value = this.input.getValue();
    const message = new ChatMessage("You: " + value, this.chatWindow);
    message.init();
    this.input.clear();
  }

  getFormElement() {
    return this.formElement;
  }
}
