/* .js files add interaction to your website */

var factList = [
  "More than 500k people are homeless in the United States", /*0*/
  "Families with children make up 30% of homeless", /*1*/
  "Did you know that California, New York, and Florida make up half of all homeless people in the United States?", /*2*/ 
  "Did you know that more than half of homeless veterans have a mental and/or physical disability?"]; /*3*/


var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

if (myButton) {
myButton.addEventListener("click", displayFact);
}

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}
