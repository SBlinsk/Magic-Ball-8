class Ball {
  constructor(parent) {
    this.parent = parent;
    this.container = document.createElement("div");
    this.ball = document.createElement("div");
    this.ballWindow = document.createElement("div");
    this.triangle = document.createElement("div");
    this.contentWindow = document.createElement("div");

    this.container.classList.add("ball_container");
    this.ball.classList.add("ball");
    this.ballWindow.classList.add("ball_window");
    this.ballWindow.classList.add("ball_deactivated");
    // this.triangle.classList.add("triangle");
    this.contentWindow.classList.add("content");

    this.parent.appendChild(this.container);
    this.container.appendChild(this.ball);
    this.ball.appendChild(this.ballWindow);
  }

  activateAnimation() {
    this.ball.classList.add("move-animation");
  }
  deactivateAnimation() {
    this.ball.classList.remove("move-animation");
  }

  activatedView(answer) {
    this.ballWindow.classList.remove("ball_deactivated");
    this.ballWindow.classList.add("ball_activated");
    this.ballWindow.appendChild(this.triangle);
    this.triangle.classList.add("triangle");
    this.triangle.appendChild(this.contentWindow);
    this.contentWindow.textContent = answer;
  }
}
