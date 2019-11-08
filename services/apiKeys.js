const MongoLib = require('../lib/mongo');

class ApiKeysService {
  constructor() {
    this.collection = 'api-keys';
    this.MongoDB = new MongoLib();
  }

  async getApiKey({ token }) {
    const [apiKey] = await this.MongoDB.getAll(this.collection, { token });
    return apiKey;
  }
}

module.exports = ApiKeysService;