const progresBtnEl = document.querySelectorAll(".btn-progress ");
const addBtnEl = document.querySelector(".btn-proceed");
const btnOne = document.querySelector(".one");
const btnTwo = document.querySelector(".two");
const btnThree = document.querySelector(".three");
const btnfour = document.querySelector(".four");

//
addBtnEl.addEventListener("click", function () {
  btnOne.classList.add("active");
  btnTwo.classList.add("active");
  addBtnEl.innerText = "Buy Item";
});

progresBtnEl.forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    if (event.target.classList.contains("one")) {
      event.target.classList.toggle("active");
      document.querySelector(".two").classList.toggle("active");
      document.querySelector(".three").classList.toggle("active");
      document.querySelector(".four").classList.toggle("active");
    } else if (event.target.classList.contains("three")) {
      event.target.classList.toggle("active");
      document.querySelector(".one").classList.toggle("active");
      document.querySelector(".two").classList.toggle("active");
      document.querySelector(".four").classList.toggle("active");
    } else {
      document.querySelector(".one").classList.toggle("active");
      document.querySelector(".three").classList.toggle("active");
      document.querySelector(".four").classList.toggle("active");
      document.querySelector(".two").classList.toggle("active");
      event.target.classList.toggle("active");
    }
  });
});
