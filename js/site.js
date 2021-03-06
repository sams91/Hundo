// Get the values from the page
// starts or controller function
function getValues() {
// get values from the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;
    
    //we need to validate our input
    // parse into integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        //we call generateNumbers
        let numbers = generateNumbers(startValue, endValue);
        //we call displayNumbers
        displayNumbers(numbers);

    } else {
        alert("you must enter integers");       
    }

        

}

// Generate numbers from the start value to the end value.
// Logic functions
function generateNumbers(sValue, eValue) {

    let numbers = [];

    //we want to get all numbers from start to end
    for(let index = sValue; index <= eValue; index++) {
        //this will execute in a loop until index = eValue
        numbers.push(index);
        
    }
    return numbers;
}

// display numbers and mark even numbers bold
// display or view functions
function displayNumbers(numbers) {



    let templateRows = "";

    for (let index = 0; index < numbers.length; index++) {
        let className = "even"
        let number = numbers[index];
        if(number % 2 == 0){
            className = "even";
        }
        else{
            className = "odd"
        }

        templateRows += `<tr><td class= "${className}">${number}</td></tr>`;
    }


    document.getElementById("results").innerHTML = templateRows;
}