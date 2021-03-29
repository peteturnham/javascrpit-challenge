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
var userInput = d3.select(".form-control");
// event trigger for form
userInput.on("click", runEnter);
// event trigger for button
submitButton.on("click", runEnter);


//function 'runEnter'
function runEnter(){
//prevent the page from refreshing
d3.event.preventDefault();
//input for city
// var cityInput = d3.select("#city");
// var cityInputValue = cityInput.property("value");
// // input for state
// var stateInput = d3.select("#state");
// var stateInputValue = stateInput.property("value");
// // input for country
// var countryInput = d3.select("#country");
// var countryInputValue = countryInput.property("value");
// //input for shape
// var shapeInput = d3.select("#shape");
// var shapeInputValue = shapeInput.property("value");
// get the input values from user

// selecting the input element
var inputElement = d3.select(".form-control");
var inputValue = inputElement.property("value");
console.log(inputValue);
//displaying user input
var filtered = tableData.filter(uforeport => uforeport.datetime === inputValue);
// console.log(filtered);

tbody.html("");

filtered.map(function (tableData) {
    
    const row = tbody.append("tr");
    console.log("tableData")
    console.log(tableData)

    Object.values(tableData).forEach((value) => {
      let cell = row.append("td");
      cell.text(value);
    });

});
};


// if (tableData.filter(uforeport => uforeport.datetime === inputValue){
//     tbody.html("");

// filtered.map(function (tableData) {
    
//     const row = tbody.append("tr");
//     console.log("tableData")
//     console.log(tableData)

//     Object.values(tableData).forEach((value) => {
//       let cell = row.append("td");
//       cell.text(value);
//     });
// });
// };