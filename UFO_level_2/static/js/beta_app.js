// from data.js
var tableData = data;
// reference the table body
var tbody = d3.select("tbody");
//add rows, with keys and values to update the cells with data
data.forEach(function(uforeport){
    var row = tbody.append("tr");
    Object.entries(uforeport).forEach(function([key, value]){
        var cell = row.append("td");
        cell.text(value);
    });
});
//  button variables
var submitButton = d3.select(".btn");
var userInput = d3.select("#datetime");
// event trigger for form
userInput.on("click", runEnter);
// event trigger for button
submitButton.on("click", runEnter);
//  button variables
var citySubmitButton = d3.select(".btn");
var cityUserInput = d3.select("#city");
// city input variables
var cityInput = d3.select("#city");
var cityInputValue = cityInput.property("value");
// event trigger for form
cityUserInput.on("click", runEnter);
// event trigger for button
citySubmitButton.on("click", runEnter);
//  button variables
var countrySubmitButton = d3.select(".btn");
var countryUserInput = d3.select("#country");
// event trigger for form
countryUserInput.on("click", runEnter);
// event trigger for button
countrySubmitButton.on("click", runEnter);
//  button variables
var shapeSubmitButton = d3.select(".btn");
var shapeUserInput = d3.select("#shape");
// event trigger for form
shapeUserInput.on("click", runEnter);
// event trigger for button
shapeSubmitButton.on("click", runEnter);
//------------------------------------------------------------------------
//function 'runEnter'
function runEnter(){
//prevent the page from refreshing
d3.event.preventDefault();
// selecting the input element
var dateInputElement = d3.select("#datetime");
var dateInputValue = dateInputElement.property("value");
console.log(dateInputValue);
//filtering table from user input
var filtered = [tableData.filter(uforeport => uforeport.datetime === dateInputValue),
    tableData.filter(uforeport => uforeport.city === cityInputValue),
    tableData.filter(uforeport => uforeport.state === stateInputValue),
    tableData.filter(uforeport => uforeport.country === countryInputValue),
    tableData.filter(uforeport => uforeport.shape === shapeInputValue)];
console.log(filtered);
// clear table
tbody.html("");
// //------------------------------------------------------------------------
var stateInput = d3.select("#state");
var stateInputValue = stateInput.property("value");
// //------------------------------------------------------------------------
var countryInput = d3.select("#country");
var countryInputValue = countryInput.property("value");
// //------------------------------------------------------------------------
var shapeInput = d3.select("#shape");
var shapeInputValue = shapeInput.property("value");
};
