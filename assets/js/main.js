//DOM Elements
const studentForm = document.getElementById("studentForm");
const studentsContainer = document.querySelector(".students");
const nameInput = studentForm["name"];
const ageInput = studentForm["age"];
const rollInput = studentForm["roll"];

// sets the students array to values stored in local storage if they exist, otherwise it is empty
const students = JSON.parse(localStorage.getItem("students")) || [];

const addStudent = (name, age, roll) => {
    students.push({
        name,
        age,
        roll
    });
    // sets the students array to local storage as a string
    localStorage.setItem("students", JSON.stringify(students))
    return { name, age, roll };
};

const createStudentElement = ({ name, age, roll }) => {
    // Create elements
    const studentDiv = document.createElement("div");
    const studentName = document.createElement("h2");
    const studentAge = document.createElement("p");
    const studentRoll = document.createElement("p");
    
    // filling the content
    studentName.innerText = "Student name: " + name;
    studentAge.innerText = "Student age: " + age;
    studentRoll.innerText = "Student roll: " + roll;
    
    // adding to the DOM
    studentDiv.append(studentName, studentAge, studentRoll);
    studentsContainer.appendChild(studentDiv);

    studentsContainer.style.display = students.length === 0 ? "none" : "flex"
};
// if the students length is 0 then display: none;   else display: flex;
studentsContainer.style.display = students.length === 0 ? "none" : "flex"

// creates a div for each student element
students.forEach(createStudentElement);

// prevents the default action of the page reloading when the button is clicked
studentForm.onsubmit = (e) => {
    e.preventDefault();

    const newStudent = addStudent (
        nameInput.value,
        ageInput.value,
        rollInput.value
    );

    createStudentElement (newStudent);

    nameInput.value = "";
    ageInput.value = "";
    rollInput.value = "";
};
reset.addEventListener("click", function() {
    localStorage.clear();
});
reset.addEventListener("click", function() {
    window.location.reload();
});