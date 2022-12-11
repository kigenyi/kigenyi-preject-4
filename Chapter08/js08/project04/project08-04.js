"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-04

      Retrieve Staff Data from a JSON File
      Author: herbert kigenyi
      Date:   11/19/2022

      Filename: project08-04.js
*/


let getFileButton = document.getElementById("getFile");
let containerBox = document.getElementById("container");

getFileButton.onchange = function () {
   // Retrieve information about the selected file
   let JSONfile = this.files[0];

   // Read the contents of the selected file
   let fr = new FileReader();
   fr.readAsText(JSONfile);

   // Once the file has finished loading, parse the JSON file
   fr.onload = function () {

   }

};

getFileButton.onchange = function () {
   let JSONfile = this.files[0];
   let fr = new FileReader();
   fr.readAsText(JSONfile);
   fr.onload = function () {
      var staff = JSON.parse(fr.result);
      makeStaffTable(staff);
      console.log("table has been created");
   }
};

//4.	Go to the makeStaffTable() function and add the commands described in Steps 5, 6, and 7.
function makeStaffTable(staff) {
   let staffTable = document.createElement("table");
   let headerRow = document.createElement("tr");


   //5.	First create a table row containing the property names stored in the JSON file using the properties from the first directory entry. Create a for in loop for the object stored in staff.directory[0] and add the following commands to the loop:
   for (let prop in staff.directory[0]) {

      //a.	Use the document.createElement() method to create a th element named headerCell.
      var headercell = document.createElement("th");
      //b.	Store prop as the text content of headerCell.
      headercell.textContent = prop;
      //c.	Use the appendChild() method to append headerCell to the headerRow object.
      headerRow.appendChild(headercell);
   }
   //d.	After the for in loop completes, append headerRow to the staffTable object.
   staffTable.appendChild(headerRow);
   //6.	Next, create table rows containing the property values for each entry in the directory array. Add a for loop that loops through the items of staff.directory. Within the for loop do the following:
   for (let item in staff.directory){
      

      //a.	Create an element node for the tr element and store it in the tableRow variable.
      let tableRow = document.createElement("tr");

      //b.	Create a for in loop for the properties listed in the staff.directory[i]. For each property do the following:
      for (let prop in staff.directory[item]) {

         //i.	Create an element node for the td element and store it in the tableCell variable;
         var tableCell = document.createElement("td");

         //ii.	store the value of staff.directory[i][prop] as the text content of tableCell;
         tableCell.textContent = staff.directory[item][prop];
         //iii.	append tableCell to the tableRow object.
         tableRow.appendChild(tableCell);
      }
      //c.	After the for in loop completes, append tableRow to the staffTable object.
      staffTable.appendChild(tableRow);
      console.log((parseInt(item) + 1) + ". staff has been added to the table");
   }
   //7.	After the for loop is finished, use the appendChild() method to append staffTable to the containerBox object.
   containerBox.appendChild(staffTable);

   //8.	Save your changes to the file and then load project08-04.html in your web browser.
}