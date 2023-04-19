// Define an array to store student marks
let students = [];

// Function to add student marks to the array
function addStudentMarks() {
  // Get the selected student name and marks for 4 subjects
  let selectedStudent = document.getElementById("student-select").value;
  let subject1Marks = parseInt(document.getElementById("subject1").value);
  let subject2Marks = parseInt(document.getElementById("subject2").value);
  let subject3Marks = parseInt(document.getElementById("subject3").value);
  let subject4Marks = parseInt(document.getElementById("subject4").value);

  // Calculate the total score for the student
  let totalScore = subject1Marks + subject2Marks + subject3Marks + subject4Marks;

  // Find the student in the array (if already exists)
  let studentIndex = students.findIndex(student => student.name === selectedStudent);

  if (studentIndex !== -1) {
    // If the student already exists in the array, update the marks and score
    students[studentIndex].marks = [subject1Marks, subject2Marks, subject3Marks, subject4Marks];
    students[studentIndex].score = totalScore;
  } else {
    // If the student does not exist in the array, add the student with marks and score
    students.push({
      name: selectedStudent,
      marks: [subject1Marks, subject2Marks, subject3Marks, subject4Marks],
      score: totalScore
    });
  }

  // Sort the students array based on the score in descending order
  students.sort((a, b) => b.score - a.score);

  // Display the updated leaderboard
  displayLeaderboard();
}

// Function to display the leaderboard
function displayLeaderboard() {
  // Get the leaderboard list element
  let leaderboardList = document.getElementById("leaderboard-list");

  // Clear the existing list items
  leaderboardList.innerHTML = "";

  // Loop through the students array and create a new list item for each student
  for (let i = 0; i < students.length; i++) {
    let listItem = document.createElement("li");
    let studentName = document.createElement("span");
    let studentScore = document.createElement("span");

    studentName.textContent = students[i].name;
    studentScore.textContent = students[i].score;

    listItem.appendChild(studentName);
    listItem.appendChild(studentScore);

    leaderboardList.appendChild(listItem);
  }
}
