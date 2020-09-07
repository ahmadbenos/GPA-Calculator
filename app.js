//make sure sw are supported
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("../sw_cached_pages.js")
      .then((reg) => console.log("Service worker: Registered"))
      .catch((err) => console.log(`Server Worker: Error: ${err}`));
  });
}

const add = document.getElementById("add");
const calculate = document.getElementById("calculate");
const gpaBlock = document.getElementById("gpaBlock");
const myGpa = document.getElementById("myGpa");
const myCourses = document.getElementById("myCourses");
const coursesBox = document.getElementById("coursesInput");
const number = document.getElementById("number");
const name = document.getElementById("name");
const moreInfo = document.getElementById("moreInfo");

let checkScreen = setInterval(checkDevice, 300);

function checkDevice() {
  if (window.matchMedia("(min-width: 811px) and (max-width: 1600px)").matches) {
    add.className = "btn btn-outline-success btn-lg";
    calculate.className = "btn btn-outline-primary btn-block btn-lg";
  } else {
    add.className = "btn btn-outline-success";
    calculate.className = "btn btn-outline-primary btn-block";
  }
}

add.addEventListener("click", addCourse);
function addCourse() {
  var course = document.createElement("div");
  course.className = "text-center py-2";
  coursesBox.appendChild(course);

  var x1 = document.createElement("div");
  x1.classList.add("form-row");
  course.appendChild(x1);

  var new1 = document.createElement("div");
  new1.classList.add("noneDisplay");
  x1.appendChild(new1);

  var new2 = document.createElement("div");
  new2.classList.add("noneDisplay");
  x1.appendChild(new2);

  var x2 = document.createElement("div");
  x2.classList.add("col-5");
  x1.appendChild(x2);

  var x3 = document.createElement("input");
  x3.className = "form-control namo";
  x3.id = "lolo";
  x3.placeholder = "Course(optional)";
  x3.type = "text";
  x2.appendChild(x3);

  var x4 = document.createElement("div");
  x4.classList.add("col");
  x1.appendChild(x4);

  var new4 = document.createElement("div");
  new4.classList.add("noneDisplay");
  x4.appendChild(new4);

  var x5 = document.createElement("input");
  x5.className = "form-control credito";
  x5.placeholder = "Credits";
  x5.type = "number";
  x4.appendChild(x5);

  var new5 = document.createElement("div");
  new5.classList.add("noneDisplay");
  x1.appendChild(new5);

  var x6 = document.createElement("div");
  x6.classList.add("col");
  x1.appendChild(x6);

  var new3 = document.createElement("div");
  new3.classList.add("noneDisplay");
  x6.appendChild(new3);

  var x7 = document.createElement("select");
  x7.name = "grade";
  x7.className = "form-control grades";
  x6.appendChild(x7);

  var op1 = document.createElement("option");
  op1.attributes = "disabled selected";
  op1.innerHTML = "Grade";
  x7.appendChild(op1);

  var op2 = document.createElement("option");
  op2.value = "A+";
  op2.innerHTML = "A+";
  x7.appendChild(op2);

  var op3 = document.createElement("option");
  op3.value = "A";
  op3.innerHTML = "A";
  x7.appendChild(op3);

  var op4 = document.createElement("option");
  op4.value = "A-";
  op4.innerHTML = "A-";
  x7.appendChild(op4);

  var op5 = document.createElement("option");
  op5.value = "B+";
  op5.innerHTML = "B+";
  x7.appendChild(op5);

  var op6 = document.createElement("option");
  op6.value = "B";
  op6.innerHTML = "B";
  x7.appendChild(op6);

  var op7 = document.createElement("option");
  op7.value = "B-";
  op7.innerHTML = "B-";
  x7.appendChild(op7);

  var op8 = document.createElement("option");
  op8.value = "C+";
  op8.innerHTML = "C+";
  x7.appendChild(op8);

  var op9 = document.createElement("option");
  op9.value = "C";
  op9.innerHTML = "C";
  x7.appendChild(op9);

  var op10 = document.createElement("option");
  op10.value = "C-";
  op10.innerHTML = "C-";
  x7.appendChild(op10);

  var op11 = document.createElement("option");
  op11.value = "D+";
  op11.innerHTML = "D+";
  x7.appendChild(op11);

  var op12 = document.createElement("option");
  op12.value = "D";
  op12.innerHTML = "D";
  x7.appendChild(op12);

  var op13 = document.createElement("option");
  op13.value = "F";
  op13.innerHTML = "F";
  x7.appendChild(op13);
}

calculate.addEventListener("click", calculateGpa);

function calculateGpa() {
  const lmao = document.querySelectorAll(".namo");
  const list = document.getElementById("listNames");

  gpaBlock.style.display = "block";
  list.innerHTML = "";
  var totalGPA;

  lmao.forEach((course, index, arr) => {
    let item = course.value;
    let itemGrade =
      course.parentElement.parentElement.childNodes[5].childNodes[1].value;
    let newItem = document.createElement("p");
    if (itemGrade === "Grade") {
      newItem.innerHTML = item;
    } else {
      newItem.innerHTML = item + "(" + itemGrade + ")";
    }

    if (course.value == "") {
      newItem.innerHTML = "";
    }
    list.appendChild(newItem);
  });
  // console.log(
  //   lmao[5].parentElement.parentElement.childNodes[5].childNodes[1].value
  // );

  if (list.innerText === "") {
    list.style.lineHeight = "22px";
    list.innerHTML =
      "this section displays your courses name with their GPA. You didn't add a name to any of your courses. <u>Fill in the course name input box to view your courses here.</u>";
  }
  // console.log(grades[1].value);
  /*console.log(
    grades[1].parentElement.parentElement.childNodes[3].childNodes[1].value
  );*/
  const credit = document.querySelectorAll(".credito");
  const grades = document.querySelectorAll(".grades");

  let newGrades = Array.from(grades);
  /*console.log(
    newGrades[5].parentElement.parentElement.childNodes[3].childNodes[1].value //childNodes[3].childNodes[1].value
  );*/
  var allGpa = newGrades.map((grade, index, arr) => {
    let creditInput = Number(
      grade.parentElement.parentElement.childNodes[3].childNodes[1].value
    );
    let selectedGrade = grade.value;
    if (selectedGrade === "A+" || selectedGrade === "A") {
      var gpaX = Number(creditInput * 4);
    } else if (selectedGrade === "A-") {
      var gpaX = Number(creditInput * 3.67);
    } else if (selectedGrade === "B+") {
      var gpaX = Number(creditInput * 3.33);
    } else if (selectedGrade === "B") {
      var gpaX = Number(creditInput * 3);
    } else if (selectedGrade === "B-") {
      var gpaX = Number(creditInput * 2.67);
    } else if (selectedGrade === "C+") {
      var gpaX = Number(creditInput * 2.33);
    } else if (selectedGrade === "C") {
      var gpaX = Number(creditInput * 2);
    } else if (selectedGrade === "C-") {
      var gpaX = Number(creditInput * 1.67);
    } else if (selectedGrade === "D") {
      var gpaX = Number(creditInput * 1.33);
    } else if (selectedGrade === "D-") {
      var gpaX = Number(creditInput * 1);
    } else if (selectedGrade === "F") {
      var gpaX = Number(creditInput * 0);
    } else if (selectedGrade === "Grade") {
      var gpaX = Number(creditInput * 0);
    }

    return gpaX;
  });

  let sum = allGpa.reduce((total, num) => {
    return total + num;
  });
  let credit1 = Array.from(credit);
  let totalCredits = credit1.map((item, arr) => {
    return item.value;
  });
  let finalCredits = totalCredits.reduce((total, num) => {
    return Number(total) + Number(num);
  });
  let myFinalGpa = (sum / finalCredits).toFixed(2);
  console.log(myFinalGpa);

  myCourses.innerHTML = "Total Credits: " + finalCredits;
  console.log(credit1.length);

  myGpa.innerHTML = "My GPA: " + myFinalGpa;
}
