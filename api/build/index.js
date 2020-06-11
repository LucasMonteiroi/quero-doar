"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var routes_1 = require("./routes/routes");
var swagger_config_1 = require("./config/swagger.config");
var dotenv_config_1 = require("./config/dotenv.config");
// Inicalizando express
var app = express_1.default();
// Configurando cors e body parser
app.use(body_parser_1.default.json());
app.use(cors_1.default({ origin: true }));
// Configurando as Rotas dinamicamente
routes_1.RegisterRoutes(app);
// Configurando o Swagger
swagger_config_1.swaggerSetup(app);
// Redirecionando qualquer endereço do browser para swagger
app.get('*', function (req, res) {
    res.redirect('/api/v1/docs');
});
var getYear = function (date) {
    return "" + date.getFullYear();
};
// tslint:disable-next-line: no-console
app.listen(dotenv_config_1.EXPOSED_PORT, function () {
    return console.log("Server started listening to port " + dotenv_config_1.EXPOSED_PORT);
});
