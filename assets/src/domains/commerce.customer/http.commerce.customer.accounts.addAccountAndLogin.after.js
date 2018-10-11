/**
 * Implementation for http.commerce.customer.accounts.addAccountAndLogin.after


 * HTTP Actions all receive a similar context object that includes
 * `request` and `response` objects. These objects are similar to
 * http.IncomingMessage objects in NodeJS.

{
  configuration: {},
  request: http.ClientRequest,
  response: http.ClientResponse
}

 * Call `response.end()` to end the response early.
 * Call `response.set(headerName)` to set an HTTP header for the response.
 * `request.headers` is an object containing the HTTP headers for the request.
 * 
 * The `request` and `response` objects are both Streams and you can read
 * data out of them the way that you would in Node.

 */

var _ = require('underscore');
var CustomerSegmentFactory = require('mozu-node-sdk/clients/commerce/customer/customerSegment');
module.exports = function(context, callback) {
  console.info("Hello from addAccountAndLogin!");
  console.log("Context after: " + JSON.stringify(context));
  console.info("Request...");
  console.info(context.request.body);
  console.info("Response...");
  console.info(context.response.body);

  var customerSegmentResource = CustomerSegmentFactory(context.apiContext);
  customerSegmentResource.context['user-claims'] = null;

  if(context.response.body.customerAccount
    && context.configuration.eligibleCustomer
    && context.configuration.customerSegmentFilterConditions){

    var account = context.response.body.customerAccount;
    var eligibleCustomer = context.configuration.eligibleCustomer;
    console.info("account: " + JSON.stringify(account));
    console.info("eligibleCustomer: " + JSON.stringify(eligibleCustomer));

    if(account.FirstName.toUpperCase() === eligibleCustomer.toUpperCase()){

      var customerSegmentFilterConditions = context.configuration.customerSegmentFilterConditions;
      console.info("customerSegmentFilterConditions: " + JSON.stringify(customerSegmentFilterConditions));

      customerSegmentResource.getSegments({
        filter: customerSegmentFilterConditions
      })
      .then(function (customerSegments) {
        if(_.first(customerSegments.items)){
          var studentSegment = _.first(customerSegments.items);
          console.info("studentSegment: " + JSON.stringify(studentSegment));
          var accountId = [account.id];
          return customerSegmentResource.addSegmentAccounts({
            id: studentSegment.id
          },{
            body: accountId
          });
        }
      })
      .then(function (response) {
        console.info("Response: " + JSON.stringify(response));
        console.info("Successfully added " + account.emailAddress + " to the student segment.");
        callback();
      })
      .catch(function (err) {
        console.error(err);
        callback();
      });
    }
  }
};
