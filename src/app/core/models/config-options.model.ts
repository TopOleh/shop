import { ConfigOptions } from '../interfaces';

export class ConfigOptionsModel  implements ConfigOptions {
  constructor(public id?: number,
              public login?: string,
              public email?: string,
              public name?: string, ) {}
}
