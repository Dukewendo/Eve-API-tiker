const getData = async function() {
try {
  const resp = await fetch("https://market.fuzzwork.co.uk/aggregates/?region=10000002&types=34,35,36,37,38,39,40")
  const data = await resp.json();
  // CODE here to loop through data and assign to HTML LIST
  
  //loop through [mineral] + LOOP THROUGH OBJECTS

minerals.forEach((num1, index) => {
  const num2 =data[index];
  console.log(num1, num2);
});

//console.log(minerals[0] + " " + data["34"].buy.max + " ISK")
  
   
     
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
