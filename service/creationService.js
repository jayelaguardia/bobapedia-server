const creationService = {
  getAllCreation(knex) {
    return knex
      .from('usercreation')
      .select('*')
      .join('bobatea', {'tea_id' : 'creation_tea'})
      .leftJoin('bobaaddons', {'addon_id' : 'creation_addons1'})
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
      .from('usercreation')
      .select('*')
      .join('bobatea', {'tea_id' : 'creation_tea'})
      .leftJoin('bobaaddons', {'addon_id' : 'creation_addons1'})
      .where('creation_id', id)
      .first();
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