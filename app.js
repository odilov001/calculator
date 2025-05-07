/**     DOM VARIABLES   */

const input = document.getElementById("input");
const btns = document.querySelector("#btns");
const equals = document.getElementById("equals");
const clear = document.getElementById("clear");
const btn = document.querySelector("button");

/**     HANDLER FUNCTIONS   */

function handleClick() {
	btns.addEventListener("click", (e) => {
		const btn = e.target;
		if (btn.matches("")) {
			const value = btn.dataset.value;
			console.log("Value =>", value);
			if (value !== undefined) {
				input.value += value;
			}
		}
	});
}
function handleClear() {
	clear.addEventListener("click", () => {
		input.value = "";
	});
}

function handleEquals() {
	equals.addEventListener("click", () => {
		calculate();
	});
}

/**     LOGICAL FUNCTIONS   */

function calculate() {
	if (input.value.trim() !== "") {
		input.value = eval(input.value);
	} else {
		input.value = " ";
	}
}
function init() {
	handleClick();
	handleClear();
	handleEquals();
}

init();

// console.log(eval("12+12"));
