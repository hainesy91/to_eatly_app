$(function () {
 $.get("/foods").
   done(function (data) {
     console.log("RECEIVING RESPONSE");
     console.log("DATA", data);
     $(data).each(function (index, food) {
       var $food = $("<div>" + food.name + "</div>");
       $("body").append($food);
     });
   });
    $("#newfood").on("submit", function (e) {
   var $this = $(this);
   var formData = $this.serialize();
   console.log(formData);
   $.post("/foods", formData).
     done(function (data) {
       console.log("Success!");
     });
 });
 });