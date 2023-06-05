"use strict";
/*    JavaScript 7th Edition
      Chapter 12
      Project 12-01

      Project to display a dropdown menu
      Author: Olivia Gavin
      Date: 06/01/2023 

      Filename: project12-01.js
*/

// Run once the page is loaded and ready
$ ( () => {
      $("li.submenu").mouseover(e => {
          // Show method to show contents of drop down menu
             $(e.currentTarget).children("ul").show();
  
        }); 
  
      $("li.submenu").mouseout(e => {
          // Hide method to hide the menu contents
              $(e.currentTarget).children("ul").hide();
         }); 
  });
  




                                                