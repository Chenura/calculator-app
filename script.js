let display = document.getElementById("display");

function append(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        let expression = display.value;

        // Convert power operator ^
        expression = expression.replace(/\^/g, "**");

        // Evaluate safely
        display.value = eval(expression);

    } catch {
        display.value = "Error";
    }
}
