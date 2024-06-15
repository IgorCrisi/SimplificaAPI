"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
var AppError_1 = __importDefault(require("../../../shared/errors/AppError"));
var tsyringe_1 = require("tsyringe");
var UpdateUserService = /** @class */ (function () {
    function UpdateUserService(usersRepository, lojaRepository) {
        this.usersRepository = usersRepository;
        this.lojaRepository = lojaRepository;
    }
    UpdateUserService.prototype.execute = function (_a) {
        var id = _a.id, name = _a.name, user = _a.user, observacao = _a.observacao, ativo = _a.ativo, notas = _a.notas, fornecedores = _a.fornecedores, destinos = _a.destinos, tiponota = _a.tiponota, formapagamento = _a.formapagamento, usuarios = _a.usuarios, lojas = _a.lojas, podeEditar = _a.podeEditar, admin = _a.admin, loja = _a.loja, usuario_update = _a.usuario_update;
        return __awaiter(this, void 0, void 0, function () {
            var userSave, lojaExists, userExist;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.usersRepository.findById(id)];
                    case 1:
                        userSave = _b.sent();
                        if (!userSave) {
                            throw new AppError_1.default('Usuário não encontrado');
                        }
                        console.log(loja);
                        return [4 /*yield*/, this.lojaRepository.findById(loja.toString())];
                    case 2:
                        lojaExists = _b.sent();
                        if (!lojaExists) {
                            throw new AppError_1.default('Loja não encontrada');
                        }
                        console.log(lojaExists);
                        return [4 /*yield*/, this.usersRepository.findByUser(user)];
                    case 3:
                        userExist = _b.sent();
                        if (userExist && userExist.id != id) {
                            throw new AppError_1.default('Este usuário não está disponível');
                        }
                        userSave.name = name;
                        userSave.user = user;
                        userSave.observacao = observacao !== null && observacao !== void 0 ? observacao : "";
                        userSave.ativo = ativo;
                        userSave.notas = notas;
                        userSave.fornecedores = fornecedores;
                        userSave.destinos = destinos;
                        userSave.tiponota = tiponota;
                        userSave.formapagamento = formapagamento;
                        userSave.usuarios = usuarios;
                        userSave.lojas = lojas;
                        userSave.podeEditar = podeEditar;
                        userSave.admin = admin;
                        userSave.loja = lojaExists;
                        userSave.usuario_update = usuario_update;
                        return [4 /*yield*/, this.usersRepository.save(userSave)];
                    case 4:
                        _b.sent();
                        return [2 /*return*/, userSave];
                }
            });
        });
    };
    UpdateUserService = __decorate([
        (0, tsyringe_1.injectable)(),
        __param(0, (0, tsyringe_1.inject)('UsersRepository')),
        __param(1, (0, tsyringe_1.inject)('LojaRepository')),
        __metadata("design:paramtypes", [Object, Object])
    ], UpdateUserService);
    return UpdateUserService;
}());
exports.default = UpdateUserService;
