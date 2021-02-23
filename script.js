const getData = async function() {
try {
  
  const resp = await fetch("https://market.fuzzwork.co.uk/aggregates/?region=10000002&types=34,35,36,37,38,39,40")
  const data = await resp.json();
  // CODE here to loop through data and assign to HTML LIST
  
  //loop through [mineral] + LOOP THROUGH OBJECTS

var x;
for ( x in data) {
  document.getElementById("ticker").innerHTML +=(data[x].buy.max);
}
  

     
} catch (err){
  console.log("Something went wrong!", err);
}
}

getData();

let minerals= [
"Tritanium",
"Pyerite",
"Mexallon",
"Isogen",
"Nocxium",
"Zydrine",
"Megacyte"
]
