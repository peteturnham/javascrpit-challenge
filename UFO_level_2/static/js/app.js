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
//function 'runEnter'
function runEnter(){
//prevent the page from refreshing
d3.event.preventDefault();
// selecting the input element
var dateInputElement = d3.select("#datetime");
var dateInputValue = dateInputElement.property("value");
console.log(dateInputValue);
//filtering table from user input
var filtered = tableData.filter(uforeport => uforeport.datetime === dateInputValue);
// clear table
tbody.html("");
//update table with queried entry
filtered.map(function (tableData) {
    const row = tbody.append("tr");

    Object.values(tableData).forEach((value) => {
      let cell = row.append("td");
      cell.text(value);
    });
});
};

//  button variables
var citySubmitButton = d3.select(".btn");
var cityUserInput = d3.select("#city");

// event trigger for form
cityUserInput.on("click", runCity);
// event trigger for button
citySubmitButton.on("click", runCity);
//function for city input
function runCity(){
//prevent the page from refreshing
d3.event.preventDefault();
var cityInput = d3.select("#city");
var cityInputValue = cityInput.property("value");
console.log(cityInputValue);
var cityFiltered = tableData.filter(uforeport => uforeport.city === cityInputValue);
//clear table
tbody.html("");
//update table with queried entry
cityFiltered.map(function (tableData) {
   row = tbody.append("tr");

   Object.values(tableData).forEach((value) => {
     let cell = row.append("td");
     cell.text(value);
   });
});
}

//  button variables
var stateSubmitButton = d3.select(".btn");
var stateUserInput = d3.select("#state");

// event trigger for form
stateUserInput.on("click", runState);
// event trigger for button
stateSubmitButton.on("click", runState);
//function for state input
function runState(){
//prevent the page from refreshing
d3.event.preventDefault();
var stateInput = d3.select("#state");
var stateInputValue = stateInput.property("value");
console.log(stateInputValue);
var stateFiltered = tableData.filter(uforeport => uforeport.state === stateInputValue);
//clear table
tbody.html("");
//update table with queried entry
stateFiltered.map(function (tableData) {
   row = tbody.append("tr");

   Object.values(tableData).forEach((value) => {
     let cell = row.append("td");
     cell.text(value);
   });
});
}

//  button variables
var countrySubmitButton = d3.select(".btn");
var countryUserInput = d3.select("#country");
// event trigger for form
countryUserInput.on("click", runCountry);
// event trigger for button
countrySubmitButton.on("click", runCountry);
//function for country input
function runCountry(){
//prevent the page from refreshing
d3.event.preventDefault();
var countryInput = d3.select("#country");
var countryInputValue = countryInput.property("value");
console.log(countryInputValue);
var countryFiltered = tableData.filter(uforeport => uforeport.country === countryInputValue);
//clear table
tbody.html("");
//update table with queried entry
countryFiltered.map(function (tableData) {
   row = tbody.append("tr");

   Object.values(tableData).forEach((value) => {
     let cell = row.append("td");
     cell.text(value);
   });
});
}
//  button variables
var shapeSubmitButton = d3.select(".btn");
var shapeUserInput = d3.select("#shape");
// event trigger for form
shapeUserInput.on("click", runShape);
// event trigger for button
shapeSubmitButton.on("click", runShape);
//function for shape input
function runShape(){
//prevent the page from refreshing
d3.event.preventDefault();
var shapeInput = d3.select("#shape");
var shapeInputValue = shapeInput.property("value");
console.log(shapeInputValue);
var shapeFiltered = tableData.filter(uforeport => uforeport.shape === shapeInputValue);
//clear table
tbody.html("");
//update table with queried entry
shapeFiltered.map(function (tableData) {
   row = tbody.append("tr");

   Object.values(tableData).forEach((value) => {
     let cell = row.append("td");
     cell.text(value);
   });
});
}
