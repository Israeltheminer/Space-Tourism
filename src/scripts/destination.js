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
   $("#moonLink").parent().addClass("active-link")
})

$("#showSidebar").on("click", function(){
   $("#showSidebar").addClass("hide-item")
   $("#side_bar").removeClass("hide-item")
})

$("#hideSidebar").on("click", function(){
   $("#side_bar").addClass("hide-item")
   $("#showSidebar").removeClass("hide-item")
})

$(".link-name").on("click", function(){
   $(".link-name").parent().removeClass("active-link")
   $(this).parent().addClass("active-link")
})


function setProperties(property){
   $("#destinationImage").attr("src", property.images.webp)
   $("#destinationDetails").text(property.description)
   $("#destinationName").text(property.name)
   $("#destinationETA").text(property.travel)
   $("#destinationDistance").text(property.distance)
}

$("#moonLink").on("click", function(){
   $.getJSON('/dist/data/data.json', function(data) {
      let moonInfo = data.destinations[0];
      setProperties(moonInfo)
  })
})

$("#marsLink").on("click", function(){
   $.getJSON('/dist/data/data.json', function(data) {
      let marsInfo = data.destinations[1];
      setProperties(marsInfo)
  })
})

$("#europaLink").on("click", function(){
   $.getJSON('/dist/data/data.json', function(data) {
      let europaInfo = data.destinations[2];
      setProperties(europaInfo)
  })
})

$("#titanLink").on("click", function(){
   $.getJSON('/dist/data/data.json', function(data) {
      let titanInfo = data.destinations[3];
      setProperties(titanInfo)
  })
})