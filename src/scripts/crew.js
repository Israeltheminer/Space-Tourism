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
   $("#commander").removeClass("bg-white/40").addClass("active-highlight")
})

$("#showSidebar").on("click", function(){
   $("#showSidebar").addClass("hide-item")
   $("#side_bar").removeClass("hide-item")
})

$("#hideSidebar").on("click", function(){
   $("#side_bar").addClass("hide-item")
   $("#showSidebar").removeClass("hide-item")
})

function highlightCrew(crew){
   $(".highlight").removeClass("active-highlight").addClass("bg-white/40")
   $(crew).removeClass("bg-white/40").addClass("active-highlight")
}

function setProperties(property){
   $("#crewImage").attr("src", property.images.webp)
   $("#crewDetails").text(property.bio)
   $("#crewName").text(property.name)
   $("#crewTitle").text(property.role)
   if(property.name == "ANOUSHEH ANASARI"){
      highlightCrew("#engineer")
   }
   if(property.name == "VICTOR GLOVER"){
      highlightCrew("#pilot")
   }
   if(property.name == "MARK SHUTTLEWORTH"){
      highlightCrew("#specialist")
   }
   if(property.name === "DOUGLAS HURLEY"){
      highlightCrew("#commander")
   }
}

$("#commander").on("click", function(){
   $.getJSON('/dist/data/data.json', function(data) {
      let crewInfo = data.crew[0];
      setProperties(crewInfo)
  })
})
$("#specialist").on("click", function(){
   $.getJSON('/dist/data/data.json', function(data) {
      let crewInfo = data.crew[1];
      setProperties(crewInfo)
  })
})
$("#pilot").on("click", function(){
   $.getJSON('/dist/data/data.json', function(data) {
      let crewInfo = data.crew[2];
      setProperties(crewInfo)
  })
})
$("#engineer").on("click", function(){
   $.getJSON('/dist/data/data.json', function(data) {
      let crewInfo = data.crew[3];
      setProperties(crewInfo)
  })
})


var slideIndex = 0
carousel()

function carousel() {
   var i;
   for(i = 0; i < 4; i++){
      $.getJSON('/dist/data/data.json', function(data) {
         let crewInfo = data.crew[i];
         setProperties(crewInfo)
      })
   }
  slideIndex++;
  if (slideIndex > 4) {slideIndex = 1}
  $.getJSON('/dist/data/data.json', function(data) {
      let crewInfo = data.crew[slideIndex-1];
      setProperties(crewInfo)
   })
  setTimeout(carousel, 6000)
}
