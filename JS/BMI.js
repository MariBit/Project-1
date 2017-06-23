function computeBMI() {
    // user inputs
    var height = Number(document.getElementById("height").value);
    var heightunits = document.getElementById("heightunits").value;
    var weight = Number(document.getElementById("weight").value);
    var weightunits = document.getElementById("weightunits").value;
    //Convert all units to metric
    if (heightunits == "inches") height /= 39.3700787;
    if (weightunits == "lb") weight /= 2.20462;
    //Perform calculation
    var BMI = weight /Math.pow(height, 2);
    //Display result of calculation
    document.getElementById("output").innerText = Math.round(BMI * 100) / 100;
    var output = Math.round(BMI * 100) / 100
    if (output < 18.5)
        document.getElementById("comment").innerText = "Underweight\nSome risks of being underweight are:\nMalnutrition, vitamin deficiencies, or anemia,\nOsteoporosis from too little vitamin D and calcium,\nDecreased immune function.";
    else if (output >= 18.5 && output <= 25)
        document.getElementById("comment").innerText = "Normal\nThere are no healthy risks, but maintain\n a Healthy Diet \nand Exercise Frequently.";
    else if (output >= 25 && output <= 30)
        document.getElementById("comment").innerText = "Overweight\nSome of the health risks include:\nHigh blood pressure,\nFatty Liver Disease,\nKidney Disease.";
    else if (output > 30)
        document.getElementById("comment").innerText = "Obese\nSome risks of obesity are:\n Type 2 diabetes,\nCoronary Heart Disease, \nStroke. ";

    // document.getElementById("answer").value = output;
}

function myFunction() {
document.getElementById("myForm").reset();
}
