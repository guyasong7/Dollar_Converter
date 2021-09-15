const dollar = document.querySelector('#dollar');
const results = document.querySelector('#results');
const showResults = document.querySelector('#showResults');


function calculate() {
    // Gets the Value
    var dollarValue = document.getElementById('dollar').value;

    // If statements to know if the feild is empty or not
    if (dollarValue === "" || dollarValue === null) {
        alert('Enter an amount to get this thing running');
        return;
    }

    // Converts the Amount
    amount = dollarValue * 539;

    // Shows result output
    showResults.innerHTML = dollarValue + ' US Dollars ' + ' To CFA is ' + amount + ' CFA';

}
// About the Author
function about() {
    var message = alert('This piece of art was created by a guy called Guy Asong');
}



