/*
Scope:

 esi-markets.structure_markets.v1


DOCS= https://docs.esi.evetech.net/


Query JTIA market orders
https://esi.evetech.net/latest/markets/structures/60003760/?datasource=tranquility&page=1

Need to pick up the code sent to use as a key...

*/

let clientId= "9552fbd4c7ba488aa8a5bc14381c86e6";
let key= "cF6OzRRqU4ZBA4WULJ1mGNc0Ku803cAuYbHlQ2pK";
let url= "https://login.eveonline.com/v2/oauth/authorize/?response_type=code&redirect_uri=https%3A%2F%2Flocalhost%2Fcallback%2F&client_id=9552fbd4c7ba488aa8a5bc14381c86e6&scope=esi-markets.structure_markets.v1&state=marketTest";
let callbackUrl="https://localhost/callback/";
