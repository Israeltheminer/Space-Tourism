const $ = require("jquery")

$(function(){
   if(location.pathname == "/"){
      $('#homeLink').addClass("active-link")
   } else if(location.pathname == "/destination"){
      $('#destinationLink').addClass("active-link")
   } else if(location.pathname == "/crew"){
      $('#crewLink').addClass("active-link")
   }else{
      $('#technologyLink').addClass("active-link")
   }
})

$("#showSidebar").on("click", function(){
   $("#showSidebar").addClass("hide-item")
   $("#side_bar").removeClass("hide-item")
})

$("#hideSidebar").on("click", function(){
   $("#side_bar").addClass("hide-item")
   $("#showSidebar").removeClass("hide-item")
})