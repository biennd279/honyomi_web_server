
exports.up = function(knex) {
  return knex.schema.
      createTable("setting", function (t) {
        t.integer("classroom_id")
            .unsigned()
            .unique();
        t.foreign("classroom_id").references("classroom.id");
        t.boolean("require_approval_to_approve").defaultTo(false);
        t.enu("participant_messaging", ["role-based", "on", "off"])
            .defaultTo("role-based");
        t.boolean("message_with_children").defaultTo(true);
  })
};

exports.down = function(knex) {
  return knex.schema
      .dropTableIfExists("setting");
};
