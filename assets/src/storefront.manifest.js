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
