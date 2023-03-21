// Get the wheel image element by its id
const wheel = document.getElementById('wheel');
// Define an array of all the possible degrees the wheel can stop at
const sections = [0, 72, 144, 216, 288];
// Keep track of the current section index
let currentSectionIndex = 0;

// Add a click event listener to the wheel image element
wheel.addEventListener('click', () => {
  // Get the next section degree to rotate to
  const nextSectionDegree = sections[currentSectionIndex];
  // Update the current section index
  currentSectionIndex = (currentSectionIndex + 1) % sections.length;
  // Rotate the wheel to the next section
  wheel.style.transform = `rotate(${nextSectionDegree}deg)`;
});
