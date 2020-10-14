const pipeDriveService = require('../services/PipeDivreService');

class PipeDriveController {
  async index(_, res) {
    try {
      const deals = await pipeDriveService.deals("won");
      return res.json(deals)
    } catch (error) {
      console.log(error);
      return res.status(500).json('Internal server error');
    }
  }
}

module.exports = new PipeDriveController();