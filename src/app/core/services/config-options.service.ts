import { ConfigOptions } from '../interfaces';
import { ConfigOptionsModel } from '../models';

export class ConfigOptionsService {

  public configOptions: ConfigOptions = new ConfigOptionsModel(1, 'somelogin', 'somelogin@email.com', 'vasa');

  constructor() { }

  setConfigs(configs: ConfigOptions): void {
    const {id, name, email, login } = configs;
    this.configOptions = new ConfigOptionsModel(id, login, email, name);
  }

  getConfigs(): ConfigOptions {
    return  this.configOptions;
  }
}
