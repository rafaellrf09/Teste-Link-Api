const blingService = require('../services/BlingService');
const pipeDriveService = require('../services/PipeDivreService');

class BlingController {
  async index(_, res) {
    try {
      const orders = await blingService.orders();
      return res.json(orders);
    } catch (error) {
      return res.status(500).json('Internal Server error');
    }
  }

  async store(_, res) {
    try {
      const deals = await pipeDriveService.deals();

      const promisesDeals = await Promise.all(deals.map(async ( { person_name, date } ) => {
        return await blingService.createOrder(person_name, date); 
      }))

      return res.json(promisesDeals);

    } catch (error) {
      console.log(error);
      return res.status(500).json('Internal server error');
    }
  }
}

module.exports = new BlingController();