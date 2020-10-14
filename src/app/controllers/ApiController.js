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
      res.status(202).json(response);
    } catch (error) {
      console.log(error);
      return res.status(500).json({error: "Internal server error"});
    }
  }

  async delete(_, res) {
    try {
      await apiService.deleteAll();
      res.json({ok: "dados deletados com sucesso"});
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new ApiController();