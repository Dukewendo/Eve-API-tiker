/*
DOCS= https://docs.esi.evetech.net/
Structure ID= 60003760

Query JTIA market orders
https://esi.evetech.net/latest/markets/structures/60003760/?datasource=tranquility&page=1

*/

let clientId= "9552fbd4c7ba488aa8a5bc14381c86e6";
let key= "cF6OzRRqU4ZBA4WULJ1mGNc0Ku803cAuYbHlQ2pK";
let url= "https://login.eveonline.com/v2/oauth/authorize/?response_type=code&redirect_uri=https%3A%2F%2Flocalhost%2Fcallback%2F&client_id=9552fbd4c7ba488aa8a5bc14381c86e6&scope=esi-markets.structure_markets.v1&state=marketTest";
let callbackUrl="https://localhost/callback/";


// Need to store the returned key from URL

let returnKey= new URLSearchParams(location.search);
returnKey.get("code");

/* 

   5. Now that your application has the authorization code, it needs to send a POST request to https://login.eveonline.com/v2/oauth/token with a payload containing the authorization code using Basic authentication where your application’s client ID will be the user and your secret key will be the password. Here is a little more detail on how to craft this request:

    Create form encoded values that look like this (replace anything between <>, including <>):

      grant_type=authorization_code&code=<authorization code from callback URL>

*/

