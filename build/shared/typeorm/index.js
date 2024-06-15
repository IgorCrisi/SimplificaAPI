"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSource = void 0;
var typeorm_1 = require("typeorm");
var User_1 = __importDefault(require("../../modules/users/typeorm/entities/User"));
var UserToken_1 = __importDefault(require("../../modules/users/typeorm/entities/UserToken"));
var TipoNota_1 = __importDefault(require("../../modules/tipoNota/typeorm/entities/TipoNota"));
var Nota_1 = __importDefault(require("../../modules/notas/typeorm/entities/Nota"));
var Loja_1 = __importDefault(require("../../modules/lojas/typeorm/entities/Loja"));
var Fornecedor_1 = __importDefault(require("../../modules/fornecedor/typeorm/entities/Fornecedor"));
var FormaPagamento_1 = __importDefault(require("../../modules/formaPagamento/typeorm/entities/FormaPagamento"));
var Destino_1 = __importDefault(require("../../modules/destinos/typeorm/entities/Destino"));
var _1682621914795_CreateUserTable_1 = require("./migrations/1682621914795-CreateUserTable");
var _1682623516357_CreateUserToken_1 = require("./migrations/1682623516357-CreateUserToken");
var _1682719379072_CreateLojaTable_1 = require("./migrations/1682719379072-CreateLojaTable");
var _1682727016822_CreateFormaPagamentoTable_1 = require("./migrations/1682727016822-CreateFormaPagamentoTable");
var _1682779264404_CreateTipoNotaTable_1 = require("./migrations/1682779264404-CreateTipoNotaTable");
var _1682786768569_CreateDestinoTable_1 = require("./migrations/1682786768569-CreateDestinoTable");
var _1682791042996_CreateFornecedorTable_1 = require("./migrations/1682791042996-CreateFornecedorTable");
var _1682881463117_CreateNotaTable_1 = require("./migrations/1682881463117-CreateNotaTable");
var _1682791281221_AddTipoNotaFornecedor_1 = require("./migrations/1682791281221-AddTipoNotaFornecedor");
var _1682791456454_AddDestinoFornecedor_1 = require("./migrations/1682791456454-AddDestinoFornecedor");
var _1682791607095_AddFormaPagamentoFornecedor_1 = require("./migrations/1682791607095-AddFormaPagamentoFornecedor");
var _1682881985662_AddFornecedorToNota_1 = require("./migrations/1682881985662-AddFornecedorToNota");
var _1682882010479_AddTipoNotaToNota_1 = require("./migrations/1682882010479-AddTipoNotaToNota");
var _1682882026730_AddDestinoToNota_1 = require("./migrations/1682882026730-AddDestinoToNota");
var _1682882049602_AddFormaPagamentoToNota_1 = require("./migrations/1682882049602-AddFormaPagamentoToNota");
var _1683047155933_AddLojaToUsuario_1 = require("./migrations/1683047155933-AddLojaToUsuario");
var _1683047181473_AddLojaToFormaPagamento_1 = require("./migrations/1683047181473-AddLojaToFormaPagamento");
var _1683047195282_AddLojaToTiponota_1 = require("./migrations/1683047195282-AddLojaToTiponota");
var _1683047205356_AddLojaToDestino_1 = require("./migrations/1683047205356-AddLojaToDestino");
var _1683047221108_AddLojaToFornecedor_1 = require("./migrations/1683047221108-AddLojaToFornecedor");
var _1683047231704_AddLojaToNota_1 = require("./migrations/1683047231704-AddLojaToNota");
exports.dataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5431,
    username: 'postgres',
    password: 'postgres',
    database: 'amsi',
    logging: false,
    entities: [Destino_1.default, FormaPagamento_1.default, Fornecedor_1.default, Loja_1.default, Nota_1.default, TipoNota_1.default, UserToken_1.default, User_1.default],
    migrations: [
        _1682621914795_CreateUserTable_1.CreateUserTable1682621914795,
        _1682623516357_CreateUserToken_1.CreateUserToken1682623516357,
        _1682719379072_CreateLojaTable_1.CreateLojaTable1682719379072,
        _1682727016822_CreateFormaPagamentoTable_1.CreateFormaPagamentoTable1682727016822,
        _1682779264404_CreateTipoNotaTable_1.CreateTipoNotaTable1682779264404,
        _1682786768569_CreateDestinoTable_1.CreateDestinoTable1682786768569,
        _1682791042996_CreateFornecedorTable_1.CreateFornecedorTable1682791042996,
        _1682881463117_CreateNotaTable_1.CreateNotaTable1682881463117,
        _1682791281221_AddTipoNotaFornecedor_1.AddTipoNotaFornecedor1682791281221,
        _1682791456454_AddDestinoFornecedor_1.AddDestinoFornecedor1682791456454,
        _1682791607095_AddFormaPagamentoFornecedor_1.AddFormaPagamentoFornecedor1682791607095,
        _1682881985662_AddFornecedorToNota_1.AddFornecedorToNota1682881985662,
        _1682882010479_AddTipoNotaToNota_1.AddTipoNotaToNota1682882010479,
        _1682882026730_AddDestinoToNota_1.AddDestinoToNota1682882026730,
        _1682882049602_AddFormaPagamentoToNota_1.AddFormaPagamentoToNota1682882049602,
        _1683047155933_AddLojaToUsuario_1.AddLojaToUsuario1683047155933,
        _1683047181473_AddLojaToFormaPagamento_1.AddLojaToFormaPagamento1683047181473,
        _1683047195282_AddLojaToTiponota_1.AddLojaToTiponota1683047195282,
        _1683047205356_AddLojaToDestino_1.AddLojaToDestino1683047205356,
        _1683047221108_AddLojaToFornecedor_1.AddLojaToFornecedor1683047221108,
        _1683047231704_AddLojaToNota_1.AddLojaToNota1683047231704
    ],
});
