"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var class_transformer_1 = require("class-transformer");
var ListNotaService_1 = __importDefault(require("../services/ListNotaService"));
var ShowNotaService_1 = __importDefault(require("../services/ShowNotaService"));
var CreateNotaService_1 = __importDefault(require("../services/CreateNotaService"));
var UpdateNotaService_1 = __importDefault(require("../services/UpdateNotaService"));
var DeleteNotaService_1 = __importDefault(require("../services/DeleteNotaService"));
var SetStatusNotaService_1 = __importDefault(require("../services/SetStatusNotaService"));
var ListNotaByFornecedorService_1 = __importDefault(require("../services/ListNotaByFornecedorService"));
var ListNotaByLojaService_1 = __importDefault(require("../services/ListNotaByLojaService"));
var ListNotaByFornecedorAndByLojaService_1 = __importDefault(require("../services/ListNotaByFornecedorAndByLojaService"));
var tsyringe_1 = require("tsyringe");
var NotaController = /** @class */ (function () {
    function NotaController() {
    }
    NotaController.prototype.index = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var listNota, notas;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        listNota = tsyringe_1.container.resolve(ListNotaService_1.default);
                        return [4 /*yield*/, listNota.execute()];
                    case 1:
                        notas = _a.sent();
                        return [2 /*return*/, response.json((0, class_transformer_1.instanceToInstance)(notas))];
                }
            });
        });
    };
    NotaController.prototype.listByLoja = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, listByLoja, tipos;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = request.params.id;
                        listByLoja = tsyringe_1.container.resolve(ListNotaByLojaService_1.default);
                        return [4 /*yield*/, listByLoja.execute({ id: id })];
                    case 1:
                        tipos = _a.sent();
                        return [2 /*return*/, response.json((0, class_transformer_1.instanceToInstance)(tipos))];
                }
            });
        });
    };
    NotaController.prototype.listNotaByFornecedorAndByLoja = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, fornecedor_id, loja_id, listByLoja, tipos;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.params, fornecedor_id = _a.fornecedor_id, loja_id = _a.loja_id;
                        listByLoja = tsyringe_1.container.resolve(ListNotaByFornecedorAndByLojaService_1.default);
                        return [4 /*yield*/, listByLoja.execute({ fornecedor_id: fornecedor_id, loja_id: loja_id })];
                    case 1:
                        tipos = _b.sent();
                        return [2 /*return*/, response.json((0, class_transformer_1.instanceToInstance)(tipos))];
                }
            });
        });
    };
    NotaController.prototype.listNotaByFornecedor = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, listNotaByFornecedor, notas;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = request.params.id;
                        listNotaByFornecedor = tsyringe_1.container.resolve(ListNotaByFornecedorService_1.default);
                        return [4 /*yield*/, listNotaByFornecedor.execute({ id: id })];
                    case 1:
                        notas = _a.sent();
                        return [2 /*return*/, response.json((0, class_transformer_1.instanceToInstance)(notas))];
                }
            });
        });
    };
    NotaController.prototype.show = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, showNotas, nota;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = request.params.id;
                        showNotas = tsyringe_1.container.resolve(ShowNotaService_1.default);
                        return [4 /*yield*/, showNotas.execute({ id: id })];
                    case 1:
                        nota = _a.sent();
                        return [2 /*return*/, response.json((0, class_transformer_1.instanceToInstance)(nota))];
                }
            });
        });
    };
    NotaController.prototype.create = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, numero, valor, fornecedor, tipoNota, destino, formaPagamento, observacao, status, loja, usuario_update, createNota, nota;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.body, numero = _a.numero, valor = _a.valor, fornecedor = _a.fornecedor, tipoNota = _a.tipoNota, destino = _a.destino, formaPagamento = _a.formaPagamento, observacao = _a.observacao, status = _a.status, loja = _a.loja, usuario_update = _a.usuario_update;
                        createNota = tsyringe_1.container.resolve(CreateNotaService_1.default);
                        return [4 /*yield*/, createNota.execute({
                                numero: numero,
                                valor: valor,
                                fornecedor: fornecedor,
                                tipoNota: tipoNota,
                                destino: destino,
                                formaPagamento: formaPagamento,
                                observacao: observacao,
                                status: status,
                                loja: loja,
                                usuario_update: usuario_update
                            })];
                    case 1:
                        nota = _b.sent();
                        return [2 /*return*/, response.json((0, class_transformer_1.instanceToInstance)(nota))];
                }
            });
        });
    };
    NotaController.prototype.update = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, _a, numero, valor, fornecedor, tipoNota, destino, formaPagamento, observacao, status, loja, usuario_update, updateNota, nota;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        id = request.params.id;
                        _a = request.body, numero = _a.numero, valor = _a.valor, fornecedor = _a.fornecedor, tipoNota = _a.tipoNota, destino = _a.destino, formaPagamento = _a.formaPagamento, observacao = _a.observacao, status = _a.status, loja = _a.loja, usuario_update = _a.usuario_update;
                        updateNota = tsyringe_1.container.resolve(UpdateNotaService_1.default);
                        return [4 /*yield*/, updateNota.execute({
                                nota_id: id,
                                numero: numero,
                                valor: valor,
                                fornecedor: fornecedor,
                                tipoNota: tipoNota,
                                destino: destino,
                                formaPagamento: formaPagamento,
                                observacao: observacao,
                                status: status,
                                loja: loja,
                                usuario_update: usuario_update
                            })];
                    case 1:
                        nota = _b.sent();
                        return [2 /*return*/, response.json((0, class_transformer_1.instanceToInstance)(nota))];
                }
            });
        });
    };
    NotaController.prototype.setStatus = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, _a, status, usuario_update, setStatusNota, nota;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        id = request.params.id;
                        _a = request.body, status = _a.status, usuario_update = _a.usuario_update;
                        setStatusNota = tsyringe_1.container.resolve(SetStatusNotaService_1.default);
                        return [4 /*yield*/, setStatusNota.execute({
                                id: id,
                                status: status,
                                usuario_update: usuario_update
                            })];
                    case 1:
                        nota = _b.sent();
                        return [2 /*return*/, response.json((0, class_transformer_1.instanceToInstance)(nota))];
                }
            });
        });
    };
    NotaController.prototype.delete = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, deleteNota;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = request.params.id;
                        deleteNota = tsyringe_1.container.resolve(DeleteNotaService_1.default);
                        return [4 /*yield*/, deleteNota.execute({ id: id })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, response.json([])];
                }
            });
        });
    };
    return NotaController;
}());
exports.default = NotaController;
