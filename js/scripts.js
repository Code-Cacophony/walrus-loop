$(document).ready(function(){
  
//      $("h1").click(function(){
//        alert("This is header.")
//      });
      
//      $("p").click(function(){
//        alert("This is paragraph.");
//      });
      
//      $("img").click(function(){
//        alert("This is an image.");
//      });



  var types = ["h1", "p", "img"]
  types.forEach(function(type) {
    $(type).click(function(type) {
      if (type === "h1") {
      alert("This is a header")
    }
    else if (type === "p") {
      alert("This is a paragraph")
    }
    else if (type === "img") {
      alert("This is an image")
    }
  });

});



})