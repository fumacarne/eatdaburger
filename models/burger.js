const orm = require('../config/orm');

function all () {
    return orm.selectAll("burgers");
};

function create (data) {
  return orm.createAll("burgers", data);
};

function devour (id) {
  return orm.updateAll("burgers", {devoured: true}, id);
};


module.exports = { all, create, devour }