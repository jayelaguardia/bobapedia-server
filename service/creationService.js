const creationService = {
  getAllCreation(knex) {
    return knex
      .raw(`SELECT *, a.addon_name as a_addon_name, b.addon_name as b_addon_name
      FROM
      usercreation
      JOIN bobatea ON tea_id = creation_tea
      LEFT JOIN bobaaddons a ON a.addon_id = creation_addons1  
      LEFT JOIN bobaaddons b ON creation_addons2 = b.addon_id`)
  },

  insertCreation(knex, newCreation) {
    return knex
      .insert(newCreation)
      .into('usercreation')
      .returning('*')
      .then(rows => {
        return rows[0];
      });
  },

  getById(knex, id) {
    return knex
      .raw(`SELECT *, a.addon_name as a_addon_name, b.addon_name as b_addon_name
        FROM
        usercreation
        JOIN bobatea ON tea_id = creation_tea
        LEFT JOIN bobaaddons a ON a.addon_id = creation_addons1  
        LEFT JOIN bobaaddons b ON creation_addons2 = b.addon_id
        WHERE classic_id = ${id}`)
  },

  deleteCreation(knex, creation_id) {
    return knex('usercreation')
      .where({ creation_id })
      .delete();
  },

  updateCreation(knex, creation_id, newCreationFields) {
    return knex('usercreation')
      .where({ creation_id })
      .update(newCreationFields);
  },
};

module.exports = creationService;