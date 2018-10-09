// {
//   "actionId": "http.commerce.catalog.storefront.shipping.requestRates.before",
//   "contexts": [
//     {
//       "customFunctions": [
//         {
//           "applicationKey": "KMS.ThangArcTest.1.0.0.Release",
//           "functionId": "http.commerce.catalog.storefront.shipping.requestRates.before",
//           "enabled": true,
//           "configuration": {
//             "shippingAmount": 17
//           }
//         }
//       ]
//     }
//   ]
// },

var _ = require('underscore');

// TEST Require the https library, which is already installed with Arc.js
var https = require('https');

// Require the flip-text library, which you must then install using 'npm install --save flip-text'. This command adds the library as a dependency in your package.json file.
var flipText = require('flip-text');


module.exports = function(context, callback) {


// Request an array of one random number from an online generator
// https.get("https://qrng.anu.edu.au:443/API/jsonI.php?length=1&type=uint8", function(response) {
  
//   //Process the response from the random number generator and place the 'data' value in 'result'
//   var buf = '';
 
//   response.on('data', function(chunk) {
//     buf += chunk.toString();
//   });

//   response.on('error', callback);

//   response.on('end', function() {

//     var result = JSON.parse(buf);

 
    // Access the context of the 'http.commerce.catalog.storefront.shipping.requestRates.before' action to modify the shipping rates for the site
    context.response.body = {
        "resolvedShippingZoneCode": "United States",
        "shippingZoneCodes": [
          "United States",
          "Americas"
        ],
        "rates": [
          {
          "carrierId": "custom",
          "shippingRates": [
              {
                "code": "Rate1",
                "content": {
                  "localeCode": "usd",
                  "name": "Random Number"
                },
                // Use the random number (divided by 10 to filter larger numbers) as the first shipping amount
                "amount": 100,
                "daysInTransit": 5,
                "shippingItemRates": [],
                "customAttributes": [],
                "messages": [],
                "data":{test:"random", prop2:"object data"}
              },
              {
                "code": "Rate2",
                "content": {
                  "localeCode": "usd",
                  "name": "Number from local Configuration"
                },
                // Use the 'shippingAmount' value from the action-level configuration data as the second shipping amount
                "amount": context.configuration.shippingAmount,
                "shippingItemRates": [],
                "customAttributes": [],
                "messages": [],
                "data":{test:"random", prop2:"object data"}
              },
                {
                "code": "Rate3",
                "content": {
                  "localeCode": "usd",
                  // Use the flip-text library to display shipping method label upside down
                  "name": "Number from global Configuration"
                },
                // Use the 'shippingAmount2' value from the application-level configuration data as the third shipping amount
                "amount": context.configuration.shippingAmount2,
                "shippingItemRates": [],
                "customAttributes": [],
                "messages": [],
                "data":{test:"random", prop2:"object data"}
              }
            ],
            "customAttributes": []
          }
        ]
      };

      var shippingMethods = context.response.body;
      console.log("first rate: " + JSON.stringify(shippingMethods.rates[0]));
      console.log("first shipping rate " + JSON.stringify(shippingMethods.rates[0].shippingRates[0]));
      console.log("amount of first shipping rate " + shippingMethods.rates[0].shippingRates[0].amount);

      //var newFirstsAmount = shippingMethods.rates[0].shippingRates[0].amount * 1.25;
      //shippingMethods.rates[0].shippingRates[0].amount = newFirstsAmount;
      //console.log("amount of first shipping rate " + shippingMethods.rates[0].shippingRates[0].amount);
      var increaseRate = context.configuration.increaseRate;
      var percentage = context.configuration.percentage;

      _.each(shippingMethods.rates[0].shippingRates, function(shippingRate) {
        if (increaseRate) {
          shippingRate.amount *= (1 + percentage/100);
        } else {
          shippingRate.amount *= (1 - percentage/100);
        }
      });
      
      //context.response.body

      context.response.end();
     
      callback();
    //});
  // });
};