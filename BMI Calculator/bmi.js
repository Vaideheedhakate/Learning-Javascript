const form = document.getElementById('bmiForm');
const result = document.getElementById('result');
const resetBtn = document.getElementById('resetBtn');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);

  if(weight <= 0 || height <= 0 || isNaN(weight) || isNaN(height)) {
    showResult("Please enter valid numbers!", "red");
    return;
  }

  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);
  const roundedBMI = bmi.toFixed(2);

  let category = "";
  let color = "";

  if (bmi < 18.5) {
    category = "Underweight";
    color = "#ffc107"; // yellow
  } else if (bmi >= 18.5 && bmi < 24.9) {
    category = "Normal weight";
    color = "#28a745"; // green
  } else if (bmi >= 25 && bmi < 29.9) {
    category = "Overweight";
    color = "#fd7e14"; // orange
  } else {
    category = "Obese";
    color = "#dc3545"; // red
  }

  showResult(`Your BMI is ${roundedBMI} (${category})`, color);
});

resetBtn.addEventListener('click', () => {
  form.reset();
  result.style.display = "none";
});

function showResult(message, color) {
  result.textContent = message;
  result.style.display = "block";
  result.style.backgroundColor = color + "33"; // light color bg
  result.style.color = color;
}
