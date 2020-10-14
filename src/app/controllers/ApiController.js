const apiService = require('../services/ApiService');

class ApiController {
  async index(_, res) {
    try {
      const response = await apiService.list();
      res.json(response);
    } catch (error) {
      console.log(error);
      return res.status(500).json({error: "Internal server error"});
    }
  }

  async store(_, res) {
    try {
      const response = await apiService.createOrder();
      res.json(response);
    } catch (error) {
      console.log(error);
      return res.status(500).json({error: "Internal server error"});
    }
  }
}

module.exports = new ApiController();