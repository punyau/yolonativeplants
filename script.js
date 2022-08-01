const allPlantsList =[{"id":"2", "name":"California Poppies", "type":"flower", "season": "spring", "commitment":"medium", "image":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/California_poppies_open.jpg/1280px-California_poppies_open.jpg", "scientific":"Eschscholzia californica", "description": "California poppies are fairly easy to grow and drought-tolerant — there’s no need to water them much! <br>They grow best directly under the sun and in well-drained soil. They also live better under poorer soil <br>conditions, so you don’t need to use fertilizer. Their roots do not do well when disturbed so it’s best <br>to plant them directly. The best time to sow these poppies is late winter to early spring. It takes around <br>two weeks for the seeds to germinate and around two months for the flower to reach full maturity. <br>Deheading them regularly will give a better flowering season, and they self-seed at the end of the season."},{"id":"3", "name":"California Sunflowers", "type":"flower", "season": "summer", "commitment":"medium", "image":"//upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Helianthuscalifornicus.jpg/330px-Helianthuscalifornicus.jpg", "scientific":"Helianthus californicus", "description": "California sunflowers should be planted in a sunny area with well drained soil rich with nutrients. They <br>take around 3 months to mature and should be planted mid-spring. Try to plant them near a fence or <br>wall to avoid strong winds to topple them over, since they’re pretty top heavy when they’re mature. <br>Plant them about an inch deep into the soil, each seed 6 inches apart from each other and each row <br>of seeds around 30 inches apart. Water around the roots until the plant is established, and then water <br>around once a week. If it’s a taller species, it might need a bamboo stake to grow against for more support."}, {"name":"Blue Wildrye", "type":"herb", "season":"summer", "commitment":"low", "image":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Leymus_arenarius_M2.JPG/1200px-Leymus_arenarius_M2.JPG?20150814152219", "scientific":"Elymus glaucus", "description": "Blue wildrye should be sowed directly on a plot of soil that’s moist, firm, and preferably unmulched. They <br>should be planted during spring and grow fairly rapidly. Water on the day of planting and then as <br>needed. It can grow up to 5 feet tall and is good for banks and meadows."}, {"name":"Black Elderberry", "type":"shrub", "season":"spring", "commitment":"medium", "image":"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Sambucus_nigra2.jpg/540px-Sambucus_nigra2.jpg", "scientific":"Sambucus nigra", "description": ""}, {"name":"One Leaf Onion", "type":"flower", "season":"spring", "commitment":"high", "image":"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Alliumunifoliumbloom.jpg/1280px-Alliumunifoliumbloom.jpg", "scientific":"Allium unifolium", "description": ""}]


function onFilterChange(){
 //Find the commitment dropdown
 var commitmentDropdown = document.getElementById("commitment")
  
 commitmentValue = commitmentDropdown.value;
 
  
  var plantTypeDropdown =
     document.getElementById("plantType")
 
 typeValue = plantTypeDropdown.value;
  
  
  var seasonDropdown =
      document.getElementById("season")
  seasonValue = seasonDropdown.value;
  
  //alert(seasonValue + "-" + typeValue + "-" + commitmentValue)

  
var filteredPlants =  allPlantsList.filter(x=>{ return (x.type == typeValue || typeValue == "") && (x.season == seasonValue || seasonValue == "") && (x.commitment == commitmentValue || commitmentValue == "")  })

  //alert(filteredPlants.length)
var filteredPlantsHTML = "";
  
for(i=0;i<filteredPlants.length;i++)
  { 
  var plantHTML = "<div onclick=\" showPlant('"+ filteredPlants[i].name+"', '"+ filteredPlants[i].description+"', '"+ filteredPlants[i].image+"', '"+ filteredPlants[i].scientific+"')\" class='plantcard'>" + "<img src='" + filteredPlants[i].image + "' style='width:245px;height:180px;'>" + filteredPlants[i].name + "</div><br>"
  
    filteredPlantsHTML = filteredPlantsHTML + plantHTML
  
 
    
   }
  
      var divElement = document.getElementById("plantList");

   //console.log(divElement.innerHTML)
    divElement.innerHTML = filteredPlantsHTML;
   
  
   //console.log(filteredPlantsHTML)
}

function showAll(){
  var html = "";
  
for(i=0;i<allPlantsList.length;i++)
  { 
  var plantHTML = "<div onclick=\" showPlant('"+ allPlantsList[i].name+"', '"+ allPlantsList[i].description+"', '"+ allPlantsList[i].image+"', '"+ allPlantsList[i].scientific+"') \" class='plantcard'>" + "<img src='" + allPlantsList[i].image + "' style='width:245px;height:180px;'>" + allPlantsList[i].name + "</div><br>"
  
  
    html = html + plantHTML
  
 
    
   }
  
      var divElement = document.getElementById("plantList");

   //console.log(divElement.innerHTML)
    divElement.innerHTML = html;
}

function showPlant(name, description, image, scientific){
  var divpageOne = document.getElementById("pageOne")
  var divplantList = document.getElementById("plantList")
  var divplantInfo = document.getElementById("plantInfo")
  divplantList.style.display = "none"
  divpageOne.style.display = "none"
  divplantInfo.style.display = ""
  
var html = "<div class= 'infocard' style= 'border-radius: 15px;'> <h2 style= 'color: white; font-weight: normal;'>" + name + " -  <i>" + scientific + "</i>"+ "</h2>" + "<div style='display: flex; flex-direction: row; flex-wrap: wrap;'> <img src='" + image +"' style='width:245px;height:180px; border-color: white; border-style: double;'>" + "<p style= 'color: white; padding-left: 20px; padding-right: 10px; padding-bottom: 10px; font-size: 17px;'>" + description + " <br><br>Where to buy? You can buy most of these seeds online, or if you're in Davis, check out Davis Ace Garden <br> & Pet, Redwood Barn Nursery, or check out the UC Davis Arboretum during their fall native wildflower <br>seed sale!" + "</p> </div> <br> <button onclick='goBack()'>back</button> </div>"

divplantInfo.innerHTML = html
 
//generate plant info html
  // set plantInfo innerHTML to the above html
  //show plantInfo div
  //hide plantList div
  
  //alert("here I show the plant hide the list of plants - " + description)
}

function goBack(){
   var divpageOne = document.getElementById("pageOne")
  var divplantList = document.getElementById("plantList")
  var divplantInfo = document.getElementById("plantInfo")
 
  divplantList.style.display = "flex"
  divpageOne.style.display = ""
  divplantInfo.style.display = "none"  
  
}



      showAll()
