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
var UpdateFornecedorService = /** @class */ (function () {
    function UpdateFornecedorService(fornecedorRepository, tipoNotaRepository, destinoRepository, formaPagamentoRepository, lojaRepository) {
        this.fornecedorRepository = fornecedorRepository;
        this.tipoNotaRepository = tipoNotaRepository;
        this.destinoRepository = destinoRepository;
        this.formaPagamentoRepository = formaPagamentoRepository;
        this.lojaRepository = lojaRepository;
    }
    UpdateFornecedorService.prototype.execute = function (_a) {
        var id = _a.id, cnpj = _a.cnpj, razao = _a.razao, email = _a.email, contato = _a.contato, tipoNota = _a.tipoNota, destino = _a.destino, formaPagamento = _a.formaPagamento, observacao = _a.observacao, loja = _a.loja, usuario_update = _a.usuario_update;
        return __awaiter(this, void 0, void 0, function () {
            var fornecedor, lojaExists, cnpjExist, razaoExist, tipoNotaExist, destinoExist, formaPagamentoExist;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.fornecedorRepository.findById(id)];
                    case 1:
                        fornecedor = _b.sent();
                        if (!fornecedor) {
                            throw new AppError_1.default('Fornecedor não encontrado');
                        }
                        return [4 /*yield*/, this.lojaRepository.findById(loja.toString())];
                    case 2:
                        lojaExists = _b.sent();
                        if (!lojaExists) {
                            throw new AppError_1.default('Loja não encontrada');
                        }
                        return [4 /*yield*/, this.fornecedorRepository.findByCnpj(cnpj)];
                    case 3:
                        cnpjExist = _b.sent();
                        if (cnpjExist && cnpjExist.id != id) {
                            throw new AppError_1.default('Este CNPJ não está disponível');
                        }
                        return [4 /*yield*/, this.fornecedorRepository.findByRazao(razao)];
                    case 4:
                        razaoExist = _b.sent();
                        if (razaoExist && razaoExist.id != id) {
                            throw new AppError_1.default('Esta razão social não está disponível');
                        }
                        tipoNotaExist = null;
                        if (!(tipoNota != null)) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.tipoNotaRepository.findById(tipoNota.toString())];
                    case 5:
                        tipoNotaExist = _b.sent();
                        if (!tipoNotaExist) {
                            throw new AppError_1.default('Tipo de nota não encontrado');
                        }
                        _b.label = 6;
                    case 6:
                        destinoExist = null;
                        if (!(destino != null)) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.destinoRepository.findById(destino.toString())];
                    case 7:
                        destinoExist = _b.sent();
                        if (!destinoExist) {
                            throw new AppError_1.default('Destino não encontrado');
                        }
                        _b.label = 8;
                    case 8:
                        formaPagamentoExist = null;
                        if (!(formaPagamento != null)) return [3 /*break*/, 10];
                        return [4 /*yield*/, this.formaPagamentoRepository.findById(formaPagamento.toString())];
                    case 9:
                        formaPagamentoExist = _b.sent();
                        if (!formaPagamentoExist) {
                            throw new AppError_1.default('Forma de pagamento não encontrada');
                        }
                        _b.label = 10;
                    case 10:
                        fornecedor.cnpj = cnpj;
                        fornecedor.razao = razao;
                        if (email != null) {
                            fornecedor.email = email;
                        }
                        if (contato != null) {
                            fornecedor.contato = contato;
                        }
                        if (tipoNotaExist != null) {
                            fornecedor.tipoNota = tipoNotaExist;
                        }
                        else {
                            fornecedor.tipoNota = null;
                        }
                        if (destinoExist != null) {
                            fornecedor.destino = destinoExist;
                        }
                        else {
                            fornecedor.destino = null;
                        }
                        if (formaPagamentoExist != null) {
                            fornecedor.forma_pagamento = formaPagamentoExist;
                        }
                        else {
                            fornecedor.forma_pagamento = null;
                        }
                        if (observacao != null) {
                            fornecedor.observacao = observacao;
                        }
                        fornecedor.loja = lojaExists;
                        fornecedor.usuario_update = usuario_update;
                        return [4 /*yield*/, this.fornecedorRepository.save(fornecedor)];
                    case 11:
                        _b.sent();
                        return [2 /*return*/, fornecedor];
                }
            });
        });
    };
    UpdateFornecedorService = __decorate([
        (0, tsyringe_1.injectable)(),
        __param(0, (0, tsyringe_1.inject)('FornecedorRepository')),
        __param(1, (0, tsyringe_1.inject)('TipoNotaRepository')),
        __param(2, (0, tsyringe_1.inject)('DestinoRepository')),
        __param(3, (0, tsyringe_1.inject)('FormaPagamentoRepository')),
        __param(4, (0, tsyringe_1.inject)('LojaRepository')),
        __metadata("design:paramtypes", [Object, Object, Object, Object, Object])
    ], UpdateFornecedorService);
    return UpdateFornecedorService;
}());
exports.default = UpdateFornecedorService;
