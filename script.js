/*
COMPLETE THE FOLLOWING TASKS WITHOUT MODIFYING ANY OF THE CODE IN THE HTML OR CSS FILE.

You should only write code in the JavaScript functions below, 
as well as update the `studentInformation` object with your personal information.

Each function is annotated with a comment explaining what it should do.

By the end of the lab, all tests in the report should be passing.
*/

const studentInformation = {
	name: "Enzo Falone",
	grade: "1",
	advisor: "Walter White",
	major: "Computer Science",
	graduationYear: "2024",
	imageUrl: "https://avatars.githubusercontent.com/u/20959424",
};

let semester = "Spring Semester";

const studentData = {
	"Spring Semester": [{
			code: "LIT 101",
			name: "English Literature 101",
			semester: "Spring 2021",
			credits: 5,
			grade: "B+",
		},
		{
			code: "CS 50",
			name: "Intro to Computer Science",
			semester: "Spring 2021",
			credits: 5,
			grade: "A-",
		},
		{
			code: "WD 140",
			name: "Modern Web Development",
			semester: "Spring 2021",
			credits: 5,
			grade: "A+",
		},
		{
			code: "JS 2.0",
			name: "Serverside JavaScript",
			semester: "Spring 2021",
			credits: 10,
			grade: "A-",
		},
	],
	"Fall Semester": [{
			code: "Math 600",
			name: "Differential Equations",
			semester: "Fall 2020",
			credits: 5,
			grade: "A-",
		},
		{
			code: "CS 10",
			name: "Python Programming",
			semester: "Fall 2020",
			credits: 5,
			grade: "A",
		},
		{
			code: "History 99",
			name: "History of Computers",
			semester: "Fall 2020",
			credits: 5,
			grade: "A-",
		},
		{
			code: "MD 00",
			name: "Meditation and Mindfullness",
			semester: "Fall 2020",
			credits: 5,
			grade: "A+",
		},
	],
	"Winter Term": [{
			code: "PHYS ED",
			name: "Physical Activity",
			semester: "Winter 2020",
			credits: 5,
			grade: "A-",
		},
		{
			code: "GEN ED",
			name: "General Education Requirement",
			semester: "Winter 2020",
			credits: 5,
			grade: "A+",
		},
	],
};

const gpaPointsLookup = {
	"A+": 4.0,
	A: 4.0,
	"A-": 3.7,
	"B+": 3.3,
	B: 3.0,
	"B-": 2.7,
	"C+": 2.3,
	C: 2.0,
	"C-": 1.7,
	"D+": 1.3,
	D: 1.0,
	"D-": 0.7,
	F: 0.0,
};

/**
 * QUERY SELECTORS VARIABLES GO HERE
 */

// student span querySelectors
const spanStudentName = document.querySelector("#student-name");
const spanStudentAdvisor = document.querySelector("#student-advisor");
const spanStudentMajor = document.querySelector("#student-major");
const spanStudentGradeLevel = document.querySelector("#student-grade-level");
const spanStudentGradYear = document.querySelector("#student-graduation-year");

//student img querySelector
const imgStudentProfile = document.querySelector("#student-image");

//dropdown querySelectors
const dropdownEl = document.querySelector(".dropdown");
const dropdownH2 = document.querySelector(".dropdown-button");
const dropdownText = document.querySelector(".dropdown-label");

const dropdownFallSpan = document.querySelector("#fall-semester");
const dropdownSpringSpan = document.querySelector("#spring-semester");
const dropdownWinterSpan = document.querySelector("#winter-term");

//report card table querySelector
const reportCardTable = document.querySelector("#report-card-table");

/**
 * SOLUTIONS FOR STUDENT INFO DOM UPDATES
 */

/**
 * Modify the report card to display the correct grade level from the lookup table above.
 *
 * @param {String} studentName - the name of the student
 */
function updateStudentName(studentName) {
	spanStudentName.textContent = studentName;
}

/**
 * Modify the report card to display the correct grade level from the lookup table above.
 *
 * @param {String|Number} studentGradeLevel - the grade level of the student
 */
function updateStudentGradeLevel(studentGradeLevel) {
	spanStudentGradeLevel.textContent = studentGradeLevel;
}

/**
 * Modify the report card to display the correct advisor from the lookup table above.
 *
 * @param {String} studentAdvisor - the advisor of the student
 */
function updateStudentAdvisor(studentAdvisor) {
	spanStudentAdvisor.textContent = studentAdvisor;
}

/**
 * Modify the report card to display the correct major from the lookup table above.
 *
 * @param {String} studentMajor - the major of the student
 */
function updateMajor(studentMajor) {
	spanStudentMajor.textContent = studentMajor;
}

/**
 * Modify the report card to display the correct graduation year from the lookup table above
 *
 * @param {Number} graduationyear - the year the student graduates
 */
function updateStudentGraduationYear(graduationYear) {
	spanStudentGradYear.textContent = graduationYear;
}

/**
 * Modify the img element using `setAttribute` so that that the src attribute
 * stores the link to your image.
 *
 * @param {String} url - a link to an image
 */
function updateStudentImage(imageUrl) {
	imgStudentProfile.src = imageUrl;
}

/**
 * This function should run as soon as the page loads and update the correct student info
 */
function populateStudentInfo(studentInformationObject) {
	updateStudentName(studentInformationObject.name);
	updateStudentGradeLevel(studentInformationObject.grade);
	updateStudentAdvisor(studentInformationObject.advisor);
	updateMajor(studentInformationObject.major);
	updateStudentGraduationYear(studentInformationObject.graduationYear);
	updateStudentImage(studentInformationObject.imageUrl);
}

/**
 * SOLUTION FOR INNER HTML DOM UPDATES
 */

/**
 * This function should add a headers row to the report card table
 */
function addReportCardHeaders(reportCardTableElement) {
	// update the code here
	reportCardTableElement.innerHTML += `
  <div class="table-row table-header">
    <h4 class="code-col">Code</h4>
    <h4 class="name-col">Name</h4>
    <h4 class="sem-col">Semester</h4>
    <h4 class="cred-col">Credits</h4>
    <h4 class="lett-col">Letter</h4>
    <h4 class="pts-col">Points</h4>
  </div>`;
}

/**
 * This function should take in a single course and create a row with the
 * course code, course name, course semester, course credits, course letter grade, and course points columns.
 *
 * @param {Object} course
 * @param {Number} rowNum
 */
function addCourseRowToReportCard(reportCardTableElement, course, rowNum) {
	// update the code here with information about the course passed to this function
	reportCardTableElement.innerHTML += `
  <div class="table-row course-row row-${rowNum + 1} ${rowNum % 2 === 1 ? "odd" : "even"}">
    <h4 class="code-col">${course.code}</h4>
    <h4 class="name-col">${course.name}</h4>
    <h4 class="sem-col">${course.semester}</h4>
    <h4 class="cred-col">${course.credits} credits</h4>
    <h4 class="lett-col">${course.grade}</h4>
    <h4 class="pts-col">${gpaPointsLookup[course.grade]}</h4>
  </div>
  `;
}

/**
 * This function should add HTML for the totals row in the report card.
 */
function addTotalsRow(reportCardTableElement) {
	rowNum = reportCardTableElement.querySelectorAll(".table-row").length - 1;

	reportCardTableElement.innerHTML += `<div class="table-row course-row row-${rowNum + 1} ${rowNum % 2 === 1 ? "odd" : "even"}">
		<h4 class="code-col"></h4>
		<h4 class="name-col"></h4>
		<h4 class="sem-col">Totals: </h4>
		<h4 class="cred-col">${addUpStudentCredits(reportCardTableElement)} credits</h4>
		<h4 class="lett-col"></h4>
		<h4 class="pts-col"></h4>
	  </div>`;
}

/**
 * This function should add HTML for the final row in the report card.
 */
function addGpaRow(reportCardTableElement) {
	rowNum = reportCardTableElement.querySelectorAll(".table-row").length - 1;

	reportCardTableElement.innerHTML += `<div class="table-row course-row row-${rowNum + 1} ${rowNum % 2 === 1 ? "odd" : "even"}">
		<h4 class="code-col"></h4>
		<h4 class="name-col"></h4>
		<h4 class="sem-col">GPA: </h4>
		<h4 class="cred-col">${calculateSemesterGpa(reportCardTableElement)}</h4>
		<h4 class="lett-col"></h4>
		<h4 class="pts-col"></h4>
	  </div>`;
}

/**
 * This is the primary function used to update the report card when the semester changes
 *
 * It should call the other functions responsible for creating the necessary HTML
 *
 */
function updateReportCard(reportCardTableElement, currentSemester) {
	// update the dropdown label
	updateDropdownLabel();

	// reset the report card table's inner html to an empty string
	if (reportCardTableElement) reportCardTableElement.innerHTML = ``;

	// add your code here
	addReportCardHeaders(reportCardTableElement);

	currentSemester.forEach((semester, i) => {
		addCourseRowToReportCard(reportCardTableElement, semester, i);
	})

	addTotalsRow(reportCardTableElement);
	addGpaRow(reportCardTableElement);
}

/**
 * SOLUTION FOR DROPDOWN EVENT HANDLERS
 */

/**
 * These two functions should be used to toggle the dropdown.
 *
 * If the dropdown classList contains the "closed" class, the 'openDropdown' function should remove it.
 * If the dropdown classList doesn't contain the "closed" class, 'closeDropdown' function should add it.
 */
function closeDropdown(dropdownElement) {
	// if the element does not contain the closed class, add it
	dropdownElement.classList.add("closed");
}

function openDropdown(dropdownElement) {
	// if the element contains the closed class, remove it in order for the user to see the dropdown options
	if (dropdownElement.classList.contains("closed")) {
		dropdownElement.classList.remove("closed");
	} else {
		closeDropdown(dropdownElement);
	}
}

/**
 * This function should update the inner html of the dropdown label to be the current
 * value stored in the `semester` variable.
 *
 */
function updateDropdownLabel() {
	dropdownText.textContent = semester;
}

function dropdownOptionCallback(newSemester) {
	semester = newSemester;
	updateDropdownLabel();
	updateReportCard(reportCardTable,studentData[semester]);
}

/**
 * This function should add the proper event listeners to the correct DOM elements
 * responsible for managing the state of the dropdown menu.
 *
 */
function addEventListeners(
	dropdownElement,
	dropdownButtonElement,
	reportCardTableElement,
	fallSemesterElement,
	springSemesterElement,
	winterTermElement
) {
	// Add an event listener for the dropdown button that calls the openDropdown function with the correct DOM element
	// call the `updateReportCard` function, and close the dropdown

	// dropdownElement.addEventListener("click", (e) => {
	// 	openDropdown(e.currentTarget);
	// });

	// //dropdown options
	// fallSemesterElement.addEventListener("click", (e) => {
	// 	updateDropdownLabel(e.currentTarget.innerHTML);
	// });
	// springSemesterElement.addEventListener("click", (e) => {
	// 	updateDropdownLabel(e.currentTarget.innerHTML);
	// });
	// winterTermElement.addEventListener("click", (e) => {
	// 	updateDropdownLabel(e.currentTarget.innerHTML);
	// });
}

/***************
   CALCULATIONS
****************/

/**
 * Use query selectors on the `reportCardTableElement` element
 * to access the credits the student has earned for each course.
 * Add them up and display the total in the proper location.
 *
 * It may be useful to check for the existence of certain elements
 * before updating the DOM.
 *
 */
function addUpStudentCredits(reportCardTableElement) {
	let totalCredits = 0;
	
	let creditsElements = reportCardTableElement.querySelectorAll(".cred-col");

	for (let i = 0; i < creditsElements.length; i++) {
		if(i == 0) continue;
		totalCredits += parseInt(creditsElements[i].textContent);
	}

	return totalCredits;
}

/**
 * Use query selectors on the `reportCardTableElement` element
 * to access the letter grades for each course and convert them to GPA points using
 * the `pointsLookup` object.
 *
 * That English Literature grade is keeping us from all A's! Let's see if we can't update that to an A-
 * since we definitely deserve it after a hard semester of work.
 *
 * Then perform a quick calculation and update the report card with the total points and
 * cumulative grade point average for the semester.
 *
 */

function calculateSemesterGpa(reportCardTableElement) {
	let totalPoints = 0;

	let pointsElements = reportCardTableElement.querySelectorAll(".lett-col");

	for (let i = 0; i < pointsElements.length; i++) {
		if((i === 0)) continue;
		if(gpaPointsLookup[pointsElements[i].textContent] === undefined) {
			//do nothing
		} else {
			totalPoints = gpaPointsLookup[pointsElements[i].textContent]
		};

	}

	let totalCredits = addUpStudentCredits(reportCardTableElement);
	let GPA = (totalPoints*totalCredits)/totalCredits;
	
	return GPA;
}

window.onload = function () {
	populateStudentInfo(studentInformation);
	updateReportCard(reportCardTable, studentData[semester]);
};

// window.onload is being called twice and event listeners are not working properly
dropdownEl.addEventListener("click", (e) => {
	openDropdown(e.currentTarget);
});

//dropdown options
dropdownFallSpan.addEventListener("click", (e) => {
	dropdownOptionCallback(e.currentTarget.textContent);
});

dropdownSpringSpan.addEventListener("click", (e) => {
	dropdownOptionCallback(e.currentTarget.textContent);
});

dropdownWinterSpan.addEventListener("click", (e) => {
	dropdownOptionCallback(e.currentTarget.textContent);
});
