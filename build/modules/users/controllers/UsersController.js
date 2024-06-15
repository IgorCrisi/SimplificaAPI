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
var CreateUserService_1 = __importDefault(require("../services/CreateUserService"));
var ListUserService_1 = __importDefault(require("../services/ListUserService"));
var class_transformer_1 = require("class-transformer");
var InativarAtivarUserService_1 = __importDefault(require("../services/InativarAtivarUserService"));
var ShowUserService_1 = __importDefault(require("../services/ShowUserService"));
var UpdateUserService_1 = __importDefault(require("../services/UpdateUserService"));
var DeleteUserService_1 = __importDefault(require("../services/DeleteUserService"));
var tsyringe_1 = require("tsyringe");
var UsersController = /** @class */ (function () {
    function UsersController() {
    }
    UsersController.prototype.index = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var listUser, users;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        listUser = tsyringe_1.container.resolve(ListUserService_1.default);
                        return [4 /*yield*/, listUser.execute()];
                    case 1:
                        users = _a.sent();
                        return [2 /*return*/, response.json((0, class_transformer_1.instanceToInstance)(users))];
                }
            });
        });
    };
    UsersController.prototype.show = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, showUser, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = request.params.id;
                        showUser = tsyringe_1.container.resolve(ShowUserService_1.default);
                        return [4 /*yield*/, showUser.execute({ id: id })];
                    case 1:
                        user = _a.sent();
                        return [2 /*return*/, response.json((0, class_transformer_1.instanceToInstance)(user))];
                }
            });
        });
    };
    UsersController.prototype.create = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, name, user, password, observacao, ativo, notas, fornecedores, destinos, tiponota, formapagamento, usuarios, lojas, podeEditar, admin, loja, usuario_update, createUser, userStore;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.body, name = _a.name, user = _a.user, password = _a.password, observacao = _a.observacao, ativo = _a.ativo, notas = _a.notas, fornecedores = _a.fornecedores, destinos = _a.destinos, tiponota = _a.tiponota, formapagamento = _a.formapagamento, usuarios = _a.usuarios, lojas = _a.lojas, podeEditar = _a.podeEditar, admin = _a.admin, loja = _a.loja, usuario_update = _a.usuario_update;
                        createUser = tsyringe_1.container.resolve(CreateUserService_1.default);
                        return [4 /*yield*/, createUser.execute({
                                name: name,
                                user: user,
                                password: password,
                                observacao: observacao,
                                ativo: ativo,
                                notas: notas,
                                fornecedores: fornecedores,
                                destinos: destinos,
                                tiponota: tiponota,
                                formapagamento: formapagamento,
                                usuarios: usuarios,
                                lojas: lojas,
                                podeEditar: podeEditar,
                                admin: admin,
                                loja: loja,
                                usuario_update: usuario_update
                            })];
                    case 1:
                        userStore = _b.sent();
                        return [2 /*return*/, response.json((0, class_transformer_1.instanceToInstance)(userStore))];
                }
            });
        });
    };
    UsersController.prototype.update = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, _a, name, user, observacao, ativo, notas, fornecedores, destinos, tiponota, formapagamento, usuarios, lojas, podeEditar, admin, loja, usuario_update, updateUser, userStore;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        id = request.params.id;
                        _a = request.body, name = _a.name, user = _a.user, observacao = _a.observacao, ativo = _a.ativo, notas = _a.notas, fornecedores = _a.fornecedores, destinos = _a.destinos, tiponota = _a.tiponota, formapagamento = _a.formapagamento, usuarios = _a.usuarios, lojas = _a.lojas, podeEditar = _a.podeEditar, admin = _a.admin, loja = _a.loja, usuario_update = _a.usuario_update;
                        updateUser = tsyringe_1.container.resolve(UpdateUserService_1.default);
                        return [4 /*yield*/, updateUser.execute({
                                id: id,
                                name: name,
                                user: user,
                                observacao: observacao,
                                ativo: ativo,
                                notas: notas,
                                fornecedores: fornecedores,
                                destinos: destinos,
                                tiponota: tiponota,
                                formapagamento: formapagamento,
                                usuarios: usuarios,
                                lojas: lojas,
                                podeEditar: podeEditar,
                                admin: admin,
                                loja: loja,
                                usuario_update: usuario_update
                            })];
                    case 1:
                        userStore = _b.sent();
                        return [2 /*return*/, response.json((0, class_transformer_1.instanceToInstance)(userStore))];
                }
            });
        });
    };
    UsersController.prototype.delete = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, deleteUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = request.params.id;
                        deleteUser = tsyringe_1.container.resolve(DeleteUserService_1.default);
                        return [4 /*yield*/, deleteUser.execute({ id: id })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, response.json([])];
                }
            });
        });
    };
    UsersController.prototype.inativarAtivarUser = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, id, ativo, usuario_update, inativoAtivoUser, user;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.body, id = _a.id, ativo = _a.ativo, usuario_update = _a.usuario_update;
                        inativoAtivoUser = tsyringe_1.container.resolve(InativarAtivarUserService_1.default);
                        return [4 /*yield*/, inativoAtivoUser.execute({
                                id: id,
                                ativo: ativo,
                                usuario_update: usuario_update
                            })];
                    case 1:
                        user = _b.sent();
                        return [2 /*return*/, response.json((0, class_transformer_1.instanceToInstance)(user))];
                }
            });
        });
    };
    return UsersController;
}());
exports.default = UsersController;
