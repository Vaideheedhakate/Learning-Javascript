function calculateTip() {
    const bill = Number(document.getElementById("bill").value);
    const tipPercent = Number(document.getElementById("tip").value);
    const people = Number(document.getElementById("people").value);

    if (bill <= 0 || tipPercent <= 0 || people <= 0) {
        document.getElementById("result").innerText =
        "Please enter valid values";
        return;
    }

  const tipAmount = (bill * tipPercent) / 100;
  const totalAmount = bill + tipAmount;
  const perPerson = totalAmount / people;

  document.getElementById("result").innerHTML = `
    Tip: ₹${tipAmount.toFixed(2)} <br>
    Total Bill: ₹${totalAmount.toFixed(2)} <br>
    Per Person: ₹${perPerson.toFixed(2)}
  `;
}

function resetCalc() {
  document.getElementById("bill").value = "";
  document.getElementById("tip").value = "";
  document.getElementById("people").value = "";
  document.getElementById("result").innerText = "";
}
