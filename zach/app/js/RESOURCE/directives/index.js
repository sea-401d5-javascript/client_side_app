module.exports = function(app) {
  require('./performance/item.js')(app);
  require('./performance/list.js')(app);
  require('./performance/new_form.js')(app);
  require('./venue/item.js')(app);
  require('./venue/list.js')(app);
  require('./venue/new_form.js')(app);
};
