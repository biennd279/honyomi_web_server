
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("setting").del()
    .then(function () {
      // Inserts seed entries
      return knex("setting").insert([
        {
          "classroom_id": 1,
        },
        {
          "classroom_id": 2,
          "require_approval_to_approve": true,
          "participant_messaging": "on",
          "message_with_children": true
        }
      ]);
    });
};
