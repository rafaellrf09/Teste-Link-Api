const axios = require('axios');
class PipeDriveService {
  constructor() {
    this.api_token = process.env.PIPEDRIVE_API_KEY;
    this.url = process.env.PIPEDRIVE_API_ENDPOINT;
  }

  async deals(status) {
    try {
    const { data: { data } } = await axios.get(`${this.url}/deals`,
      {
        params : {
          api_token: this.api_token,
          limit: 500,
          status
        }
      }
    )

    const result = data.map(({title, status, person_name, org_name, close_time: date}) => ({title, status, person_name, org_name, date}));
  
    return result;
  } catch (error) {
    console.log("err", error);
    throw new Error(error);
  }
  }
}

module.exports = new PipeDriveService();