window.onload = function () {
  showTime();
  function showTime() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let session = "AM";

    if (h === 0) {
      h = 12;
    }
    if (h > 12) {
      h = h - 12;
      session = "PM";
    }

    if (h < 10) {
      h = "0" + h;
    } else{
      h = h;
    }
    if (m < 10) {
      m = "0" + m;
    } else {
      m = m;
    }
    if (s < 10) {
      s = "0" + s;
    } else {
      s = s;
    }

    let time = h + ":" + m + ":" + s + "" + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;

    setTimeout(showTime, 1000);
  }
};
