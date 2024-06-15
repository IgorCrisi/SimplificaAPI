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
var ListTipoNotaService_1 = __importDefault(require("../services/ListTipoNotaService"));
var ShowTipoNotaService_1 = __importDefault(require("../services/ShowTipoNotaService"));
var CreateTipoNotaService_1 = __importDefault(require("../services/CreateTipoNotaService"));
var UpdateTipoNotaService_1 = __importDefault(require("../services/UpdateTipoNotaService"));
var DeleteTipoNotaService_1 = __importDefault(require("../services/DeleteTipoNotaService"));
var ListTipoNotaByLojaService_1 = __importDefault(require("../services/ListTipoNotaByLojaService"));
var tsyringe_1 = require("tsyringe");
var TipoNotaController = /** @class */ (function () {
    function TipoNotaController() {
    }
    TipoNotaController.prototype.index = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var listTipoNota, tipos;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        listTipoNota = tsyringe_1.container.resolve(ListTipoNotaService_1.default);
                        return [4 /*yield*/, listTipoNota.execute()];
                    case 1:
                        tipos = _a.sent();
                        return [2 /*return*/, response.json((0, class_transformer_1.instanceToInstance)(tipos))];
                }
            });
        });
    };
    TipoNotaController.prototype.listByLoja = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, listTipoNotaByLojaService, tipos;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = request.params.id;
                        listTipoNotaByLojaService = tsyringe_1.container.resolve(ListTipoNotaByLojaService_1.default);
                        return [4 /*yield*/, listTipoNotaByLojaService.execute({ id: id })];
                    case 1:
                        tipos = _a.sent();
                        return [2 /*return*/, response.json((0, class_transformer_1.instanceToInstance)(tipos))];
                }
            });
        });
    };
    TipoNotaController.prototype.show = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, showTipo, tipo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = request.params.id;
                        showTipo = tsyringe_1.container.resolve(ShowTipoNotaService_1.default);
                        return [4 /*yield*/, showTipo.execute({ id: id })];
                    case 1:
                        tipo = _a.sent();
                        return [2 /*return*/, response.json((0, class_transformer_1.instanceToInstance)(tipo))];
                }
            });
        });
    };
    TipoNotaController.prototype.create = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, name, observacao, loja, usuario_update, createTipo, tipo;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.body, name = _a.name, observacao = _a.observacao, loja = _a.loja, usuario_update = _a.usuario_update;
                        createTipo = tsyringe_1.container.resolve(CreateTipoNotaService_1.default);
                        return [4 /*yield*/, createTipo.execute({
                                name: name,
                                observacao: observacao,
                                loja: loja,
                                usuario_update: usuario_update
                            })];
                    case 1:
                        tipo = _b.sent();
                        return [2 /*return*/, response.json((0, class_transformer_1.instanceToInstance)(tipo))];
                }
            });
        });
    };
    TipoNotaController.prototype.update = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, _a, name, observacao, loja, usuario_update, updateTipo, tipo;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        id = request.params.id;
                        _a = request.body, name = _a.name, observacao = _a.observacao, loja = _a.loja, usuario_update = _a.usuario_update;
                        updateTipo = tsyringe_1.container.resolve(UpdateTipoNotaService_1.default);
                        return [4 /*yield*/, updateTipo.execute({
                                tipo_id: id,
                                name: name,
                                observacao: observacao,
                                loja: loja,
                                usuario_update: usuario_update
                            })];
                    case 1:
                        tipo = _b.sent();
                        return [2 /*return*/, response.json((0, class_transformer_1.instanceToInstance)(tipo))];
                }
            });
        });
    };
    TipoNotaController.prototype.delete = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, deleteTipo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = request.params.id;
                        deleteTipo = tsyringe_1.container.resolve(DeleteTipoNotaService_1.default);
                        return [4 /*yield*/, deleteTipo.execute({ id: id })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, response.json([])];
                }
            });
        });
    };
    return TipoNotaController;
}());
exports.default = TipoNotaController;
