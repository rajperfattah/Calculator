$(document).ready(function(){
    $("#one").click(function(){
      $("#display").val($("#display").val() + "1");
    });
 
     $("#two").click(function(){
       $("#display").val($("#display").val() + "2");
     });
 
     $("#three").click(function(){
       $("#display").val($("#display").val() + "3");
     });
 
     $("#four").click(function(){
       $("#display").val($("#display").val() + "4");
     });
 
     $("#five").click(function(){
       $("#display").val($("#display").val() + "5");
     });
 
     $("#six").click(function(){
       $("#display").val($("#display").val() + "6");
     });
 
     $("#seven").click(function(){
       $("#display").val($("#display").val() + "7");
     });
 
     $("#eight").click(function(){
       $("#display").val($("#display").val() + "8");
     });
 
     $("#nine").click(function(){
       $("#display").val($("#display").val() + "9");
     });
 
     $("#zero").click(function(){
       $("#display").val($("#display").val() + "0");
     });
 
     $("#dot").click(function(){
       $("#display").val($("#display").val() + ".");
     });
 
     $("#add").click(function(){
       $("#display").val($("#display").val() + "+");
     });
 
     $("#subtract").click(function(){
       $("#display").val($("#display").val() + "-");
     });
 
     $("#multiply").click(function(){
       $("#display").val($("#display").val() + "*");
     });
 
     $("#divide").click(function(){
       $("#display").val($("#display").val() + "/");
     });
 
     $("#clear").click(function(){
       $("#display").val("");
     });
 
 $("#equal").click(function(){
       var input = $("#display").val();
       // Clear previous error message
       $("#error-message").text("");
 
       // Validation checks
       if (input.trim() === "") {
           $("#error-message").text("Error: Input cannot be empty.");
           return;
       }
 
       // Check for consecutive operators
       if (/[\+\-\*\/]{2,}/.test(input)) {
           $("#error-message").text("Error: Invalid input. Please avoid consecutive operators.");
           return;
       }
 
       try {
         // Evaluate the expression safely
         var result = Function('"use strict";return (' + input + ')')();
         $("#display").val(result);
       } catch (e) {
         $("#error-message").text("Error: Invalid expression.");
       }
     });
 
   });