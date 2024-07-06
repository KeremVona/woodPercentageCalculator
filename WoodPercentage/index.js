function woodPercentageCalculate() {
    var inputOne = document.getElementById("input1").value;
    var inputTwo = document.getElementById("input2").value;

    var theResult = (inputOne * inputTwo) * 5 / 100;

    document.getElementById("result").innerHTML = `The Result: ${theResult} per m2`;
}