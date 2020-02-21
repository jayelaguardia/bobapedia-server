const classicService = {
  getAllClassic(knex) {
    return knex
    .raw(`SELECT *, a.addon_name as a_addon_name, b.addon_name as b_addon_name
        FROM
        classic
        JOIN bobatea ON tea_id = classic_tea
        LEFT JOIN bobaaddons a ON a.addon_id = classic_addons1  
        LEFT JOIN bobaaddons b ON classic_addons2 = b.addon_id`)
  },

  getById(knex, id) {
    return knex
    .raw(`SELECT *, a.addon_name as a_addon_name, b.addon_name as b_addon_name
        FROM
        classic
        JOIN bobatea ON tea_id = classic_tea
        LEFT JOIN bobaaddons a ON a.addon_id = classic_addons1  
        LEFT JOIN bobaaddons b ON classic_addons2 = b.addon_id
        WHERE classic_id = ${id}`)
  },
};

module.exports = classicService;