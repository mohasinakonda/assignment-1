const calculateBtn = document.getElementById("calculateBtn");

calculateBtn.addEventListener("click", function () {
	const num1 = Number(document.getElementById("num1").value);
	const num2 = Number(document.getElementById("num2").value);
	const operator = document.getElementById("operator").value;

	// Check if inputs are valid numbers
	if (isNaN(num1) || isNaN(num2) || num1 == "" || num2 == "") {
		document.getElementById("result").innerHTML =
			"Please enter valid numbers";

		return;
	}

	// Perform calculation based on selected operator
	let result;
	switch (operator) {
		case "add":
			result = num1 + num2;
			break;
		case "subtract":
			result = num1 - num2;
			break;
		case "multiply":
			result = num1 * num2;
			break;
		case "divide":
			if (num2 === 0) {
				document.getElementById("error-message").innerHTML =
					"Cannot divide by zero";
				return;
			}
			result = num1 / num2;
			break;
		default:
			document.getElementById("error-message").innerHTML =
				"Invalid operation";
			return;
	}

	// Display the result
	document.getElementById("result").innerHTML = "Result: " + result;
});
