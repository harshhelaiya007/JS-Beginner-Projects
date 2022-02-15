const countdownEl = document.getElementById("countdown");
const btnSubmit = document.querySelector(".btn .btn");

countdownEl.innerHTML = `0:00`;

btnSubmit.addEventListener("click", function (e) {
  const countTimer = Number(document.getElementById("inputCounter").value);
  StartingMinutes = countTimer ? countTimer : 0;
  let time = StartingMinutes * 60;

  if (StartingMinutes === 0) {
    countdownEl.innerHTML = `0:00`;
  } else {
    setInterval(updateCountdown, 1000);

    function updateCountdown() {
      const minutes = Math.floor(time / 60);
      console.log(minutes);
      let seconds = time % 60;

      seconds = seconds < 10 ? "0" + seconds : seconds;
      countdownEl.innerHTML = `${minutes} : ${seconds}`;

      time--;
    }
  }
  //   btnSubmit.style.display = "none";
});

const resetBtn = document.querySelectorAll(".btn")[2];
resetBtn.addEventListener("click", function (e) {
  location.reload();
  //   countTimer.value = "";
  //   console.log(countdownEl);
});
