const classicService = {
  getAllClassic(knex) {
    return knex
      .from('classic')
      .select('*')
      .join('bobatea', {'tea_id' : 'classic_tea'})
      .leftJoin('bobaaddons', {'addon_id' : 'classic_addons1'})
  },

  getById(knex, id) {
    return knex
      .from('classic')
      .select('*')
      .join('bobatea', {'tea_id' : 'classic_tea'})
      .leftJoin('bobaaddons', {'addon_id' : 'classic_addons1'})
      .where('classic_id', id)
      .first();
  },
};

module.exports = classicService;