document.addEventListener("DOMContentLoaded", () => {
  createSquares();

  const keys = document.querySelectorAll(".keyboard-row button");

  for (let i = 0; i < keys.length; i++) {
    keys[i].onClick = ({ target }) => {
      const key = target.getAttribute("data-key");

      console.log(key);
    };
  }

  function createSquares() {
    const gameBoard = document.getElementById("board");

    for (let index = 0; index < 30; index++) {
      let square = document.createElement("div");
      square.classList.add("square");
      square.setAttribute("id", index + 1);
      gameBoard.appendChild(square);
    }
  }
});
