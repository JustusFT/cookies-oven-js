//Write appropriate functions here for the oven. You may want to consider the following:
//1. A restart button is created when the user clicks the stop button.
//2. Now that you have created a restart button, think of what should happen when the restart button is clicked (refer back to the demo to help you).
//3. If you encountered any bugs in the demo, this is also the place where you can improve the demo's code.
//4. Some functions that you may find useful: getElementById, removeChild, innerHTML, setAttribute, appendChild, insertBefore.

function initTimerFunc() {
    document.getElementById('start-btn').addEventListener("click", startTimer);
    document.getElementById('stop-btn').addEventListener("click", endTimer);
}
document.addEventListener('DOMContentLoaded', initTimerFunc);

function resetTimer() {
  currentTime = -1;
  ovenAlreadyRan = false;
  document.getElementById("timer").innerHTML = "";
  document.getElementById("oven").style.backgroundImage = "initial";
  document.getElementById("buttons").removeChild(this)
  clearCookies();
}
