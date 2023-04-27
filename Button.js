class Button {
  constructor(parent) {
    this.parent = parent;
    this.button = document.createElement("button");
    this.button.textContent = "Send";
    this.parent.appendChild(this.button);
  }
}
