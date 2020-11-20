const {Model} = require("objection");
const knex = require("../databases/knex");
const Classroom = require("./Classroom");

Model.knex(knex);

class Setting extends Model {
  static get tableName() {
    return "setting";
  }

}

module.exports = Setting;