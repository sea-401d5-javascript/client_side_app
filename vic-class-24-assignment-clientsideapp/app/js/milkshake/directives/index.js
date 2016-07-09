module.exports = function(IceCreameryApp) {
  require('./milkshake-addorder-directive')(IceCreameryApp);
  require('./milkshake-orderhistory-directive')(IceCreameryApp);
  require('./milkshake-list-directive')(IceCreameryApp);
  require('./milkshake-updateorder-directive')(IceCreameryApp);
};
