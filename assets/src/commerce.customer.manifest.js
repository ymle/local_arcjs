module.exports = {
  
  'http.commerce.customer.accounts.addAccount.before': {
      actionName: 'http.commerce.customer.accounts.addAccount.before',
      customFunction: require('./domains/commerce.customer/http.commerce.customer.accounts.addAccount.before')
  },
  
  'http.commerce.customer.accounts.addAccount.after': {
      actionName: 'http.commerce.customer.accounts.addAccount.after',
      customFunction: require('./domains/commerce.customer/http.commerce.customer.accounts.addAccount.after')
  },
  
  'http.commerce.customer.accounts.addAccountAndLogin.before': {
      actionName: 'http.commerce.customer.accounts.addAccountAndLogin.before',
      customFunction: require('./domains/commerce.customer/http.commerce.customer.accounts.addAccountAndLogin.before')
  },
  
  'http.commerce.customer.accounts.addAccountAndLogin.after': {
      actionName: 'http.commerce.customer.accounts.addAccountAndLogin.after',
      customFunction: require('./domains/commerce.customer/http.commerce.customer.accounts.addAccountAndLogin.after')
  }
};
