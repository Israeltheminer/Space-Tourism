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
   $("#vehicle").removeClass("border-white/40").addClass("active-highlight")
})

$("#showSidebar").on("click", function(){
   $("#showSidebar").addClass("hide-item")
   $("#side_bar").removeClass("hide-item")
})

$("#hideSidebar").on("click", function(){
   $("#side_bar").addClass("hide-item")
   $("#showSidebar").removeClass("hide-item")
})

function highlightTech(tech){
   $(".highlight").removeClass("active-highlight").addClass("border-white/40")
   $(tech).removeClass("border-white/40").addClass("active-highlight")
}

function setProperties(property){
   $("#techImage").attr("src", property.images.portrait)
   $("#landscapeImage").attr("src", property.images.landscape)
   $("#techDescription").text(property.description)
   $("#techName").text(property.name)
   if(property.name == "LAUNCH VEHICLE"){
      highlightTech("#vehicle")
   }
   if(property.name == "SPACEPORT"){
      highlightTech("#spaceport")
   }
   if(property.name == "SPACE CAPSULE"){
      highlightTech("#capsule")
   }
}


$("#vehicle").on("click", function(){
   $.getJSON('/dist/data/data.json', function(data) {
      let techInfo = data.tech[0];
      setProperties(techInfo)
  })
})
$("#spaceport").on("click", function(){
   $.getJSON('/dist/data/data.json', function(data) {
      let techInfo = data.tech[1];
      setProperties(techInfo)
  })
})
$("#capsule").on("click", function(){
   $.getJSON('/dist/data/data.json', function(data) {
      let techInfo = data.tech[2];
      setProperties(techInfo)
  })
})

var slideIndex = 0
carousel()

function carousel() {
   var i;
   for(i = 0; i < 3; i++){
      $.getJSON('/dist/data/data.json', function(data) {
         let techInfo = data.tech[i];
         setProperties(techInfo)
      })
   }
  slideIndex++;
  if (slideIndex > 4) {slideIndex = 1}
  $.getJSON('/dist/data/data.json', function(data) {
      let techInfo = data.tech[slideIndex-1];
      setProperties(techInfo)
   })
  setTimeout(carousel, 10000)
}
