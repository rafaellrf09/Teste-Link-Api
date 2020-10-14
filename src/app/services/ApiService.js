class ApiService {
  constructor() {
    this.order = require('../../database/schemas/OrderSchema');
    this.blingService = require('../services/BlingService');
  }

  async list() {
    try {
      const orders = await this.order.find().sort("date");
      return orders;
    } catch (error) {
      throw new Error('Erro ao carregar vendas.  00x1');
    }
  }

  async createOrder() {
    try {
      const pedidos = await this.blingService.orders();

      let promises = [];
      pedidos.forEach(async (pedido) => {
        const databaseOrder = await this.order.findOne({date: pedido[0]})
        if(!databaseOrder){
          let fullTotal = 0;
          pedido[1].forEach(({total}) => {
            fullTotal += Number(total);
          })
          promises.push(await this.order.create({date: pedido[0], total: fullTotal}));
        }
      })

      await Promise.all(promises);
      return []
    } catch (error) {
      console.log(error);
      throw new Error('Cadastro de vendas com erro 00x25');
    }
  }
}

module.exports = new ApiService();