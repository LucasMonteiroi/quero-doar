import * as dotenv from 'dotenv';

dotenv.config();
let _path;
switch (process.env.NODE_ENV) {
  case 'production':
    _path = `${__dirname}/../../.env.production`;
    break;
  default:
    _path = `${__dirname}/../../.env.development`;
}
dotenv.config({ path: _path });

// Variables
export const EXPOSED_PORT = process.env.EXPOSED_PORT;
