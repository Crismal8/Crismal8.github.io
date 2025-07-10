var course = "technology";
let myName = "Crismal";

console.log(`This page was created in the STEM PREP ${course} by ${myName}`);

alert(`This page was created in the STEM PREP ${course} by ${myName}`);

function output()
{
let name = document.getElementById("name").Value;
  var school = document.getElementyById("school").value;
  let grade = document.getElementById("grade").value;

let output ="Name:<b>"+name+"</b><br>";
output+="Grade:<b>" +grade + "</b><br>";
output+= "school: <b>" + school + "</b><br>";  

document.getElementById("output").innerHTML = output;  
}
