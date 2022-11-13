const currentTime = document.querySelector("h1");
const selectMenu = document.querySelectorAll("select");
content = document.querySelector(".content");
const AlarmBtn = document.querySelector("button");

let alarmTime, isAlarmSet = false;
ringtone = new Audio("./files/Clock-sound-effect.mp3")

for (let i = 12; i > 0; i--) {
  i = i < 10 ? "0" + i : i;
  let option = `<option value="${i}">${i}</option>`;
  selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}
for (let i = 59; i >= 0; i--) {
  i = i < 10 ? "0" + i : i;
  let option = `<option value="${i}">${i}</option>`;
  selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}
for (let i = 2; i > 0; i--) {
  ampm = i == 1 ? "AM" : "PM";
  let option = `<option value="${ampm}">${ampm}</option>`;
  selectMenu[2].firstElementChild.insertAdjacentHTML("afterend", option);
}

setInterval(() => {
  let date = new Date(),
    h = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds(),
    ampm = "AM";

  if (h >= 12) {
    h = h - 12;
    ampm = "PM";
  }

  h = h == 0 ? (h = 12) : h;
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  currentTime.innerText = `${h}:${m}:${s} ${ampm}`;
  if (alarmTime == `${h}:${m}:${s} ${ampm}`) {
    ringtone.play();
    ringtone.loop = true;
    snooze.className = "";
  }
}, 100);

function setAlarm() {

   if(isAlarmSet) {
    alarmTime = "";
    ringtone.pause();
    content.classList.remove("disable");
    AlarmBtn.innerText = "Set Alarm";
    return isAlarmSet = false;

   }




  let time = `${selectMenu[0].value}:${selectMenu[1].value}:00 ${selectMenu[2].value}`;

  if (
    time.includes("Hour") ||
    time.includes("Minute") ||
    time.includes("AM/PM")
  ) {
    return alert("Please set a valid time for alarm");
  }
  isAlarmSet = true;
  alarmTime = time;
  content.classList.add("disable");
  AlarmBtn.innerText = "Clear Alarm";
}

AlarmBtn.addEventListener("click", setAlarm);

// function ClearBtn() {
//     delete(setAlarm);
// }
// AlarmBtn.addEventListener("click", ClearBtn);

