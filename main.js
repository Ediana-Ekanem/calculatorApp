let result = document.querySelector("#display");

// let calculate = (number) => {
//   result.value += number;
// };

function calculate(number) {
  result.value += number;
}

let Clear = () => {
  result.value = "";
};

let Del = () => {
  result.value = result.value.slice(0, -1);
};

let Result = () => {
  try {
    result.value = eval(result.value);
  } catch (err) {
    alert(" Please Kindly Enter a valid input");
  }
};
