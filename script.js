let items= [
  "Tritanium",
  "Pyerite",
  "Mexallon",
  "Isogen",
  "Nocxium",
  "Zydrine",
  "Megacyte"
  ]

const getData = async function() {

  
  const resp = await fetch("https://market.fuzzwork.co.uk/aggregates/?region=10000002&types=34,35,36,37,38,39,40")
  const data = await resp.json();
  
//LOOP this when you decide to be smart-

document.getElementById("ticker").innerHTML = 
(items[0] + " " + data["34"].buy.max + " ISK....."+ 
(items[1] + " " + data["35"].buy.max + " ISK.....")+
(items[2] + " " + data["36"].buy.max + " ISK.....")+
(items[3] + " " + data["37"].buy.max + " ISK.....")+
(items[4] + " " + data["38"].buy.max + " ISK.....")+
(items[5] + " " + data["39"].buy.max + " ISK.....")+
(items[6] + " " + data["40"].buy.max + " ISK.....END")


);


}
getData();

