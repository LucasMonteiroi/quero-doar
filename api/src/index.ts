import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { RegisterRoutes } from './routes/routes';
import { swaggerSetup } from './config/swagger.config';
import { EXPOSED_PORT } from './config/dotenv.config';

// Inicalizando express
const app = express();

// Configurando cors e body parser
app.use(bodyParser.json());
app.use(cors({ origin: true }));

// Configurando as Rotas dinamicamente
RegisterRoutes(app);

// Configurando o Swagger
swaggerSetup(app);

// Redirecionando qualquer endereço do browser para swagger
app.get('*', function (req, res) {
  res.redirect('/api/v1/docs');
});

// tslint:disable-next-line: no-console
app.listen(EXPOSED_PORT, () =>
  console.log(`Server started listening to port ${EXPOSED_PORT}`)
);
