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
var ListLojaService_1 = __importDefault(require("../services/ListLojaService"));
var ShowLojaService_1 = __importDefault(require("../services/ShowLojaService"));
var CreateLojaService_1 = __importDefault(require("../services/CreateLojaService"));
var UpdateLojaService_1 = __importDefault(require("../services/UpdateLojaService"));
var DeleteLojaService_1 = __importDefault(require("../services/DeleteLojaService"));
var tsyringe_1 = require("tsyringe");
var LojaController = /** @class */ (function () {
    function LojaController() {
    }
    LojaController.prototype.index = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var listLoja, lojas;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        listLoja = tsyringe_1.container.resolve(ListLojaService_1.default);
                        return [4 /*yield*/, listLoja.execute()];
                    case 1:
                        lojas = _a.sent();
                        return [2 /*return*/, response.json((0, class_transformer_1.instanceToInstance)(lojas))];
                }
            });
        });
    };
    LojaController.prototype.show = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, showLoja, loja;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = request.params.id;
                        showLoja = tsyringe_1.container.resolve(ShowLojaService_1.default);
                        return [4 /*yield*/, showLoja.execute({ id: id })];
                    case 1:
                        loja = _a.sent();
                        return [2 /*return*/, response.json((0, class_transformer_1.instanceToInstance)(loja))];
                }
            });
        });
    };
    LojaController.prototype.create = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, name, observacao, usuario_update, createLoja, loja;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.body, name = _a.name, observacao = _a.observacao, usuario_update = _a.usuario_update;
                        createLoja = tsyringe_1.container.resolve(CreateLojaService_1.default);
                        return [4 /*yield*/, createLoja.execute({
                                name: name,
                                observacao: observacao,
                                usuario_update: usuario_update
                            })];
                    case 1:
                        loja = _b.sent();
                        return [2 /*return*/, response.json((0, class_transformer_1.instanceToInstance)(loja))];
                }
            });
        });
    };
    LojaController.prototype.update = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, _a, name, observacao, usuario_update, updateLoja, loja;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        id = request.params.id;
                        _a = request.body, name = _a.name, observacao = _a.observacao, usuario_update = _a.usuario_update;
                        updateLoja = tsyringe_1.container.resolve(UpdateLojaService_1.default);
                        return [4 /*yield*/, updateLoja.execute({
                                loja_id: id,
                                name: name,
                                observacao: observacao,
                                usuario_update: usuario_update
                            })];
                    case 1:
                        loja = _b.sent();
                        return [2 /*return*/, response.json((0, class_transformer_1.instanceToInstance)(loja))];
                }
            });
        });
    };
    LojaController.prototype.delete = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, deleteLoja;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = request.params.id;
                        deleteLoja = tsyringe_1.container.resolve(DeleteLojaService_1.default);
                        return [4 /*yield*/, deleteLoja.execute({ id: id })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, response.json([])];
                }
            });
        });
    };
    return LojaController;
}());
exports.default = LojaController;
