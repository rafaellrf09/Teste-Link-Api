const axios = require('axios');

const xmlString = require('../../utils/xmlString');
class BlingService {
  constructor() {
    this.api_key = process.env.BLING_API_KEY; 
  }

  async orders() {
  try {
    const { data: { retorno: { pedidos } } } = await axios.get('https://bling.com.br/Api/v2/pedidos/json',
      {
        params: {
          apikey: this.api_key
        }
      }
    )

    if(!pedidos) return [];

    let x = [];

    pedidos.forEach(({ pedido : { totalvenda: total, data, numero: id, cliente: {nome : cliente} } }) => { 
      if(x[data] == undefined) x[data] = [];
      x[data].push({id, cliente, total})
    });

    return Object.entries(x);   
  } catch (error) {
    console.log('err', error);
    throw new Error(error);
  }
}

  async createOrder (name , date) {
    try {
    const pedido = await xmlString(name, date);

    const { data } = await axios.post('https://bling.com.br/Api/v2/pedido/json', 
        {
        }, 
        {
          params : {
            apikey: this.api_key,
            xml: pedido
        }
      }
    )
    return data
    
  } catch (error) {
    console.log('err', error);
    throw new Error(error);
  }
}
}

module.exports = new BlingService();