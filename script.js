let score = 20;
let secretNumber = Math.floor(Math.random() * 20 + 1);
let hiScore = 20;
console.log(secretNumber);

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guessing").value);
  // console.log("type of check", guess, "is", typeof guess);

  console.log(guess);
  let result = "";
  if (!guess) {
    result = "No Number found";
  } else if (guess === secretNumber) {
    result = "equal";
  } else {
    result = guess > secretNumber ? "too High" : "too Low";
  }
  document.querySelector(".message").textContent = result;
});
