const day = document.querySelector("#day");
const month = document.querySelector("#month");
const year = document.querySelector("#year");
const daySpan = document.querySelector(".days-age");
const monthSpan = document.querySelector(".months-age");
const yearSpan = document.querySelector(".year-age");
const btn = document.querySelector("#btn");
const errormsg = document.querySelectorAll(".error");
const input = document.querySelectorAll("input");
const currDate = new Date();
btn.addEventListener("click", function (e) {
  const inputday = Number(day.value);
  const inputmonth = Number(month.value);
  const inputyear = Number(year.value);

  daySpan.textContent = `- -`;
  monthSpan.textContent = `- -`;
  yearSpan.textContent = `- -`;

  if (
    0 < inputday < 32 &&
    0 < inputmonth < 13 &&
    inputyear > 0 &&
    inputyear <= currDate.getFullYear()
  ) {
    const birthDate = new Date(inputyear, inputmonth - 1, inputday);
    if (currDate - birthDate > 0) {
      const lbl = document.querySelectorAll("label");
      lbl.forEach((elem) => {
        elem.style.color = "#9b9b9b";
      });
      errormsg.forEach((elem) => {
        elem.style.opacity = "0";
      });
      input.forEach((elem) => {
        elem.style.border = `0.5px solid #9b9b9b`;
      });
      const age = new Date(currDate - birthDate);
      const yearsAge = Number(age.getFullYear() - 1970);
      const monthsAge = Number(age.getMonth());
      const daysAge = Number(age.getDate() - 1);
      console.log(yearsAge, monthsAge, daysAge);
      daySpan.textContent = `${daysAge} `;
      monthSpan.textContent = `${monthsAge} `;
      yearSpan.textContent = `${yearsAge} `;
    } else {
      const lbl = document.querySelectorAll("label");
      lbl.forEach((elem) => {
        elem.style.color = "#ee6166";
      });
      errormsg.forEach((elem) => {
        elem.style.opacity = "1";
      });
      input.forEach((elem) => {
        elem.style.border = `0.5px solid #ee6166`;
      });
    }
  } else {
    const lbl = document.querySelectorAll("label");
    lbl.forEach((elem) => {
      elem.style.color = "#ee6166";
    });
    errormsg.forEach((elem) => {
      elem.style.opacity = "1";
    });
    input.forEach((elem) => {
      elem.style.border = `0.5px solid #ee6166`;
    });
  }
});
