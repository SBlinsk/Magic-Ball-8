class ChatMessage {
  constructor(string, parent) {
    this.string = string;
    this.parent = parent;
  }
  init() {
    const message = document.createElement("div");
    message.textContent = this.string;
    
    this.parent.appendChild(message);
    message.scrollIntoView();
  }
}
