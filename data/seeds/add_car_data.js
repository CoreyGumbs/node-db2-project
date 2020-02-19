
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
          make: 'Honda',
          model: 'Accord',
          transmission_type: 'standard',
          title_status: 'clean',
          mileage: 152347,
          vin_num: '3GTP2VE73CG142418',
          year: 2012
        },
        {
          make: 'Toyota',
          model: 'Camry',
          transmission_type: 'automatic',
          title_status: 'clean',
          mileage: 187432,
          vin_num: '1VWBN7A33EC027448',
          year: 2005
        },
        {
          make: 'Ford',
          model: 'Explorer',
          transmission_type: 'automatic',
          title_status: 'clean',
          mileage: 28900,
          vin_num: '1FTNE24W54HB21941',
          year: 2018
        },
        {
          make: 'Ford',
          model: 'Explorer',
          transmission_type: 'automatic',
          title_status: 'salvage',
          mileage: 234687,
          vin_num: '1GTHK33284F275694',
          year: 1997
        },
        {
          make: 'Honda',
          model: 'Civic',
          transmission_type: 'standard',
          title_status: 'salvage',
          mileage: 15234,
          vin_num: '1G1ZD5E78BF240517',
          year: 2019
        }
      ]);
    });
};
