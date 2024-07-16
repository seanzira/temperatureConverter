//This is a code for a temperature meter converter
//Temperature meter converter converts the weather degree from the current metric system to the new metric system requested by the user

//request the user to enter the metric system that they are using
//the temperature that they would like to convert
//as well as the metric that they would like to convert to
const temperatureMetricUsed = prompt("Are you using C, F or K")
const temperatureValue = Number(prompt("Enter the temperature you would like to convert"))
const temperatureMetricRequired = prompt("Would you like to convert to C, F or K")

//insert if and else if function to include the requirements for the conversion, 
//the conditions for each conversion,
//as well as the formulas required for the conversion to successfully occur
if (temperatureMetricUsed == "C" && temperatureMetricRequired == "F") {
    console.log(temperatureValue + " " + temperatureMetricUsed + " is " + ((temperatureValue * 9/5 ) + 32) + " " + temperatureMetricRequired)
} else if (temperatureMetricUsed == "C" && temperatureMetricRequired == "K") {
    console.log(temperatureValue + " " + temperatureMetricUsed + " is " + (temperatureValue + 273.15) + " " + temperatureMetricRequired)
} else if (temperatureMetricUsed == "F" && temperatureMetricRequired == "C") {
    console.log(temperatureValue + " " + temperatureMetricUsed + " is " + ((temperatureValue - 32) * 5/9) + " " + temperatureMetricRequired)
} else if (temperatureMetricUsed == "F" && temperatureMetricRequired == "K") {
    console.log(temperatureValue + " " + temperatureMetricUsed + " is " + ((temperatureValue + 459.67) * 5/9) + " " + temperatureMetricRequired)
} else if (temperatureMetricUsed == "K" && temperatureMetricRequired == "C") {
    console.log(temperatureValue + " " + temperatureMetricUsed + " is " + (temperatureValue - 273.15) + " " + temperatureMetricRequired)
} else if (temperatureMetricUsed == "K" && temperatureMetricRequired == "F") {console.log(temperatureValue + " " + temperatureMetricUsed + " is " + ((temperatureValue * 9/5) - 459.67) + " " + temperatureMetricRequired)
} else {
    console.log("You entered the same metric system twice there your answer remains the same." + " " + temperatureValue + " " + temperatureMetricUsed)
}