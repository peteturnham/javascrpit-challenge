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
var filtered = tableData;
if (dateInputValue) {
  filtered = filtered.filter(uforeport => uforeport.datetime === dateInputValue);
}

var cityInput = d3.select("#city");
var cityInputValue = cityInput.property("value");
console.log(cityInputValue);

if (cityInputValue) {
  filtered = filtered.filter(uforeport => uforeport.city === cityInputValue);
}

//update table with queried entry


// //------------------------------------------------------------------------

var stateInput = d3.select("#state");
var stateInputValue = stateInput.property("value");
console.log(stateInputValue);
if (stateInputValue) {
  filtered = filtered.filter(uforeport => uforeport.state === stateInputValue);
}

// //------------------------------------------------------------------------

var countryInput = d3.select("#country");
var countryInputValue = countryInput.property("value");
console.log(countryInputValue);
var countryFiltered = tableData.filter(uforeport => uforeport.country === countryInputValue);
//update table with queried entry
if (countryInputValue) {
  filtered = filtered.filter(uforeport => uforeport.country === countryInputValue);
}

// //------------------------------------------------------------------------

var shapeInput = d3.select("#shape");
var shapeInputValue = shapeInput.property("value");
console.log(shapeInputValue);

if (shapeInputValue) {
  filtered = filtered.filter(uforeport => uforeport.shape === shapeInputValue);
}


// clear table
tbody.html("");
//update table with queried entry
filtered.map(function (ufo) {
    const row = tbody.append("tr");

    Object.values(ufo).forEach((value) => {
      let cell = row.append("td");
      cell.text(value);
    });
});
};
