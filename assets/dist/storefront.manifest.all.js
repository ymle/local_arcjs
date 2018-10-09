(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.index = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/**
 * Implementation for http.storefront.pages.cart.request.after


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

module.exports = function(context, callback) {
  // console.info("after request" + context.request);
  console.info("after response");
  console.info(context.response.body);
  callback();
};
},{}],2:[function(require,module,exports){
/**
 * Implementation for http.storefront.pages.cart.request.before


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

module.exports = function(context, callback) {
  console.info("before request");
  console.info(context.request);
  // console.info("before response" + context.response);
  context.response.set({ myCustomHeader: "howdy" });
  callback();
  
};
},{}],3:[function(require,module,exports){
module.exports = {
  
  'http.storefront.pages.cart.request.before': {
      actionName: 'http.storefront.pages.cart.request.before',
      customFunction: require('./domains/storefront/http.storefront.pages.cart.request.before')
  },
  
  'http.storefront.pages.cart.request.after': {
      actionName: 'http.storefront.pages.cart.request.after',
      customFunction: require('./domains/storefront/http.storefront.pages.cart.request.after')
  }
};

},{"./domains/storefront/http.storefront.pages.cart.request.after":1,"./domains/storefront/http.storefront.pages.cart.request.before":2}]},{},[3])(3)
});
