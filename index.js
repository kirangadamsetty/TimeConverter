let hoursEl = document.getElementById("hoursInput");
let minutesEl = document.getElementById("minutesInput");
let convertBtnEl = document.getElementById("convertBtn");
let resultEl = document.getElementById("timeInSeconds");
let errorMsgEl = document.getElementById("errorMsg");

let errorHourText = "** Please enter a valid number of hours **";
let errorMinutesText = "** Please enter a valid number of minutes **";

resultEl.classList.add("d-none");

convertBtnEl.addEventListener("click", function() {
    if (hoursEl.value === "") {
        resultEl.classList.add("d-none");
        errorMsgEl.textContent = errorHourText;
    } else if (minutesEl.value === "") {
        resultEl.classList.add("d-none");
        errorMsgEl.textContent = errorMinutesText;
    } else {
        let totalHours = parseInt(hoursEl.value) * 3600;
        let totalMinutes = parseInt(minutesEl.value) * 60;
        resultEl.classList.remove("d-none");
        errorMsgEl.textContent = "";
        resultEl.textContent = totalHours + totalMinutes + "s";
    }

});