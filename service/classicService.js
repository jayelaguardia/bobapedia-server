const classicService = {
  getAllClassic(knex) {
    return knex.select('*').from('classic');
  },

  getById(knex, id) {
    return knex
      .from('classic')
      .select('*')
      .where('classic_id', id)
      .first();
  },
};

module.exports = classicService;