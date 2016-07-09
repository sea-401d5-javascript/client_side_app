module.exports = function (IceCreameryApp) {
  require('./icecream-addorder-directive')(IceCreameryApp);
  require('./icecream-orderhistory-directive')(IceCreameryApp);
  require('./icecream-list-directive')(IceCreameryApp);
  require('./icecream-updateorder-directive')(IceCreameryApp);
};
