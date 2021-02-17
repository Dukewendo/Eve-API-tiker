fetch("https://market.fuzzwork.co.uk/aggregates/?region=10000002&types=34,35,36,37,38,39,40")
.then(response => response.json())
.then((json) => {
console.log(json)
})
